#!/usr/bin/python

import os

from dotenv import load_dotenv
load_dotenv()

import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

import requests

apiKey = os.getenv("APIKEY")

geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + apiKey
searchURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + apiKey

@app.route('/', methods=['GET'])
def home():
    return "Hello, world!"

@app.route('/api/address', methods=['GET'])
def convert_address():
    results = []
    status = 'Success'
    statusCode = 200

    if 'address' in request.args:
        address = request.args.get('address')

        payload = {
            'address': address
        }

        geocoded = request.get(geocodeURL, params=payload)

        geocodedLocation = geocoded.json()['results'][0]['geometry']['location']

        latitude = geocodedLocation['lat']
        longitude = geocodedLocation['lng']

        app.logger.info("Received address request for %s and returned %s results with status %s (%s)", address, len(results), statusCode, status)
    else:
        app.logger.info("Received invalid address request and returned %s results with status %s (%s)", len(results), statusCode, status)
        status = 'Invalid request'
        statusCode = 400

    response = {
        'results': results,
        'status': status,
    }
    
    return jsonify(response), statusCode

@app.route('/api/coordinates', methods=['GET'])
def api_coordinates():
    results = []
    status = 'Success'
    statusCode = 200

    if 'lat' in request.args and 'lng' in request.args:
        latitude = request.args.get('lat')
        longitude = request.args.get('lng')
        
        location = latitude + ',' + longitude

        payload = {
            'location': location,
            'rankby': 'distance'
        }

        if 'type' in request.args:
            payload['type'] = request.args.get('type')

        listPlaces = requests.get(searchURL, params=payload)

        for place in listPlaces.json()['results']:
            results.append(place['place_id'])

        app.logger.info("Received coordinates request for %s,%s and returned %s results with status %s (%s)", latitude, longitude, len(results), statusCode, status)
    else:
        status = 'Invalid request'
        statusCode = 400

        app.logger.info("Received invalid coordinates request and returned %s results with status %s (%s)", len(results), statusCode, status)

    response = {
        'results': results,
        'status': status
    }

    return jsonify(response), statusCode

app.run()

