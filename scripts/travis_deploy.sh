#!/bin/bash

git init
git config user.name "Travis CI"
git config user.email "erisch@microsoft.com"

echo 'Adding files to local repo '
ls -ltr
git add .
git add --force dist/*
git commit -m "Deploy"

GIT_USERNAME="dokku"
GIT_TARGET_URL="https://${GIT_USERNAME}@${AZURE_WA_GIT_TARGET}:${DOKKU_APPNAME}"

eval "$(ssh-agent -s)"
chmod 600 .travis/dokku_deploy_key
ssh-add .travis/dokku_deploy_key

git remote add $GIT_USERNAME $GIT_TARGET_URL
git push $GIT_USERNAME master

echo 'Deployed!!'
