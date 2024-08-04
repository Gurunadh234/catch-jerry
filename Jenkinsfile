pipeline {
  agent any
  stages {
    stage("Build"){
        steps {
            sleep 2
            sh "echo Build stage"
            unstable("unstable")
        }
    }
    stage("Test"){
        steps {
            sleep 2
            sh "ech Test stage"
        }
    }
    stage("Deploy"){
        steps {
            sleep 2
            sh "echo Deploy stage"
        }
    }
  }
  post{
    always {
        sh "echo Always block"
    }
    success {
        sh "echo Success block"
    }
    failure {
        sh "echo Failure block"
    }
    changed {
        sh "echo onChange block"
    }
    unstable {
        sh "echo unstable block"
    }
    aborted {
        sh "echo Aborted"
    }
    fixed {
        sh "echo Fixed"
    }
    unsuccessful {
        sh "echo unsuccessful"
    }
    regression {
        sh "echo Regression block"
        sh "echo Build deteriorated to ${currentBuild.currentResult}"
    }
    cleanup {
        sh "echo Cleanup"
    }
  }
}
