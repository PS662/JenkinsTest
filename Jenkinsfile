pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Compiling code and generating artifacts"
                //sh 'npm install'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo "Running unit tests"
                echo "Running integration tests"
                //sh 'npm test'
            }
        }
        stage('Code Analysis') {
            steps {
                echo "Checking code quality"
                //sh 'npm run lint'
            }
        }
        stage('Security Scan') {
            steps {
                echo "Application Security Scan"
                //sh 'npm install -g snyk'
                //sh 'snyk auth <API_KEY>'
                //sh 'snyk test'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging"
                //sh 'gcloud app deploy --version=staging --no-promote'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo "Integration tests on staging"
                //sh 'npm run test:integration'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying to Prod"
                //sh 'gcloud app deploy --version=production --promote'
            }
        }
    }
    post {
        always {
            emailext(
                subject: "Jenkins Job '${env.JOB_NAME}': ${currentBuild.currentResult}",
                body: "See the attached log for details",
                attachLog: true,
                to: 'singh.prateek662@gmail.com'
            )
        }
    }
}