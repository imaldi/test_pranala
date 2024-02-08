const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/submit-form', (req,res) => {
    const userInput = req.body.numberInput;
    if(isNaN(userInput)) {
        return res.status(400).json({error: 'Please enter a valid number'});
    }

    res.json({message: 'Form submitted successfully'});
});


app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});