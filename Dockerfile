FROM ruby:2.6.3

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs ntp && npm install yarn -g
RUN gem install bundler -v 2.0.2

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json yarn.lock ./
RUN yarn install --check-files

COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v 2.0.2
RUN bundle install
VOLUME /user/local/bundle

ADD . /myapp

