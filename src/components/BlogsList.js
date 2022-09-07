import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function BlogsList() {

    const [posts, setPosts] = useState([]);
   
    useEffect(() =>  { // you can either use async , await or then method 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
        
    },[])
    return (
     
      <div className="BlogsList">
         
          
        <h1>Posts</h1>
       <Link to="./Create"><h2>Create Link</h2></Link> 
          {posts.map((post) => (
              <div className="blog" key={post.id}>
            
           
         <Link to={`/BlogsDetail/${post.id}`}> 
         
         <h3 className="title">{post.title}</h3>
         <p>{post.body} </p>
         </Link>
          <h5>Written By .. {post.userId}</h5>
              </div>
           
          ))}
          
       
      </div>
      
    );
  }
  
  export default BlogsList;
  