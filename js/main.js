$(document).ready(function() {
    $('#settings').click(function()
    {
      $('.modal').addClass('modal-is-active');
    });
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i < 10) 
    {
        i = "0" + i // add zero in front of numbers < 10
    };  
    return i;
}

function start() {
    startTime();
    load();
}

function save() {
    var txtValue = document.getElementById('textfield').value;
    localStorage.setItem('key', txtValue);
}

function load() {
    var storedValue = localStorage.getItem('key');
    if (storedValue) {
        document.getElementById('textfield').value = storedValue;
    }
}

