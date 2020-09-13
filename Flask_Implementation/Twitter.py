#Twitter.py
#Author: Ryan Fabek

#Import statements
from flask import Flask, render_template, url_for, request, jsonify, abort
import json
from random import random
from random import seed


#Global variables

data = ''

#Create instance of flask application
app = Flask(__name__)


tweets = [

{
    'id':1,
    'Author':'Ryan Fabek',
    'Content':'Test'

}


]





print(data)

@app.route('/tweets', methods=['GET', 'POST','PUT', 'PATCH', 'DELETE'])

def tweet():


    if request.method == 'GET':

        return jsonify({'tweets': tweets})


    if request.method == 'PUT':


        return print('test')


    if request.method == 'PATCH':

        return print('test')



    if request.method == 'POST':

        if not request.json:
            abort(400)

        new_tweet = [{
            'id': tweets[-1]['id'] + 1,
            'Author': request.json['Author'],
            'Content': request.json.get('Content','')

        }
        ]

        tweets.append(new_tweet)

        return jsonify({'new_tweet' : new_tweet}), 201



if __name__ == "__main__":

    app.run(debug=True)
