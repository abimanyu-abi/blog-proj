
import { useHistory } from "react-router-dom";
const Home = () => {

    const history =useHistory()
    return ( 
        <div className="home">
            <section className="section-1">
       
                  <div className="main-sec">
                      <h1 className="heading">Create your blog</h1>
                      
                      <p className="first-half">Share your interests through blog which</p><p>
                           might be information to others</p>
                      
                      <button onClick={()=>history.push("/blog")}>Get Started</button>
                  </div>
               </section>

    <section className="section-2">
        <h2 className="purpose">Purpose</h2>
       
        <div className="connect">
            <span>
                <img src="/undraw_team_up_re_84ok.svg" alt="img1"/>
            </span>
            <h3>Connect</h3>
            <p className="first-line">Connect with other people</p><p>with same intrests</p>
        </div>
        <div className="like">
            <span>
                <img src="/undraw_appreciate_it_re_yc8h.svg" alt="img2"/>
            </span>
            <h3>Like</h3>
            <p className="first-line">Like the blog that</p><p>interests you.</p>
        </div>
        <div className="share">
            <span>
                <img src="/undraw_newspaper_re_syf5.svg" alt="img3"/>
            </span>
            <h3>Share</h3>
            <p className="first-line">Share the blog with</p><p> other people.</p>
        </div>
       
    </section>
    <section className="section-3">
        
        <div className="content-aboutus">
            <h2 className="aboutus">about Us</h2>
            <h1>Service for you that we provide</h1>
            <p></p>
        </div>
        <img src="/undraw_team_spirit_re_yl1v.svg" alt="img4"/>
    </section>

    <section className="section-4">
        <div className="portfolio">
            <h2 className="aboutus">Our portfolio</h2>
            <h1>Our Latest Portfolio </h1>

        </div>
        <button>view more</button>
        <h1 className="contactus">Contact Us</h1>
        <div className="form">
            <h3>Let's talk about you</h3>
            <div>
                <form>
                    <label for="fname">Name</label>
                    <input type="text" id="fname" name="first name" placeholder="First name"/>
                    
                    <label for="email">Email</label>
                    <input type="email" id="mail" name="email" placeholder="info@blogshare.com"/>
                </form>
            </div>
        </div>

    </section>
    
        </div>
     );
}
 
export default Home;