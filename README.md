# Goshare (GoutShare)
_enjoy your life, share your experiences and make your friends gout_

## 1. Build your images and start the containers
```
$ docker-compose up --build
```
## 2. Create databases for test and develop enviroments
```
$ docker-compose run web-app rake db:create
$ docker-compose run web-app rake db:migrate
```
## 3. Up the app
Go to localhost:5050 