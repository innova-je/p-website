# Project Commands

### Docker cleanup

`docker system prune -a; docker volume prune`

This command will remove all unused images, containers, volumes, and networks.

`docker ps -aq | foreach { docker rm -f $_ }`

This command forcefully removes all running and stopped containers.

### Running Locally

1. `npm install`

This command will install all the dependencies of the project.

1. `npm start`

This command will run the project locally.

### Deploying to Google Cloud

1. `docker build -t p-website .`

This command will build a Docker image with the tag `website-website` based on the Dockerfile present in the current directory.

1. `docker tag p-website gcr.io/p-website/p-website:vXXX.YYY`

This command will tag the Docker image with the tag `vXXX.YYY`.

1. `docker push gcr.io/p-website/p-website:vXXX.YYY`

This command will push the Docker image with the tag `vXXX.YYY` to the Google Container Registry.