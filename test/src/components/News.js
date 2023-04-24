import React from 'react'

export default function News(props) {
  
 const {author,title,content,date,imageUrl,readMoreUrl,time,url}=props;
    
  return (
    
    <div className='news'>
    <a href={readMoreUrl}>
    <div className="img">
    <img src={imageUrl} alt="thumbnail" href={readMoreUrl}/>
    </div>
    </a>

    <div className="content">
    <a href={url} style={{textDecoration:'none',color:'black'}}><h3>{title}</h3></a>
    
    <div className="creds">
    <p style={{fontWeight:'bold'}}>{author}</p>
    <p style={{color:'red'}}>{time+' '} </p>
    <p style={{color:'red'}}>{date+' '}</p>
    </div>

    <p className='description'>{content}</p>
    </div>

    </div>
  )
}
