from flask import Blueprint, jsonify
from pymongo import MongoClient
from config import MONGO_URI, DATABASE_NAME

headers_blueprint = Blueprint('headers', __name__)

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
collection = db['Headers']

@headers_blueprint.route('/api/headers', methods=['GET'])
def get_all_headers():
    allHeaders = list(collection.find())

    for header in allHeaders:
        header['_id'] = str(header['_id'])

    return jsonify(allHeaders)
