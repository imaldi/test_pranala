// on Submit Button
function validateInput() {
    var userInput = document.getElementById("numberInput").value;

    if(isNaN(userInput)){
        alert("Please enter a valid number.");
        return false;
    }
    return true;
}

// listener
const numberInput = document.getElementById("numberInput");
        const validationMessage = document.getElementById("validationMessage");

        numberInput.addEventListener("input", function() {
            const userInput = numberInput.value;

            if(isNaN(userInput)) {
                validationMessage.textContent = 'Please Enter a valid number.';
            } else {
                validationMessage.textContent = '';
            }
        });


async function submitForm(){
    const userInput = document.getElementById('numberInput').value;
    try{
        const response = await fetch('http://localhost:3000/submit-form',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({numberInput: userInput}),
        })
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error('Error Submitting Form',error);
        alert('Error Submitting Form' +error.message);
    }
}

// async function generateSegitiga(){
//     const userInput = document.getElementById('numberInput').value;
//     try{
//         const response = await fetch('http://localhost:3000/submit-form',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({numberInput: userInput}),
//         })
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.error('Error Submitting Form',error);
//         alert('Error Submitting Form' +error.message);
//     }
// }

// async function generateBilanganGanjil(){
//     const userInput = document.getElementById('numberInput').value;
//     try{
//         const response = await fetch('http://localhost:3000/submit-form',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({numberInput: userInput}),
//         })
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.error('Error Submitting Form',error);
//         alert('Error Submitting Form' +error.message);
//     }
// }

// async function generateBilanganPrima(){
//     const userInput = document.getElementById('numberInput').value;
//     try{
//         const response = await fetch('http://localhost:3000/submit-form',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({numberInput: userInput}),
//         })
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.error('Error Submitting Form',error);
//         alert('Error Submitting Form' +error.message);
//     }
// }