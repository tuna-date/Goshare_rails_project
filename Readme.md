<h1 align="center">GoShare👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

![](/image/logo.png)

## Description

## RUN APP
**Prepare**</br>
_1. Yarn install_ </br>
```
cd backend && yarn
cd frontend && yarn
```
_2. Set up facebook app for development </br>
(only neccessary when use login with facebook feature)_ </br>
Go to https://developers.facebook.com/, login with facebook account</br>
Select **GoShare** application, and get APP_ID, APP_SECRETE from Setting -> Basic infomation, then paste them on _backend/config/initializers/omniauth.rb_ </br>
**Up**

```sh
docker-compose up -d
```

**Down**

```sh
docker-compose down
```

### For rails

Export localhost:5050

### For Reactjs

Just code and ctrl+S . Frontend expost localhost:3000
