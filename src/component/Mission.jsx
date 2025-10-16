import "./Mission.css"
import ef from '../assets/ef.jpg'

import React from 'react'

function Mission() {
  return (
    <div className="Mission">

        <div className="mis">
            <img className='ef'src= {ef} />
        </div>

        <div className="Missionone">
            <h2>Our Mission</h2>
            <h1>Conserving the lands and waters on which all life depends</h1>
            <small>Every acre we protect and every river mile we restore begins with you. Your support helps us take on the dual threats of climate change and biodiversity loss across 80+ countries and territories.</small>
            <br/>
            <button>DONATENOW</button>
            <h3>Get our latest conservation news and see how we’re protecting our natural world.</h3>
            <small>Email address:</small>
            <br/>
            <input type="email" placeholder="Enter your email address"/>
            <button className="bu">Sign up</button>
        </div>

    </div>
  )
}

export default Mission
