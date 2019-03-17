function clock() {
    const fullDate = new Date();
    var ore = fullDate.getHours({timezone: 'Italy/Rome'}) + ' :';
    var min = fullDate.getMinutes({timezone: 'Italy/Rome'}) + ' :';
    var sec = fullDate.getSeconds({timezone: 'Italy/Rome'});

    if (ore < 10) {
        ore = '0' + ore; 
    }

    if (min < 10 ) {
        ore = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;       
    }

    document.getElementById('ore').innerHTML = ore; //le ore verranno messe nel documento html
    document.getElementById('minuti').innerHTML = min;
    document.getElementById('secondi').innerHTML = sec;

}

setInterval(clock, 100)