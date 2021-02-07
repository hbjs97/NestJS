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
        
        stage('Build') {
            agent any
            steps {
                echo 'Build Backend'

                sh '''
                docker-compose build
                '''
            }
            post {
                failure {
                    error 'build fail...'
                }
            }
        }

        stage('Deploy') {
            agent any
            steps {
                echo 'Deploy Backend'
                
                dir('./') {
                    sh '''
                    docker-compose up -d
                    '''
                }

            }
            post {
                success {
                    echo 'deploy success'
                }
            }
        }

    }
}
