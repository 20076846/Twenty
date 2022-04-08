function run() {
    document.getElementById("paragraph").innerHTML = "Hello World";
    document.getElementById("paragraph").style.backgroundColor = "blue";
    document.getElementById("paragraph").style.color = "#000000";
    document.getElementById("paragraph").style.padding = "20px";
    document.getElementById("paragraph").style.textAlign = "center";
    randomNum();
    usernumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "blue";
    x.style.color = "#000000";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran
}

function usernumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.innerHTML = "Hello World";
    y.style.backgroundColor = "blue";
    y.style.color = "#000000";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user
}

function compareNumbers() {
    let a = usernumber();
    let b = randomNum();

    if (a != b) {
        document.getElementById("compare").innerHTML = "Numbers are not the same. The AI got " + b + " and you got " + a + ".";
    } else if (a == b)
    document.getElementById("compare").innerHTML = "Numbers are the same. The AI got " + b + " and you got " + a + ". Nice job!";
}