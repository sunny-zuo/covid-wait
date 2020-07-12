#!/usr/bin/python

import os

from dotenv import load_dotenv
load_dotenv()

import flask
from flask import request, jsonify
app = flask.Flask(__name__)
app.config['DEBUG'] = True

import flask_cors
from flask_cors import CORS
CORS(app)

import requests

from requests_futures.sessions import FuturesSession

import populartimes

apiKey = os.getenv("APIKEY")

geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + apiKey
searchURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + apiKey
photoURL = "https://maps.googleapis.com/maps/api/place/photo?key=" + apiKey

def geocoding(address):
    payload = {
        'address': address
    }

    geocoded = requests.get(geocodeURL, params=payload)

    geocodedLocation = geocoded.json()['results'][0]['geometry']['location']

    latitude = geocodedLocation['lat']
    longitude = geocodedLocation['lng']

    return str(latitude) + ',' + str(longitude)

def listNearby(location, request):
    payload = {
        'location': location,
        'rankby': 'distance'
    }

    if 'type' in request.args:
        payload['keyword'] = request.args.get('type')

    listPlaces = requests.get(searchURL, params=payload).json()

    session = FuturesSession(max_workers=20)
    futureImages = []

    for place in listPlaces['results']:
        if 'photos' in place:
            reference = place['photos'][0]['photo_reference']
            imagesPayload = {
                'photoreference': reference,
                'maxheight': 128
            }

            futureImages.append(session.get(photoURL, params=imagesPayload))

    for place in listPlaces['results']:
        if 'photos' in place:
            place['image'] = futureImages[0].result().url
            futureImages.pop(0)

    return listPlaces['results']

@app.route('/', methods=['GET'])
def home():
    return "Hello, world!"

@app.route('/api/address', methods=['GET'])
def api_address():
    results = []
    status = 'Success'
    statusCode = 200

    if 'address' in request.args:
        address = request.args.get('address')

        location = geocoding(address)

        results = listNearby(location, request)

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

        results = listNearby(location, request)

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

@app.route('/api/popularity', methods=['GET'])
def api_popularity():
    result = None
    status = 'Success'
    statusCode = 200

    if 'place_id' in request.args:
        result = populartimes.get_id(apiKey, request.args.get('place_id'))

        app.logger.info("Received popularity request and returned status %s (%s)", statusCode, status)

    else:
        status = 'Invalid request'
        statusCode = 400

        app.logger.info("Received invalid popularity request and returned status %s (%s)", statusCode, status)

    response = {
        'result': result,
        'status': status
    }

    return jsonify(response), statusCode

app.run()

