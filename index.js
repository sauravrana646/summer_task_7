function sidebar_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main").style.marginRight = "25%";
    document.getElementById("mySidebar").style.width = "25%";
}
  
function sidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
}

var btn = document.getElementById("submit-btn")

btn.onclick = function() {
    sidebar_open()
    var xhr = new XMLHttpRequest()
    console.log("hello")
    xhr.open('GET', 'http://192.168.43.209/cgi-bin/script.py?cmd=' + document.getElementById('input_cmd').value , "true");
    xhr.send()
    xhr.onload = function() {
            document.getElementById('myOut').innerHTML = xhr.responseText;
        }
    console.log("bye")
}
