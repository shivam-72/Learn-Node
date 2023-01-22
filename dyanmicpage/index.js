const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/profile', (_, res) => {
    const user = {
        name: 'shivam',
        email: 'shivam@123',
        city: 'gaya',
        skills: ['js', 'c++', 'java']
    }
    res.render('profile', { user });
});
app.get('/login', (_, res) => {
    res.render('login');
})
app.listen(5000);