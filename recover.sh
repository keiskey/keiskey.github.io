#!/bin/sh

project=${1:?"no project name"}
repository="https://github.com/keiskey/${project}.git"

cd /projects/$project

git init
git remote add origin $repository
git fetch
git checkout master
