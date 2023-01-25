import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [author,setAuthor]=useState("");
    const handle=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
         
        fetch

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
                <textarea cols="30" rows="10"></textarea>
                <label
                required
                onChange={(e)=>setBody(e.target.value)}
                >Your Name :</label>
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