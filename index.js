const express=require('express');
const axios=require('axios');
const cheerio=require('cheerio');
const extractUrls = require("extract-urls");

const app=express();

const data=[];

axios.get('https://arstechnica.com/gadgets/').then(res=>{
    const $=cheerio.load(res.data);

    $('li.article').each((i,element)=>{
        const imgurl=$(element).find('figure>div').attr('style');
        const link=$(element).find('header>h2').prop('innerText');
        const urls = extractUrls(imgurl);
        data.push({
            img:urls,
            href:link
        })
    })

})



app.get('/',async (req,res)=>{
    await res.send(data)
})

app.listen(9000||process.env.PORT,()=>{

})

