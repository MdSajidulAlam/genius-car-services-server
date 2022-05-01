/* 
-------------------
* One Time
-------------------
1. Create HeroKu account
2. Verify email
3. install heroku cli
4. heroku login

----------------------
* For each project
1. Heroku create
2. Make sure you : git add, git commit ,git push
3. git push heroku main
4. Go to heroku dashboard > Current Project > Settigns > Reveal Config vars
5. Copy paste config vars from your .env file
6. Make sure you have whitelisted all ip address to acess mongodb

----------------
* Update server with new changes
----------------
1. Make changes
2. Make sure you : git add, git commit ,git push
3. git push heroku main

---------------------------------------------------
* Connect Server with Client and deploy client
---------------------------------------------------
1. replace localhost by heroku link
2. npm run build
3. firebase deploy
*/