# Docker and Jenkins Pipeline Test

## Build

### Jenkins

#### github <-> jenkins webhook

#### Docker in Docker

- api_server
- db_server

### Test

#### api(using jest) <-> db-maria

- 1. run each containter
  - container connection on external network
- 2. docker-compose

### Deploy

- Docker-swarm

### Docker install in jenkins container.

#### script install and execute.

- curl -fsSL https://get.docker.com -o get-docker.sh
- sh get-docker.sh

### Docker-compose install in jenkins container.

- curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
- chmod +x /usr/local/bin/docker-compose
