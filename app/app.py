from flask import Flask, render_template, send_from_directory
from dotenv import load_dotenv
import os
import json

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config['ENV'] = os.getenv('ENV')
    
    data_file_path = os.path.join(os.path.dirname(__file__), 'data', 'data.json')


    with open(data_file_path, 'r' , encoding='utf-8') as file:
        data = json.load(file)

    @app.route('/')
    def index():
        context = {
            'siteTitle': "Product list with cart",
            'mainTitle': "Desserts",
            'addToCartText' : "Add to Cart",
            'data': data
        }
        return render_template('index.html', **context)
    
    @app.route('/chat')
    def chat():
        context = {
            'siteTitle': "Chat with AI",
            'mainTitle': "Chat with AI",
        }
        return render_template('chat.html', **context)
            

    @app.route('/robots.txt')
    def robots_txt():
        return send_from_directory(app.static_folder, 'robots.txt')

    return app