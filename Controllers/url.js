import req from 'express/lib/request.js';
import {Url} from '../Models/Url.js';

import shortid from 'shortid';
export const shorUrl = async (req , res)=>{
    // Logic for shortening URLs
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate();

    const shortUrl = `http://Localhost:2000/${shortCode}`;
    const newUrl = new Url({shortCode, longUrl});
    await newUrl.save();

    console.log(`shortUrl: ${shortCode}`);
    res.render('index.ejs',{shortUrl})
}

export const getOriginolUrl = async (req, res)=>{
    
    const shortCode = req.params.shortCode
// find  on database
    const originolUrl = await Url.findOne({shortCode});
    if(originolUrl){
        res.redirect(originolUrl.longUrl);
    }else{
        res.json({messege:`Url not found`})
    }
    res.json({originolUrl})
}