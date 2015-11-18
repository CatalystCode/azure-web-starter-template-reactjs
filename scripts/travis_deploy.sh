#!/bin/bash

git init

GIT_TARGET_URL="https://${AZURE_WA_USERNAME}:${AZURE_WA_PASSWORD}@${AZURE_WA_GIT_TARGET}"

git remote add azure $GIT_TARGET_URL

echo 'Setting up deployment config'
git config user.name "Travis CI"
git config user.email "erisch@microsoft.com"

echo 'Adding files to local repo '
ls -ltr
git add .
git commit -m "Deploy"

# We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
echo "About to push to ${AZURE_WA_GIT_TARGET}"

git push --force azure master
echo 'Deployed!!'
