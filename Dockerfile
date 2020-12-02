FROM ruby:2.7.2

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-key update \
  && apt-get update -qq \
  && apt-get install -y --no-install-recommends build-essential libpq-dev nodejs yarn less \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

WORKDIR /app

COPY Gemfile* ./
