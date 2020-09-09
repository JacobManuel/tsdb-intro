# tsdb-intro

## Intro to Git/GitHub
### Cloning a Repo
> git clone https://github.com/JacobManuel/tsdb-intro.git 

### Switching Branches 
Most repos will contain two main branches: master and dev. The master branch is the 'release' branch, while the 'dev' branch is a functional version with the latest changes (may be more unstable). 

Switch to the dev branch, to master, and back.
> git checkout dev

> git checkout master 

> git checkout dev

### Creating a Feature Branch 
From the dev branch: 
> git checkout -b TSDB-###
It is important to always branch out from the dev branch; this will keep the latest changes in your feature branch. 

### First Commit
Make changes in README.md (e.g. add your name at the end of the file), then:

1. Add your changes to the git cache
> git add README.md 

2. Create a 'commit' of those changes 
> git commit -m "TSDB-###: Initial commit"

3. Push your new branch and the first commit in that branch to GitHub. 
> git push -u origin TSDB-### 

### Subsequent Commits 
Subsequent commits to that branch are streamlined, since your branch is already pushed to GitHub. 
> git add README.md

> git commit -m "TSDB-###: commit message"

> git push

### Ticket Complete - Pull Request
Once your feature branch is complete, you'll create a 'pull request' to have your code reviewed and merged into the dev branch. Through the GitHub UI https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request. 

## Conda
Conda provides the capability to create 'environments' for your software packages so that you don't run into dependency conflicts (e.g. for two projects that need different versions of Python, installing both on the machine without using environments can cause problems). 

### Create an Environment
> conda create --name my-env

### Activate an Environment
> conda activate my-env 

### List Environments
> conda env list 

### Deactivate an Environment
> conda deactivate

### Install a Package 
> conda install nodejs

### Exporting and Restoring Environments
https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#sharing-an-environment

## CURL 
cURL is a command line utility for making HTTP requests. 

## Make an API Call
Example GET calls to an HTTP and REST endpoint
> curl https://www.google.com

> curl https://www.metaweather.com/api/location/search/?query=toronto

Notice how the REST endpoint returns JSON rather than HTML. 

Other examples (useful for API testing): 
https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

## Assignment 

Create a Twitter-like API with the following endpoints: 
- GET /tweets (Get all tweets)
- POST /tweets (Add a new tweet, return its unique id)
- GET /tweets/:id 
- PUT /tweets/:id
- PATCH /tweets/:id
- DELETE /tweets/:id

A tweet should be represented by the following JSON: 
```json
{
  "author": "",
  "content": ""
}
```

To persist data, you do not need to create a fully-featured database; a .json file in your local directory should suffice. Do not worry about scalability - you can load the entire .json file and re-write it on each API call, for our purposes. 

You are free to implement the API using the language and framework of your choice - the key takeaway for this assignment is learning about HTTP/REST and their best practices. If you're unfamiliar with server/api frameworks, I'd suggest Python's [Flask](https://flask.palletsprojects.com/en/1.1.x/quickstart/#quickstart)

You can add your source code to the /tsdb-intro repo and create a PR once you're ready for a review! 