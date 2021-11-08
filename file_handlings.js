var fs=require("fs");

//reading a file

fs.readFile('palindrome.js',"utf8",function(err,data){
    console.log("reading a file",data);

})

//appending a content in a file
fs.appendFile("palindrome.js","iam append function",(err)=>{
    if(err) console.log("err",err);
    console.log("successfully completed");

})

// writing a content in a file

fs.writeFile("test.txt","dddddddddddddddddddddddddddd",function(err){
    if(err) console.log("err",err);
    console.log("test.txt");
})

