function getResult() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    n1 = n1.toLowerCase();
    n2 = n2.toLowerCase();

    let alphabet = " abcdefghijklmnopqrstuvwxyz";
    let flames = ["Soulmates", "Friends", "Lovers", "Acquintance", "Married", "Enemies"];

    let result = 0;

    if (n1.trim() == '') {

        alert("Please fill the entries");

    } else if (n1.trim() == '') {

        alert("Please fill the entries");

    }else {

        for (i of n1) {
            result += alphabet.indexOf(i);
        }
    
        for (i of n2) {
            result += alphabet.indexOf(i);
        }

        result %= 6;

    }

    document.getElementById("res").innerHTML = flames[result];
    if (flames[result] === "Soulmates") {
        document.getElementById("resImg").setAttribute("src", "src/Soulmates.png");
    } else if (flames[result] === "Friends") {
        document.getElementById("resImg").setAttribute("src", "src/Friends.png");
    } else if (flames[result] === "Lovers") {
        document.getElementById("resImg").setAttribute("src", "src/Lovers.png");
    } else if (flames[result] === "Acquintance") {
        document.getElementById("resImg").setAttribute("src", "src/Acquintance.png");
    } else if (flames[result] === "Married") {
        document.getElementById("resImg").setAttribute("src", "src/Married.png");
    } else if (flames[result] === "Enemies") {
        document.getElementById("resImg").setAttribute("src", "src/Enemies.png");
    }

}