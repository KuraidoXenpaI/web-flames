function calcResult() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    n1 = n1.toLowerCase();
    n2 = n2.toLowerCase();

    let alphabet = ' abcdefghijklmnopqrstuvwxyz';
    let flames = ['Soulmates', 'Friends', 'Lovers', 'Acquintance', 'Marriage', 'Enemies'];

    let result = 0;

    if (n1.trim() === '') {
        alert('Please fill the entries!');
    } else if (n2.trim() === '') {
        alert('Please fill the entries!');
    } else {
        for (let x of n1) {
            result += alphabet.indexOf(x);
        }
 
        for (let x of n2) {
            result += alphabet.indexOf(x);
        }

        document.getElementsByTagName('p')[0].innerHTML = flames[result % 6];

    }

    
    

}