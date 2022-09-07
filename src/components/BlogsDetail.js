import { useParams } from 'react-router-dom';
function BlogsDetail() {

const { id } = useParams()
    
    return (
      <div className="ol">
        <h1>Blog Detail - {id}</h1>
          
        
      </div>
    );
  }
  
  export default BlogsDetail;
  