#!/bin/bash

cd /home/ubuntu/shop.dreamcoder.com.np/angular-deploy/
git pull origin master
sudo rm -rf ../public_html/*
sudo cp -r tagus/* ../public_html
