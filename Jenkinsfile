                // echo "1. Current workspace is ${env.WORKSPACE}"
                // echo "2. Current workspace is $WORKSPACE"
pipeline {
    agent any

    stages {
        stage('Prepare') {
            agent any

            steps {
                echo "Clonning Repository" 

                
                git url: 'https://github.com/hbjs97/NestJS.git',
                    branch: 'main',
                    credentialsId: 'github'
            }

            post {
                success {
                    echo 'Repository clone success'
                }

                always {
                    echo 'tried....'
                }

                cleanup {
                    echo 'after all other post condition'
                }
            }
        }
        
        stage('Build Docker') {
            agent any
            steps {
                echo 'Build Docker'

                dir('./') {    
                    sh '''
                    docker-compose -f stack.yaml build
                    '''
                }
                // TODO: push dockerhub
                //      need docker credential and docker hub login
                //      and, docker-compose -f stack.yaml push
            }
            post {
                failure {
                    error 'build fail...'
                }
                success {
                    echo 'stack up success...'
                }
            }
        }

        stage('Deploy') {
            agent any
            steps {
                echo 'Deploy Backend'
                
                dir('./') {
                    sh '''
                    echo 'need docker swarm deploy'
                    '''
                    // docker stop pipelinetest-db-maria || true && docker rm pipelinetest-db-maria || true
                    // docker stop pipelinetest-api || true && docker rm pipelinetest-api || true
                    // docker run -p 13307:3306 -d --name pipelinetest-db-maria hbjs97/pipelinetest-db-maria
                    // docker run -p 4100:4100 -d --name pipelinetest-api hbjs97/pipelinetest-api
                    // fail -> environment uncaught in db-build

                    // docker run -p 4100:4100 -d --name pipelinetest-db-maria hbjs97/pipelinetest-db-maria
                    // success -> BUT!! -> At the same time, need db-maria
                }

            }
            // TODO: pull image from docker-hub and, deploy docker-swarm
            // docker-compose -f stack.yaml pull;
            // docker stack deploy -c stack.yaml pipelinetest;

            post {
                success {
                    echo 'deploy success!'
                }
            }
        }

    }
}
