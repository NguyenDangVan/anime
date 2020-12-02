#!/bin/sh
rm -f tmp/pids/server.pid
bundle install -j4 --retry 5
yarn install --check-files
bundle exec rails db:create db:migrate
bundle exec rails s -b '0.0.0.0'
