import './App.css';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';
import axios from 'axios';
import News from './components/News';
import CircularProgress from '@mui/material/CircularProgress';
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  
  const [news,setNews]=useState(null);
  const [parent] = useAutoAnimate({duration:1000});

  useEffect(()=>{
    
    axios.get('https://inshorts.deta.dev/news?category=all').then((response)=>{
      const res=response.data;
      setNews(res.data)
    })

  },[])

  return (
    <div className="App">
    <div className="cats">
    
    <Chip
        onClick={()=>{
           setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=all').then((response)=>{
          const res=response.data;
          setNews(res.data)
      
    })
        }}
        color='success' variant='outlined'
        label="Home"
      />

       <Chip
        onClick={()=>{

          setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=national').then((response)=>{
          
          setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
          
      
    })
        }}
        color='success' variant='outlined'
        label="National"
      />


      <Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=business').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Business"
      />

      <Chip
      onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=sports').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Sports"
      />
      <Chip
      onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=world').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="World"
      />


<Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=technology').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Technology"
      />

<Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=startup').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Startup"
      />

<Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=science').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Science"
      />

      <Chip
      onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=politics').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Politics"
      />

<Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=automobile').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Automobile"
      />

<Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=entertainment').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Entertainment"
      />

<Chip
        onClick={()=>{setNews(null);
          axios.get('https://inshorts.deta.dev/news?category=miscellaneous').then((response)=>{
            setTimeout(()=>{
            const res=response.data;
      setNews(res.data)
          },500)
      
    })
        }}
        color='success' variant='outlined'
        label="Miscellaneous"
      />

      </div>

      <div className="container" ref={parent}>
      {
        news===null?<CircularProgress/>:(
          news.map((post,index)=>{
          return (
            /* author,title,content,date,imageUrl,readMoreUrl,time,url */
            <News author={post.author} title={post.title} content={post.content} date={post.date} imageUrl={post.imageUrl} readMoreUrl={post.readMoreUrl} time={post.time} url={post.url} />
          )
        })
        )
      }
      </div>
    </div>
  );
}

export default App;
