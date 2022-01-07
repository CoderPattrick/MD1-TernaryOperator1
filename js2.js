let message;
login = prompt("who tf?")

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

// switch (login){
//     case "Employee":
//         message = 'Hello';
//         break;
//     case "Director":
//         message = 'Greetings';
//         break;
//     case "":
//         message = 'No Login';
//         break;
//     default:
//         message = '';
//         break;
// }
let message = (login == 'Employee') ?
    'Hello' : (login == 'Director') ?
        'Greetings' : (login == '') ?
            'No login' : '';
alert(message);