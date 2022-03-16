const express = require("express");
// console.log(express);

const app = express();
// console.log(app);

//REST API's => Representational State Transfer

/**
 * get=>getting somedata from the server
 * post =>add some data to server 
 * put/patch =>Update some data to server
 * delete =>remove some data from server 
 */

app.get("",function (req,res){
    // console.log("Hello users");

    res.send("Hello users Respond here for the new info")
})


app.get("/books",function (req,res){
    // console.log("Hello users");

    res.send(
        {
          author: "Chinua Achebe",
          country: "Nigeria",
          imageLink: "images/things-fall-apart.jpg",
          language: "English",
          link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          pages: 209,
          title: "Things Fall Apart",
          year: 1958
        },
        {
          author: "Hans Christian Andersen",
          country: "Denmark",
          imageLink: "images/fairy-tales.jpg",
          language: "Danish",
          link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
          pages: 784,
          title: "Fairy tales",
          year: 1836
        },
        {
          author: "Dante Alighieri",
          country: "Italy",
          imageLink: "images/the-divine-comedy.jpg",
          language: "Italian",
          link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
          pages: 928,
          title: "The Divine Comedy",
          year: 1315
        },
        {
          author: "Unknown",
          country: "Sumer and Akkadian Empire",
          imageLink: "images/the-epic-of-gilgamesh.jpg",
          language: "Akkadian",
          link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
          pages: 160,
          title: "The Epic Of Gilgamesh",
          year: -1700
        },
        {
          author: "Unknown",
          country: "Achaemenid Empire",
          imageLink: "images/the-book-of-job.jpg",
          language: "Hebrew",
          link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
          pages: 176,
          title: "The Book Of Job",
          year: -600
        })
    
});


app.listen(5000,()=>{
    console.log("listening on Port 5000");
})