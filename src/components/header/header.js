import React from 'react';
import './header.css';
function header() {
  return (
    <header id="main-header" className=''>
        <div className=''>
        <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">LOGO</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      
      
    </div>
    <div className='header-right-section'>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Work</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        
      </ul>
      </div>
  </div>
  <form class="d-flex" role="search">
        
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
</nav>
</div>
    </header>
  )
}

export default header