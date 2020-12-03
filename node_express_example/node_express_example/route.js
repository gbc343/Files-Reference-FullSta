const express = require("express"); 
const router = express.Router(); 

router.param("userId", (req, res, next, id) => { 
    console.log(`This function will be called first ${req.params.userId} `); 
    if(req.params.userId == '100'){
        res.send("100 not allowed")
    }else{ 

    next();
    
    } 
}); 

router.get("/user/:userId", (req, res) => { 
    console.log("Then this function will be called"); 
    res.write(`User ID: ${req.params.userId}`)
    //res.write('User ID: ${req.params.userId}')
    res.end(); 
}); 

// Export router  
module.exports = router; 