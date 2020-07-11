#!/usr/bin/python

import flask
from flask import request, jsonify

import requests

app = flask.Flask(__name__)
app.config["DEBUG"] = True

apiKey = "AIzaSyCiO1LK78bn5NYUkqytbXrUb-d-dbqPK5o"
baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + apiKey

@app.route('/', methods=['GET'])
def home():
    return "Hello, world!"

@app.route('/api/convertAddress', methods=['GET'])
def convert_address():
    result = ''
    status = 'Success'
    statusCode = 200

    if 'address' in request.args:
        address = request.args.get('address')
    else:
        status = 'Invalid request'
        statusCode = 400

    response = {
        'result': result,
        'status': status,
    }
    
    return jsonify(response), statusCode

@app.route('/api/places', methods=['GET'])
def api_places():
    results = []
    status = 'Success'
    statusCode = 200

    if 'lat' in request.args and 'long' in request.args:
        latitude = request.args.get('lat')
        longitude = request.args.get('long')

        listPlaces = requests.get(baseURL, params=listPlacesPayload)

        app.logger.info("Received request for %s,%s and returned %s results with status %s (%s)", latitude, longitude, len(results), statusCode, status)
    else:
        status = 'Invalid request'
        statusCode = 400

        app.logger.info("Received invalid request and returned %s results with status %s (%s)", len(results), statusCode, status)

    response = {
        'results': results,
        'status': status
    }

    return jsonify(response), statusCode

app.run()

