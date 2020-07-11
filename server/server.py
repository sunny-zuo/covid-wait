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

@app.route('/api/places', method=['GET'])
def places():
    res = []
    return jsonify(res)

app.run()

