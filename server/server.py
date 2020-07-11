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

@app.route('/api/places', methods=['GET'])
def api_places():
    latitude = request.args.get('lat')
    longitude = request.args.get('long')

    results = []
    status = ''

    response = {
        'results': results,
        'status': status
    }

    app.logger.info("Received request for %s,%s and returned %s results with status %s", latitude, longitude, len(results), status)

    return jsonify(response), statusCode

app.run()

