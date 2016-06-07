ssh root@120.55.93.6 'rm -rf ~/50onzu'
ssh root@120.55.93.6 'mkdir 50onzu'
scp -r server.js root@120.55.93.6:~/50onzu
scp -r www root@120.55.93.6:~/50onzu
scp -r package.json root@120.55.93.6:~/50onzu
# 以下经常出问题。先注掉
# ssh root@120.55.93.6 "cd ~/50onzu/;npm install"
# ssh root@120.55.93.6 "pm2 delete 50on"
# ssh root@120.55.93.6 'pm2 start ~/50onzu/server.js --name "50on"'