var button = document.getElementById("bttn");
var message = document.getElementById("message");
button.onclick = function(){
    window.alert("Alert Message");   
    message.innerHTML = "new Message appear";
    
}
