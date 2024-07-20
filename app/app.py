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

    @app.route('/robots.txt')
    def robots_txt():
        return send_from_directory(app.static_folder, 'robots.txt')
 
    return app