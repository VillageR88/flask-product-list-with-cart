from flask import Flask, render_template, send_from_directory, request, jsonify
from dotenv import load_dotenv
from openai import OpenAI
from flask_cors import CORS

import os
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['ENV'] = os.getenv('ENV')
    
    data_file_path = os.path.join(os.path.dirname(__file__), 'data', 'data.json')

    with open(data_file_path, 'r' , encoding='utf-8') as file:
        data = json.load(file)
        for item in data:
            item['name'] = item['name'].replace(' ', '-')

    @app.route('/')
    def index():
        context = {
            'siteTitle': "Product list with cart",
            'mainTitle': "Desserts",
            'addToCartText' : "Add to Cart",
            'data': data
        }
        return render_template('index.html', **context)
    
    @app.route('/api/chat/', methods=['GET'])
    def chat_page():
        context = {
            'siteTitle': "Chat with AI",
            'mainTitle': "Chat with AI",
        }
        return render_template('chat.html', **context)

    @app.route('/chat/', methods=['POST'])
    def contact_form():
        form_data = request.form

        result = create_invoice_contact_form(form_data)
        return jsonify(result)

    def create_invoice_contact_form(form_data):
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        email_user = os.getenv('EMAIL')
        email_password = os.getenv('PASSWORD')
        email_to = os.getenv('MY_EMAIL')

        if not email_user or not email_password or not email_to:
            return {'error': 'Email configuration is missing'}

        chat_message = form_data.get('textInput')
        if not chat_message:
            return {'error': 'No message provided'}

        html_content = chat_message

        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = email_to
        msg['Subject'] = 'Contact Form'
        msg.attach(MIMEText(html_content, 'html'))

        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(email_user, email_password)
            server.sendmail(email_user, email_to, msg.as_string())
            server.quit()
        except Exception as e:
            print(f'there was an error: {e}')
            return {'error': str(e)}

        return {'status': 'Email sent successfully'}

    @app.route('/robots.txt')
    def robots_txt():
        return send_from_directory(app.static_folder, 'robots.txt')
 
    return app

# Vercel serverless function handler
def handler(event, context):
    return app(event, context)