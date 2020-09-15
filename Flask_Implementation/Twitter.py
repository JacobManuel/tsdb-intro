#Twitter.py
#Author: Ryan Fabek

#Import statements
from flask import Flask, render_template, url_for, request, jsonify, abort
import json
from random import random
from random import seed


#Create instance of flask application
app = Flask(__name__)


tweets = [

{
    'id': 1,
    'Author':'Ryan Fabek',
    'Content':'Test'

}


]




#App route for retriving all tweets and posting new tweet
@app.route('/tweets', methods=['GET', 'POST'])

def get_tweet():

    #Retrieves all tweets
    if request.method == 'GET':

        return jsonify({'tweets': tweets})

        #Returns tweets in json format
        #return jsonify({'tweets': tweets})

    #Creates a new tweet and adds to json
    if request.method == 'POST':

        if not request.json:
            abort(400)

        new_tweet = {
            'id': tweets[-1]['id'] + 1,
            'Author': request.json['Author'],
            'Content': request.json.get('Content','')

        }


        tweets.append(new_tweet)

        return jsonify({'new_tweet' : new_tweet}), 201


#App route for editing existing tweets, retriving existing tweet and deleting tweet
@app.route('/tweets/<int:tweet_id>', methods=['PUT', 'GET', 'DELETE', 'PATCH'])

def get_tweet_2(tweet_id):


    if request.method == 'PUT':

        tweet = [tweet for tweet in tweets if tweet['id'] == tweet_id]

        if len(tweet) == 0:
            abort(404)
        if not request.json:
            abort(400)

        tweet[0]['Author'] = request.json.get('Author')
        tweet[0]['Content'] = request.json.get('Content')
        return jsonify({'tweets':tweets})


    if request.method == 'GET':

        tweet = [tweet for tweet in tweets if tweet['id'] == tweet_id]

        if len(tweet) == 0:
            abort(404)

        return jsonify({'tweet': tweet[0]})




    if request.method == 'DELETE':

        tweet = [tweet for tweet in tweets if tweet['id'] == tweet_id]

        if len(tweet) == 0:
            abort(404)

        tweets.remove(tweet[0])
        return jsonify({'tweets': tweets})

    if request.method == 'PATCH':

        tweet = [tweet for tweet in tweets if tweet['id'] == tweet_id]

        if len(tweet) == 0:
            abort(404)

        tweet[0]['Author'] = request.json.get('Author', tweet[0]['Author'])
        tweet[0]['Content'] = request.json.get('Content', tweet[0]['Content'])
        return jsonify({'tweets':tweets})




if __name__ == "__main__":

    app.run(debug=True)
