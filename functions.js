function get(http) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        result = xhttp.responseText;
        //createToolbox();
        }
        };
        xhttp.open("GET", http, false);
        xhttp.send();
        return result;
}

function w(text) {
    console.log(text);
}