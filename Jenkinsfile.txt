pipeline {
  agent any

  stages {
  stage('Checkout') {
      steps {
        git 'https://github.com/nirnel/Playwright_9Jan2026.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test --reporter=html'
      }
    }
  }

  post {
    always {
      publishHTML([
        reportDir: 'playwright-report',        // folder where Playwright generates HTML report
        reportFiles: 'index.html',             // entry file of the report
        reportName: 'Playwright Test Report 📊', // name shown in Jenkins UI
        keepAll: true,                         // keep reports for all builds
        alwaysLinkToLastBuild: true,           // quick access to latest report
        allowMissing: false                    // fail if report is missing
      ])
    }
    failure {
      echo '❌ Playwright test failed! Check the report for details.'
    }
  }
}          