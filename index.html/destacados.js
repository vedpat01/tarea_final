function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    var hours = x.getHours();
    var minutes = x.getMinutes();
    var seconds = x.getSeconds();
    var day = x.getDate();
    var month = x.getMonth() + 1;
    var year = x.getFullYear();
    // Agregamos un 0 delante si los minutos o segundos son menores que 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('ct').innerHTML = hours + ":" + minutes + ":" + seconds + " - " + day + "/" + month + "/" + year;
    display_c();
}

