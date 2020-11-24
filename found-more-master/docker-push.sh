#!/bin/sh

if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]
then

  if [[ "$TRAVIS_BRANCH" == "master" ]]; then
    export DOCKER_ENV=stage
    export TAG=staging
    export SERVERURL=/graphql
    export SERVERWEBSOCKET=wss://foundmore.strangelove.digital/graphql
  elif [[ "$TRAVIS_TAG" ]]; then
    export DOCKER_ENV=prod
    export TAG=production
    export SERVERURL=/graphql
    export SERVERWEBSOCKET=wss://youfoundmore.com/graphql
  fi

  if [ "$TRAVIS_BRANCH" == "master" ] || \
     [ "$TRAVIS_TAG" ]
  then
    curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
    unzip awscli-bundle.zip
    ./awscli-bundle/install -b ~/bin/aws
    export PATH=~/bin:$PATH
    # add AWS_ACCOUNT_ID, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY env vars
    eval $(aws ecr get-login --region eu-west-1 --no-include-email)
   
    export REPO=$AWS_ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com
  fi

  if [ "$TRAVIS_BRANCH" == "master" ] || \
      [ "$TRAVIS_TAG" ]
  then
    # server
    docker build $SERVER_REPO -t $SERVER:$COMMIT -f Dockerfile-$DOCKER_ENV 
    docker tag $SERVER:$COMMIT $REPO/$SERVER:$TAG
    docker push $REPO/$SERVER:$TAG
    # client
    docker build $CLIENT_REPO -t $CLIENT:$COMMIT -f Dockerfile-$DOCKER_ENV --build-arg PRISMA_API_GATEWAY_URL=$SERVERURL --build-arg WEBSOCKET_ENDPOINT=$SERVERWEBSOCKET --build-arg NODE_ENV=production
    docker tag $CLIENT:$COMMIT $REPO/$CLIENT:$TAG
    docker push $REPO/$CLIENT:$TAG
  fi
fi