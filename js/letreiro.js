/*
var msg = 'LARA SOFIA';
var msgSplit = msg.split('');
var msgFinal = "";
var count = 0;
var limite = msgSplit.length;

setInterval(() => {
    if (count < limite) {
        msgFinal += msgSplit[count];
        console.log(msgFinal);
        document.querySelector('#letreiro').innerHTML = msgFinal;
        count++;
    }
}, 150)
*/

let msgs = [
    'Saulo Costa',
    'Geise Costa',
    'Lara Sofia'
]

var count1 = 0;
let limite = msgs.length;

msgs.forEach(msg => {
    if (count1 < limite) {
        console.log(msg)
        count1++
    }
});

/* msgs.forEach(msg => {
    let msgSplit = msg.split('');
    let msgFinal = "";
    let count = 0;
    let limite = msgSplit.length;
    console.log(msgSplit)

    setInterval(() => {
        if (count < limite) {
            msgFinal += msgSplit[count];
            showMsg(msgFinal);
            console.log(msgFinal);
            count++;
        }
    }, 300)
}); */

function showMsg(msgFinal) {
    document.querySelector('#letreiro').innerHTML = msgFinal;
}