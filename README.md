# tsdb-intro

## Cloning a Repo
> git clone https://github.com/JacobManuel/tsdb-intro.git 

## Switching Branches 
Most repos will contain two main branches: master and dev. The master branch is the 'release' branch, while the 'dev' branch is a functional version with the latest changes (may be more unstable). 

Switch to the dev branch, to master, and back.
> git checkout dev
> git checkout master 
> git checkout dev

## Creating a Feature Branch 
From the dev branch: 
> git checkout -b TSDB-###
It is important to always branch out from the dev branch; this will keep the latest changes in your feature branch. 

## First Commit
Make changes in README.md (e.g. add your name at the end of the file), then:

1. Add your changes to the git cache
> git add README.md 

2. Create a 'commit' of those changes 
> git commit -m "TSDB-###: Initial commit"

3. Push your new branch and the first commit in that branch to GitHub. 
> git push -u origin TSDB-### 

# Subsequent Commits 
Subsequent commits to that branch are streamlined, since your branch is already pushed to GitHub. 
> git add README.md
> git commit -m "TSDB-###: commit message"
> git push

# Ticket Complete - Pull Request
Once your feature branch is complete, you'll create a 'pull request' to have your code reviewed and merged into the dev branch. Through the GitHub UI https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request. 
