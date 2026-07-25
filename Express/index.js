const express = require('express')  //express pakeage require k liya 
 const app = express();
//  console.dir(app); //app --> give all the method or code of the express

let port = 8080;  // port help to connect with the browser

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
    }); // app.listen help to create a web server for incomming api

// app.use((req, res)=>{ // app.use help to send requist and take respond on the server side
//     // console.log(req); // req give many mathod and properties and also we use all the properties in next
//      console.log("Massage recived");
//     //  res.send("This is the basic response"); nowmal massage respond 

//     //  res.send({      --> this for the object show on the browser
//     //     name : "apple",
//     //     color: "red",
//     //  });
//      let Fruits = "<h1>Fruits</h1? <ul><li> mango</li> <li>Apple</li></ul>"; //this res.send is show the html elements 
//     res.send(Fruits); // This res accept all the route like localhost:8080, localhost:8080/friuts  both give same result 
//     }) 


//-------------------------------------------------------Routing-----------------------------------------------------
app.get("/",(req, res)=>{   //app.get help to make the multiple path (url) in the website below the app.get help to make 4 web path
    res.send("helo, im root");
});

// app.get("/search",(req, res)=>{ // inh chaaroo ke alawaa koi or path set krengay vo error dega
//     res.send("This is  for the searching ");
// });

// app.get("/help",(req, res)=>{
//     res.send("This is the root path ofc the wesite for the help");
// });

// app.get("/querry",(req, res)=>{ // '*' this not works 
//    res.send("This is the root path of the wesite for the querry");
// });

// app.use((req, res) => {
//   res.status(404).send('Page not found');
// });
app.get("/:username/:id", (req, res)=>{    // --> /: ke bad koi sa variable de skta hai 
    // console.log(req.params);    // --> req.param ye batata hai ki request ke sath kon konsa parameter hai
    let { username, id} = req.params;
    let str=`<h1>Welcome to the my page dear ${username}!</h1>`; 
    res.send(str) // url mai koi sa bhi username de or id bhi ye param input lelega
})     

app.get("/search",(req, res)=>{  //http://localhost:8080/search?q=apple  -->  ?q="req.send" 
    // console.log(req.query);
    let {q} = req.query;
    // res.send(`search result qury: ${q}`)
    if(!q){
        res.send("query does not exit")
    }
     res.send(`<h1>search result qury: ${q}</h1>`)
})