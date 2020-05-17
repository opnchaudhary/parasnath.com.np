
Install maven
> yaourt -S maven

Create a maven project for web as follows:
```bash
mvn archetype:generate -DgroupId=com.tvstartup -DartifactId=thumbnailer -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false
```
To run test
> mvn test

To build the war file
> mvn package
