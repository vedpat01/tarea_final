function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date();
    var day = x.getDate();
    var month = x.getMonth() + 1; 
    var year = x.getFullYear();
    var hours = x.getHours();
    var minutes = x.getMinutes();
    var seconds = x.getSeconds();

   
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var formattedDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('ct').innerHTML = formattedDate;
    
    display_c();
}


// Mostrar el botón al desplazarse hacia abajo
window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top');
    if (window.scrollY > 200) { // Cambia este valor según sea necesario
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

// Desplazarse hacia arriba cuando se hace clic en el botón
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

