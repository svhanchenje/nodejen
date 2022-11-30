ssh -T -i windows.pem  ec2-user@43.205.239.76 << ENDSSH
cd ~/node-app/
git pull https://github.com/ravindrabagale/node-app.git
ENDSSH
