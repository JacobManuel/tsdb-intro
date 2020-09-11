#Twitter.py
#Author: Ryan Fabek

#Import statements
from flask import Flask, render_template, url_for, request, jsonify
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

@app.route('/tweets', methods=['GET', 'POST'])

def tweet():


    if request.method == "GET":

        return jsonify({'tweets': tweets})

    else:
        #Test user input

        Author = input("Input your name: ")
        Content = input("Tweet:")
        new_id = randint(1,10);
        new_tweet = [

        {
            'id':new_id,
            'Author':Author,
            'Content':Content

        }

        ]

        tweets.update(new_tweet)






if __name__ == "__main__":

    app.run(debug=True)
