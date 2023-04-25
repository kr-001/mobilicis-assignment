# mobilicis-assignment

This project resides in Master Branch and have 2 Folders
 1.Backend
 2.my-app{Front-end}

Backend Folder consists of all backend api's , server connection etc;
Inside Backend Folder : 
 1.db folder.
   (i). Inside "db" folder:
     > There are tow files:
       ->config.js 
       ->samples.js
     # config.js file consists script that connects the backend with Monogodb in which sample data resides. 
     # The Sample.json file is used to create a collection in db.
     # sample.js file will connect to db and creates a new Schema with mongoose and whole module will be exported/forwarded for furthur uses.
 
 2. server.js file will be created in backend folder to connect the front-end "my-app" with backend.
    -> npm packages : express, cors and nodemon are installed then.
    -> express :– The web application framework for Node.js that we will use to create the backend application.
    -> cors :-  CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources. We will use this Node.js package to allow cross-origin requests.
    -> nodemon – A utility that will monitor for any changes in your source and automatically restart your server if any changes are detected.{optional but necessary to see errors while development}.
    
    #In package.json : 
    ```
                 "scripts": {
                "start": "node server.js",
                "dev": "nodemon server.js"
       }
    ```
     will be added inorder to start server with the file server.js. (file name can be changed, imp to change in scripts too)
     
     #Server Creation :- 
     const express = require('express');
     const cors = require('cors');
     Code language: JavaScript (javascript)
     Here, require() is a built-in function to include external modules in your Node.js application using which we are importing the express and cors modules.
     
     
     # Creating Express Application:-
     const app = express();
     app.use(cors());
     app.use(express.json());
     Code language: JavaScript (javascript)
     
     The express() function is a top-level function exported by the express module and it can be used to create an Express application.
     We are using cors to allow cross-origin requests. We are using app.use() to add the cors middleware to the Express application.
     To parse the incoming requests with JSON payloads we are using express.json() which is a built-in middleware function in Express.
     
     #Next Step : 
     
     #api for data fetch from mongodb: 
     ```
               app.get("/data", async (req, res) => {
              const objects = await Data.find();
              if(objects.length > 0){
                  res.send(objects);
              }else{
                  res.send([]);
              }
          });
      ```
          
     #Mentioned criteria data fetch in documentation:-
       {see code for reference inside server.js}.
     
     ```
     app.listen(5000);
     ```
     To start the server we will use app.listen() which takes two arguments:
     The port number on which the server will run. In our case, it is 5000.
     A callback function will be called when the server starts which in our case will just log the message that the server is running.
     
 ----------------------------------------------------------------------------------------------------------------------------------------------
 FRONTEND REACT APPLICATION:-
  The react app will be created using "npx create-react-app my-app"
  #The Public folder is available for public uses after the deployment of the project.
  #src folder is for developers and is abstracted after deployment.
  src folder consists all the necessary files for front-end development.
  App.css is stylesheet
  App.js will be the root file for loading all the components or it is just like index.html were intial development is done.
  index.js will be the entry point for frontend application.
  
  Components Folder consists of React Components which will be further loaded in App.js. It is just like diffent pages of a website.
  The intial data from node server which we fetched in backend server.js folder is fetched in Homepage.js folder with following script:
  ```
    const [data , setData] = useState([]);
    const getInfo = async () =>{
             let result = await fetch("http://localhost:5000/data");
             result = await result.json();
             setData(result);
          });
   ```
    Code language: JavaScript (javascript)
    
  Other data according to mentioned queries in fetched in Condition(n).js files , where n = 1,2,3,4,5.
  
  Navbar.js will give an Bootstrap Navbar as a header in the webpage.
  
  
The Front-end sever and the Backend server should have been started manually in order to work the project properly.
  scripts:
  Frontend:{navigate to folder,then run}
   npm start
  Backend:{navigate to folder,then run}
   nodemon
      

    Thank You!!!!!!!
                   
