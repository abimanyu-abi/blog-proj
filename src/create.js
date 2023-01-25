import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [author,setAuthor]=useState("");
    const history=useHistory();
    const handle=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
         
        fetch("http://localhost:4000/Blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)

        })
        .then(()=>{
            history.push("/");
    })

    }

    return ( 
        <div className="create-blog">
            <h2 className="create-title">Create Amazing Blogs</h2>
            <form className="create-form" onSubmit={handle}>
                <label>Title of Blog :</label>
                <input 
                required
                onChange={(e)=>setTitle(e.target.value)}
                type="text"></input>
                <label>Blog body :</label>
                <textarea cols="30" rows="10" 
                required
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Your Name :</label>
                <input 
                required
                onChange={(e)=>setAuthor(e.target.value)}
                type="text"></input>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;