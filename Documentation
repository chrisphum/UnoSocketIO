
Setup:

I used Yarn.
The project is in two folders: client and server
CD into each from the terminal and type "yarn install."

When running client and server from the same computer you
will run into lots of "CORS" errors. To solve this, in the
server's root JS file, probably "server.js", you will need
to find this snippit of code:

const io = require("socket.io")(3000, {
    cors: {
        origin: ['http://localhost:8080'],
    }
})

and change the "origin" so that it works for the location 
of your client. Your client MUST be run on a port, and in
my case it is run from port 8080. Port 8080 is default.



Running:

1 - In a  terminal I cd into the server file
2 - type "node server.js" which runs the Node.JS server on port 3000

3  - In a seprate terminal (don't close the first terminal!) cd into the client folder
4 - type " yarn run" which runs snowpack on port 8080
5 -  Open the browser and go to http://localhost:8080

