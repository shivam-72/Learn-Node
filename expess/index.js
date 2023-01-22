const express = require('express');
const app = express();
const path = require('path');
// app.get('', (req, res) => {
//     res.send("this is home page");
// })
// app.get('/about', (req, res) => {
//     res.send("this is page")
// });
// app.listen(4000);
const publicpath = path.join(__dirname, 'public');
//console.log(publicpath);
//here we have to write the extension for sending file
//app.use(express.static(publicpath));
//here we dont have to write extension like.html and it enhances security
app.get('', (_, res) => {
    res.sendFile(`${publicpath}/index.html`);
})
app.get('/about', (_, res) => {
    res.sendFile(`${publicpath}/about.html`);
})
//thhis is used for invalid page if user type invalid page
app.get('*', (_, res) => {
    res.sendFile(`${publicpath}/nopage.html`);
})
app.listen(5000);