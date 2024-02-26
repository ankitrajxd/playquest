pipeline {
    agent any
    stages {

        stage("Initializing Pipeline...") {
            steps {
                script {

                    //just a dummy stage to simulate initialization of repository....
                    "echo initializing....."
                }
            }
        }

        
        stage("Building image...") {
            steps {
                script {

                    // build the image
                    // tag the image same as repository name
                    // login to docker registry with credentials // need plugin for that
                    // push the image to dockerhub
                    "docker build -t playquest:1.0 ."   // the image tag should be changed dynamically (maybe using env variables) and not hardcoded into the jenkinsfile
                }
            }
        }
        stage("Deploying Image...") {
            steps {
                script {
                    // stop the existing running container (to free the port)
                    // pull the docker image from private repository using the credentials
                    // run the docker image on a unique port//
                    //Tip:  we can further streamline the deployment process by creating a docker compose file. using that we can prevent unique port issue every time our new container is deployed.
                    "docker run -p 4040:80 ......."
                }
            }
        }
    }   
}