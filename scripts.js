var i = 0;
var txt = 'Nathan Chan';
var cps = 'Computer Science Student'
var showed = 0;
var speed = 150;

function wait() {
    setTimeout(() => {
        document.getElementById("introduction").style.backgroundImage = 'linear-gradient(90deg, red, green, blue)';
        document.getElementById("introduction").style.backgroundSize = '50% auto';
    }, "3000")
    setTimeout(greeting, 1500);   

    setTimeout(() => {
        document.getElementById("introduction").style.backgroundImage = 'linear-gradient(90deg, red, blue)';
    }, "4500")

    setTimeout(() => {
        document.getElementById("introduction").style.backgroundSize = '100% auto';
    }, "6500")
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
    
    setTimeout(header, speed);
    }
}

function header() {
    document.getElementById("header").style.opacity = "1";
}