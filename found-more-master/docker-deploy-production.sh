
#!/bin/sh

if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]
then

  if [ "$TRAVIS_TAG" ]
  then

    JQ="jq --raw-output --exit-status"

    configure_aws_cli() {
        aws --version
        aws configure set default.region eu-west-1
        aws configure set default.output json
        echo "AWS Configured!"
    }

    update_service() {
      aws ecs update-service --cluster $cluster --service $service --force-new-deployment
    }

    deploy_cluster() {
      cluster="found-more-production"

      service="found-more-client-production-service"
      update_service

      service="found-more-server-production-service"
      update_service
    }

    configure_aws_cli
    deploy_cluster

  fi

fi