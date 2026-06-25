#!/bin/bash

cd /home/ec2-user/Capstone-project-11

npm install

pm2 restart capstone-proj-11 || pm2 start app.js --name capstone-proj-11