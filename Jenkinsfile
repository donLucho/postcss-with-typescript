pipeline {
  
  agent {
    docker {
      image 'node:14-alpine'
      args '-p 3000:3000'
    }
  }

  // environment {
  //   CI = 'true'
  // }

  stages {

    stage('Build') {
      steps {
        // sh 'npm install'
        sh 'yarn'
      }
    }

    // stage('Test') {
    //   steps {
    //     sh './jenkins/scripts/test.sh'
    //   }
    // }

    // stage('Deliver') {
    //   steps {
    //     sh './jenkins/scripts/deliver.sh'
    //     input message: 'Are you finished using the website? (Click "Proceed")'
    //     sh './jenkins/scripts/kill.sh'
    //   }
    // }

  }

}