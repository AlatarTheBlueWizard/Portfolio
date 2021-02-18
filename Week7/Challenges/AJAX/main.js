function loadText() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtShow").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "info.txt", true);
    xhttp.send();
}

// retrieve specific header information of 'info.txt'
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("lMod").innerHTML = this.getResponseHeader("Last-Modified");
        document.getElementById("date").innerHTML = this.getResponseHeader("Date");
        document.getElementById("cLength").innerHTML = this.getResponseHeader("Content-Length");
        document.getElementById("cType").innerHTML = this.getResponseHeader("Content-Type");
    }
};
xhttp.open("GET", "info.txt", true);
xhttp.send();