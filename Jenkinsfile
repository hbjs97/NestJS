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
        
        stage('Build npm') {
            agent any
            steps {
                echo 'Build Backend'

                dir('./api') {
                    sh '''
                    npm install
                    '''
                }

            }
            post {
                failure {
                    error 'build fail...'
                }
                success {
                    echo 'npm install success'
                }
            }
        }

        stage('Build Docker') {
            agent any
            steps {
                echo 'Build Docker'

                sh '''
                docker-compose up -d --build
                '''
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

        // stage('Deploy') {
        //     agent any
        //     steps {
        //         echo 'Deploy Backend'
                
        //         dir('./') {
        //             sh '''
        //             docker-compose up -d --build
        //             '''
        //         }

        //     }
        //     post {
        //         success {
        //             echo 'deploy success'
        //         }
        //     }
        // }

    }
}
