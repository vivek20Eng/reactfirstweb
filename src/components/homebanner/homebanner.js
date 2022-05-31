import React from "react";
import './homebanner.css';
// import Yongmen from 'viveereactproj\akhileshapp\src\components\homebanner/Yongmen.png';
function homebanner() {
  return (
    <div id="main-container"class="container-fluid">
      <div className="row">
        <div className="container-left col-md-8">
         <b> <h1>SASI ANNAN FZN</h1></b>
          <p>
            senior <span>python developer </span>
           
               and <br/><span>mobile app</span> developer
            
          </p>
          <button class="hireme-btn1">Hire me</button>
          <section id="home-baner-image">
          {/* <img src={Yongmen}alt="men"/> */}
        </section>
        </div>

        <div className="container-right col-md-4">
          
        </div>
        
      </div>
      <div id="mini-project-container">
          <ul>
              <li>projects</li>
              <li>projects</li>
              <li>projects</li>
              <li>projects</li>
              <li>projects</li>
          </ul>
      </div>
    </div>
  );
}

export default homebanner;
