#!/bin/bash

git init

git config user.name "Travis CI"
git config user.email "erisch@microsoft.com"

git add .
git commit -m "Deploy"

# We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${AZURE_WA_USERNAME}:${AZURE_WA_PASSWORD}@${AZURE_WA_GIT_TARGET}" master:master > /dev/null 2>&1
