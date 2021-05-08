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
        stage('Set env file') {
            steps {
                echo "set environment variable file" 
                dir('./'){
                sh '''
                cp /environment/.env .
                '''
                }
            }

            post {
                success {
                    echo '.env file copy success'
                }
                failure {
                    echo '.env file copy fail'
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
                // TODO: (if, Build and deploy on separate servers) 
                //      push dockerhub
                //      need docker credential and docker hub login
                //      and, docker-compose -f stack.yaml push
                //      (else, Build and deploy on the same server)
                //      deploy
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

        stage('Stack Push') {
            agent any
            
            steps {
                echo 'Stack Push'
                dir('./') {
                    sh '''
                    docker-compose -f stack.yaml push
                    '''
                }
            }
            post {
                failure {
                    error 'push fail...'
                }
                success {
                    echo 'stack push success...'
                }
            }
        }

        stage('Deploy') {
            agent any
            steps {
                echo 'Deploy Backend'
                
                dir('./') {
                    echo '1'

                    // sh '''
                    // docker stack deploy -c stack.yaml pipelinetest
                    // '''

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
            // docker stack deploy -c stack.yaml pipelinetest;  -> stack on
            // docker stack remove pipelinetest;    ->  remove stack

            post {
                success {
                    echo 'deploy success!'
                }
            }
        }

    }
}
