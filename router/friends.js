const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here
  

  res.send(JSON.stringify(friends,null,4));//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here


  res.send(friends[req.params.email]);//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",function (req,res){
    if (req.body.email){
        friends[req.body.email] = {
            "firstName":req.body.firstName,
            "lastName":req.body.lastName,
            "DOB":req.body.DOB
            //Add similarly for lastName
            //Add similarly for DOB
            }
    }
res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  let friend=friends[email];
  if(friend)
  {
      let DOB = req.body.DOB;
      let firstName=req.body.firstName;
      let lastName=req.body.lastName;
  
  if(DOB)
  {
      friend["DOB"]=DOB;
  }

  if(firstName)
  {
      friend["firstName"]=firstName;
  }

  if(lastName)
  {
      friend["lastName"]=lastName;
  }
  friends[email]=friend;
  res.send(`Friend with the email  ${email} updated.`);
}
else{
    res.send("unable to find friend");
}
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  if(friends[req.params.email])
  {
    delete friends[req.params.email];
    res.send("Friend "+ req.params.email+"has been deleted");
  }
  else
  {
    res.send("Friend does not exist with email "+ req.params.email)//This line is to be replaced with actual return value
  
  }

  
  
});

module.exports=router;
