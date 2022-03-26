
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const joinButton = document.getElementById("joinButton")
const waitingDiv = document.getElementById("waiting")
const playingDiv = document.getElementById("playing")



joinButton.addEventListener("click", e => {


    if (waitingDiv.style.display === "none") {
        waitingDiv.style.display = "block";

        
      } else {
        waitingDiv.style.display = "none";
        playingDiv.style.display = "block" 


        // Change room
        socket.emit("clickedJoin", "")

        
      }
});


socket.on('count', count => {

    joinButton.value = "There are " + count + " people in the ready playing lobby. CLICK TO SIGNAL READY"
    playingDiv.innerHTML = "youre READY along with " + (count-1) + " other people"


});

