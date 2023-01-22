//asynchronous programming language tasks done in concuurent way they
//dont wait for one function to end.
//node is asynchrounus,javascipt &&php is synchronous

//handle disadvantages of asynchronous language
let a = 20;
let b = 0;
let waitdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30); 
    },2000)
})
waitdata.then((data) => { 
    b = data;
    console.log(a + b);
})
