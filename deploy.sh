#!/bin/bash

cp .env.example .env
cp package*.json ./
npm install
npm rebuild node-sass

#FOR PRODUCTION/STAGING
npm run build
npm run start

#FOR DEVELOPMENT
#npm run dev
