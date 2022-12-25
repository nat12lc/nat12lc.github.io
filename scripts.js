var i = 0;
var txt = 'Nathan Chan';
var cps = 'Computer Science Student'
var showed = 0;
var speed = 150;

function wait() {
    setTimeout(greeting, 1500);
}

function greeting() {
    if (i < txt.length) {
        document.getElementById("introduction").innerHTML += txt.charAt(i);
        i++;
        setTimeout(greeting, speed);
    }
    setTimeout(student, speed * txt.length + 2000);
}

function student() {
    if (showed == 0) {
        showed = 1;
        document.getElementById("student").innerHTML += cps;
    }
}