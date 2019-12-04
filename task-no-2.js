function randomNum(user) {
    var a = Math.round(Math.random() * 10);
    var user = prompt("Enter A Number");

    for (let i = 0; i <= 3; i++) {
        if (a == user) {
            console.log('Successful');
        } else if (a <= user) {
            console.log('Less Than');
        } else if (a >= user) {
            console.log('Greater Than');
        } else {
            console.log('Not a number');
        }
    }
}


randomNum();