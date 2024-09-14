//this is where all our express routing happens
const app=require('./server').app;
const jwt =require('jsonwebtoken')
const linkSecret='jfbnvhsearlbg2'
// thsi rotue is for out use In productiona ny one can use this route to ca;;
//wuld send this out we will print it out and paste it in. It will drop
//us on our react site with the right info for client1 to make an offer

app.get('/user-link',(req,res)=>{
    //data for the end-user's appt
    const apptData={
        professionalsFullName:"Bobby",
        apptDate:Date.now()+500000,
    }
    
    //we need to encode this data in to a token(JWT token)
    //so it can be added to a url
    const token =jwt.sign(apptData,linkSecret);
    res.send('https://localhost:3000/join-video?token='+token);

    //res.json("This is a test route")
})


app.post('/validate-link',(req,res)=>{
    //get the token fron the body of the post request
    const token=req.body.token;
    //decode the jwt with our secret
    const decodedData=jwt.verify(token,linkSecret);
    //send the decoded data (our object) back to the frontend
    res.json(decodedData)
    //res.json("this is validate route")
})




