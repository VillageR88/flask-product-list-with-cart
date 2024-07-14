from flask import Flask, render_template, send_from_directory
import json

def create_app():
    app = Flask(__name__)

    with open('data/data.json', 'r' , encoding='utf-8') as file:
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

    @app.route('/robots.txt')
    def robots_txt():
        return send_from_directory(app.static_folder, 'robots.txt')

    return app