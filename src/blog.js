import { useEffect,useState } from "react";
import { Link } from "react-router-dom";



const Blog = () => {

    const [blogs,setBlog]=useState(null);
    const [isPending,setPending]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        fetch(" http://localhost:4000/Blogs")
        .then((res)=>{
            if(!res.ok){
                throw Error("Server is Down or have issue in connectin to Database");
            }
            return res.json();

        })
        .then((data)=>{
            setBlog(data);
            setPending(false);
        })
        .catch(err=>{
            setPending(false);
            setError(err)
            
        })
    })

    return ( 
        <div className="Blog">
            <h1 className="blog-heading">
                Happy Reading!!!!
            </h1>

            {isPending && <div className="Loading">Loading....</div>}
            {blogs &&
                blogs.map((blog)=>(
                    <div className="Blogs">
                        <Link to={'/blogDetail/'+blog.id}>
                        <h2>{blog.title}</h2>
                        <h4>Written By {blog.author}</h4>
                        </Link>
                    </div>
                ))
            }
            {error && <div>{error}</div>}
        </div>
     );
}
 
export default Blog;