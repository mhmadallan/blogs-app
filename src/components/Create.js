import { useEffect , useState} from 'react';

function Create() {

    const [userId , setUserId] = useState("");
    const [id , setId] = useState("");
    const [body , setBody] = useState("");
    const [title,setTitle] = useState("");

    const onSubmit = (e) => {
      e.preventDefault();
      //console.log("e.target")
      const blog = {userId,id,title,body};
      console.log(blog)

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify()
      }).then(res => res.json()).then(data => console.log(data));
      
    }
   

        return (
          <div className="ol">

            <h1>Create</h1>
            <form onSubmit={onSubmit}>
              <input type="text" placeholder="userId" value={userId} onChange = {(e) => setUserId(e.target.value)}/>
              <input type="text" placeholder="title" value={title} onChange = {(e) => setTitle(e.target.value)}/>
              <input type="text" placeholder="id" name="id" value={id} onChange = {(e) => setId(e.target.value)}/>
              <textarea placeholder="body" name="body" value={body} onChange = {(e) => setBody(e.target.value)}></textarea>
              <input type="submit" value="submit"/>
            </form>

          </div>
        );
      }
      
      export default Create;
      