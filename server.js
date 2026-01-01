import express from 'express';
import mongoose from 'mongoose';
import {shorUrl,  getOriginolUrl} from './Controllers/url.js';
const app = express();
const port = 2000;

app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://tayyab:tayyab786@cluster0.btpgetj.mongodb.net/', {
    dbName: 'project1'
}).then(()=>{
    console.log(('Connected to MongoDB'));
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
});



//renderi ngejs files
app.get('/',(req, res)=>{
    res.render('index.ejs',{shortUrl :null})
})

//rout for urls
app.post('/short', shorUrl);

// redirect to orginal long url 
app.get('/:shortCode',  getOriginolUrl) ;



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});