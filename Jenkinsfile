pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        bat 'npx playwright test --reporter=html'
      }
    }
  }

  post {
    always {
      publishHTML([
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Test Report 📊',
        keepAll: true,
        alwaysLinkToLastBuild: true,
        allowMissing: false
      ])
    }
    failure {
      echo '❌ Playwright test failed! Check the report for details.'
    }
  }
}