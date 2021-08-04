import React from 'react'
// import HomeCards3 from "./cards/HomeCards3";
// import { Container, Row} from 'reactstrap';

import { useHistory } from 'react-router-dom'

const Home = (props) => {
    const history = useHistory();
    return (
    
<div className="home">
<h2>Potluck Planner!</h2>
<div className="homepage">
<div className="title">
<p><span>Organizing a Potluck? </span>We make it easy to include a handy Potluck List for your party guests when you send online invitations! Let your guests write in their contribution, or specify what you’d like each person to bring.</p>
</div>
<div className="homebuttons">
<div className="button_slide slide_right" onClick={() => history.push("/signup")}>Register!</div> 
{/* <p><span>or</span></p> */}
<div className="button_slide slide_right" onClick={() => history.push("/login")}>Login</div>
</div>

</div>


    </div>
  

    )
}

export default Home