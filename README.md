# Docker and Jenkins Pipeline Test

## Build  
### Jenkins 
- docker run -itd -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -u root jenkins/jenkins:lts       
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
- curl -L "https://github.com/docker/compose/releases/download/1.28.8/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose  
- chmod +x /usr/local/bin/docker-compose
