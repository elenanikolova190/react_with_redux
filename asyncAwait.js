const greetings = async () => {
    return 'Hey'
}

const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if(message === 'Whatsup?') {
            //     return reject("something went wrong");
            // }
            return resolve(message);
        }, 3000);
    });
}

// // promise
// displayMessage("Hello").then(result => {
//     console.log('result', result);
//     displayMessage("There?").then(result => {
//         console.log('result', result);
//         displayMessage("Whatsup?").then(result => {
//             console.log('result', result);
//         }).catch(error => {
//             console.log('Error', error);
//         });
//     }).catch(error => {
//         console.log('Error', error);
//     });
// }).catch(error => {
//     console.log('Error', error);
// });


const myFunc = async () => {
    try {
        let result = '';
        result = await displayMessage('Hello');
        console.log(result);
        result = await displayMessage('There?');
        console.log(result);
        result = await displayMessage('Whatsup?');
        console.log(result);
        result = await greetings();
        console.log(result);
    } catch (error){
        console.log('Error', error);
    }
}

myFunc();