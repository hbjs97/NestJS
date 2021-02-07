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
                    docker stop hbjs97/pipelinetest || true && docker rm hbjs97/pipelinetest || true
                    docker run -p 4100:4100 -p 13307:3306 -d --name hbjs97/pipelinetest hbjs97/pipelinetest
                    '''
                }

            }
            post {
                success {
                    echo 'deploy success!'
                }
            }
        }

    }
}
