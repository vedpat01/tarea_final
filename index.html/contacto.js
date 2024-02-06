function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
}
 
function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
}
function correo() {
    alert("Correo enviado.")
}

function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
}

function correo() {
    alert("Correo enviado.");
}
function display_ct() {
    var x = new Date();
    var day = x.getDate();
    var month = x.getMonth() + 1;
    var year = x.getFullYear();
    var dateString = day + "/" + month + "/" + year;
    document.getElementById('ct').innerHTML = dateString;
    setTimeout(display_ct, 1000);
}
