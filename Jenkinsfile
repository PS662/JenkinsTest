pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Compiling code and generating artifacts"
                echo "sh 'npm install'"
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo "Running unit tests"
                echo "Running integration tests"
                echo "sh 'npm test'"
            }
        }
        stage('Code Analysis') {
            steps {
                echo "Checking code quality"
                echo "sh 'npm run lint'"
            }
        }
        stage('Security Scan') {
            steps {
                echo "Application Security Scan"
                echo "sh 'npm audit'"
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging"
                echo "sh 'gcloud app deploy --version=staging --no-promote'"
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo "Integration tests on staging"
                echo "sh 'npm run test:integration'"
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying to Prod"
                echo "sh 'gcloud app deploy --version=production --promote'"
            }
        }
    }
    post {
        always {
            emailext(
                subject: "Jenkins Job '${env.JOB_NAME}': ${currentBuild.currentResult}",
                body: "See the attached log for details",
                attachLog: true,
                to: 'singh.prateek662@gmail.com, singhprate@deakin.edu.au'
            )
        }
    }
}