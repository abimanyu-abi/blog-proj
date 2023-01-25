import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetail = () => {
    const {id}=useParams();
    const history =useHistory();
    const handle=()=>{
        fetch("http://localhost:4000/Blogs/"+id,{
            method:"DELETE"
        }).then(()=>{
            
            history.push("/blog");
        })

    }

   const [blog,setBlog]=useState(null);
   const [isPending,setPending]=useState(true);
   const [error,setError]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:4000/Blogs/"+id)
        .then(res=>{
            if(!res.ok){
                throw Error("server down or could not get data");
            }
            return res.json()
        })
        .then(data=>{
            setBlog(data);
            setPending(false);
            setError(null);
        })
        .catch(err=>{
            setError(err);
            setPending(false);
        })
    })


    

    return ( 
        <div className="Blog-detail">
            {blog && <div className="single-blog">
                <h1>{blog.title}</h1>
                <h4>Written by {blog.author}</h4>
                <p>{blog.body}</p>
                <button onClick={handle}>Delete Blog</button>
                </div>}

            {isPending && <div className="Blog-detail-loading">Loading....</div>}
            {error && <div>{error}</div>}
        </div>
     );
}
 
export default BlogDetail;