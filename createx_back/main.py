from flask import Flask
from flask_cors  import CORS
from header_api_controller import headers_blueprint

app = Flask(__name__)

CORS(app)

@app.route('/')
def hello_geek():
    return '<h1>Hello from Flask & Docker</h2>'

app.register_blueprint(headers_blueprint)

if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=5103)
