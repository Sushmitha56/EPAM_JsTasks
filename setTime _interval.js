var interval = setInterval(function(){ 
    console.log('Hello World'); 
  }, 5000);
  setTimeout(function() { 
    clearInterval(interval); 
  }, 60000);