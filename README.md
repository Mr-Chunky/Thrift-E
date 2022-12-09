# User Interface Overview

## Technologies Used

- React.js as frontend framework
- Bootstrap 5 for styling
- .NET Web API as backend framework
- MySQL database instance to store generated user data

Still a work in progress, but the general premise is there.

## Demonstration Images
### Login Screen
![thrift-e-login](https://github.com/Mr-Chunky/Thrift-E/blob/main/images/Login%20Screen.PNG)
Allows users to authenticate themselves as valid users in the MySQL database by routing through the RESTful .NET Web API endpoint.

----------------

### Account Creation Screen
![thrift-e-create-account](https://github.com/Mr-Chunky/Thrift-E/blob/main/images/Account%20Creation%20Screen.PNG)
Allows users to create a new account with Thrift-E, sending their details to the MySQL database, using a different endpoint.

----------------

### Search Games Screen
![thrift-e-search-screen](https://github.com/Mr-Chunky/Thrift-E/blob/main/images/Search%20Screen.PNG)
Allows users to search for games to display in an area below the bar.  The search runs through a GET endpoint in the backend, where an HttpClient requests information from Steam's publicly accessible store API.  After fetching the information (if it exists), the endpoint returns the results of the HttpClient's request as a formatted JSON object (JObject), and this is processed further in the frontend to display it in the cards below.

----------------

### Search Games Screen With Result
![thrift-e-search-screen](https://github.com/Mr-Chunky/Thrift-E/blob/main/images/Search%20Games%20Screen%20With%20Result.PNG)
This is what is shown to the user after they search.
