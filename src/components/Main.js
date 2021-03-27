import React from 'react'
import './Main.css';
import './Grid.css';
import './Query.css';



function Main() {
  return (
    
      <header>
  <div className='row-visible'>
    <div className="login-box">
      <div>
        <label for="username">Enter username or email:</label>
        <input id="username" type="text"/>
      </div>
      <div>
        <label htmlfor="password">password:</label>
        <input id="password" type="password"/>
      </div>
      <div>
        <a className="login clearfix" href="#">Login</a>
      </div>
    </div>
  </div>
    <nav>
      <div className="row">
        <a className='logo-name clearfix' href="#">real dating pro</a>
        <ul className="main-menu clearfix">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
          <li><a className="btn-signin" href="#">sign in</a></li>
        </ul>
      </div>
    </nav>
    
    <div className="row">
      <div className="col span-2-of-3">
        <div className="main-text">
          <h1>
            Top love Dating
            Thousands of <span>VERIFIED</span>  Profiles
          </h1>
          <p>
            THE ONLY SITE YOU NEED
              <span>100% FREE</span> for people Community
            Chat, Instant Messenger, Blogs
            Photo Galleries & more!
          </p>
        </div>
      </div>
      
      <div className="col span-1-of-3">
        <form className="user-form" action="#">
          <div>
            <h2>I'm:</h2>
            <select name="#" id="#">
              <option value="gender" selected>Select your gender</option>
              <option value="man">Man</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="non-binary">non-binary</option>
            </select>
          </div>
          <div>
            <h2>Looking for:</h2>
            <select name="#" id="#">
              <option value="gender" selected>Please select</option>
              <option value="man">Man</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="non-binary">non-binary</option>
            </select>
          </div>
          <div>
            <label className="label" htmlfor="name">Choose Username:</label> <br/>
            <input type="text" id="name" placeholder="Your username"/>
          </div>
          <div>
            <label className="label"  htmlfor="email">Enter email:</label> <br/>
            <input type="email" id="email" placeholder="example@example.com"/>
          </div>
          <div>
            <h2>Country:</h2>
            <select id="country" name="country"></select>

              <option value="Afganistan" selected>USA</option>
              <option value="Albania">Albania</option>
          </div>
        </form>
      </div>
    </div>
  </header>
  
  
    
  )
}

export default Main
