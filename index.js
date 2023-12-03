

/* 
View / Template engine : Use same template for creating dynamic pages - EJS(Dynamic pages)
Request Parameter : variables inside route (Dynamic routes)
*/

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine' , 'ejs')



const variable = [
    { 
    username : 'ram',
    firstName : 'Ram', 
    lastName : 'kumar', 
    avatar : 'https://reqres.in/img/faces/7-image.jpg' , 
    email : 'ramkumar@gmail.com',
    isPremium : true,
    hobbies : ['I' , 'J' , ' K' ]
},
{   username : 'lakshman',
    firstName : 'Lakshman', 
    lastName : 'Singh' , 
    avatar : 'https://reqres.in/img/faces/8-image.jpg', 
    email : 'lakshmansingh@gmail.com',
    isPremium : false,
    hobbies : ['I' , 'J' , ' K' ]
}

]

app.get('/', (req,res) => {
    res.json({message : 'All ok works good!'})
});

app.get('/:username', (req,res) => {
    console.log(req.params)
    res.send('hi')
});


app.get('/ram', (req,res) => {
    let ramDetails = { 
        firstName : 'Ram', 
        lastName : 'kumar', 
        avatar : 'https://reqres.in/img/faces/7-image.jpg' , 
        email : 'ramkumar@gmail.com',
        isPremium : true,
        hobbies : ['I' , 'J' , ' K' ]
    }
    res.render('user', ramDetails)
});


app.get('/lakshman', (req,res) => {
    let lakshmanDetails = { 
        firstName : 'Lakshman', 
        lastName : 'Singh' , 
        avatar : 'https://reqres.in/img/faces/8-image.jpg', 
        email : 'lakshmansingh@gmail.com',
        isPremium : false,
        hobbies : ['I' , 'J' , ' K' ]
    }
    res.render('user', lakshmanDetails )
});

// app.get('/user', (req,res) => {
//     res.render('user')
// });

app.listen(4000,() =>{
    console.log("the port 4000 is running succesfully") 
});