@ECHO OFF
ECHO GET all tweets
curl localhost:5000/tweets

ECHO POST a tweet
curl -X POST -H "Content-Type: application/json" -d "{\"Author\": \"Posted\", \"Content\": \"Tweet\"}" localhost:5000/tweets

ECHO PUT replace a tweet
curl -X POST -H "Content-Type: application/json" -d "{\"Author\": \"Replaced\", \"Content\": \"Tweet\"}" localhost:5000/tweets/1

ECHO PATCH a tweet
curl -X PATCH -H "Content-Type: application/json" -d "{\"Author\": \"Bread\"}" localhost:5000/tweets/1

ECHO GET the second tweet
curl -X GET localhost:5000/tweets/2

ECHO DELETE a tweet
curl -X DELETE localhost:5000/tweets/2

ECHO GET all tweets
curl localhost:5000/tweets
