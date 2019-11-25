FROM ruby:2.6.3
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs && npm install yarn -g

RUN mkdir /myapp
WORKDIR /myapp
ADD . /myapp

ENV BUNDLER_VERSION 2.0.1
RUN gem install bundler -v 2.0.1
RUN bundle install
RUN yarn install

# CMD bundle exec rails s -p 5050 -b "0.0.0.0"
