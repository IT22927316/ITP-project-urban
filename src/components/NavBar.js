import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#0F4B05" }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-between">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/hm" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/" style={{ textDecoration: 'none', color: 'white' }}>Employee Summary</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/add2" style={{ textDecoration: 'none', color: 'white' }}>Employee Salary Assignment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/2" style={{ textDecoration: 'none', color: 'white' }}>Employee Leave</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/add" style={{ textDecoration: 'none', color: 'white' }}>Register form</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/sal" style={{ textDecoration: 'none', color: 'white' }}>SalarySummary</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/em" style={{ textDecoration: 'none', color: 'white' }}>EmployeeList</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
/*import React, {Component} from 'react'


export default class NavBar extends Component {
    render(){
        return(
            <nav class ="navbar navbar-expand-lg navbar-light" style={{background:"#0F4B05 "}}>
             
             <div class = "container-fluid">
                { /*<a class ="navbar-brand"> CRUD App using MERN stack </a>  }*/
                  
           /*       <button class = "navbar-toggler" type = "button"
                  data-bs-toggle = "collapse"
                  data-bs-target = "#navbarNav" aria-controls = "navbarNav"
                  aria-expanded = "false"  aria-label = "Toggle navigation">

                    <span class = "navbar-toggler-icon"></span>

                  </button>
                
                  <div class = "collapse navbar-collapse" id= "navbarNav">

                           <ul class = "navbar-nav">

                           <li class = "nav-item">
                           
                           <a class = "nav-link" aria-current = "page" href = "/hm"  style = {{textDecoration:'none',color:'white'}} > Home  </a>
                   
                          </li>

                           <li class = "nav-item">
                           
                            <a class = "nav-link" aria-current = "page" href = "/"  style = {{textDecoration:'none',color:'white'}} > Employee Summary     </a>
                    
                           </li>
                           <li class = "nav-item">
                            <a class = "nav-link" aria-current = "page" href = "/add2"  style = {{textDecoration:'none',color:'white'}} >Employee Salary Assignment </a>
                    
                           </li>

                           
                           <li class = "nav-item">
                            <a class = "nav-link" aria-current = "page" href = "/2" style = {{textDecoration:'none',color:'white'}} >Employee Leave </a>
                    
                           </li>

                           
                           <li class = "nav-item">
                            <a class = "nav-link" aria-current = "page" href = "/add"  style = {{textDecoration:'none',color:'white'}}>Register form </a>
                    
                           </li>

                           <li class = "nav-item">
                            <a class = "nav-link" aria-current = "page" href = "/sal"  style = {{textDecoration:'none',color:'white'}} >SalarySummary
                             </a>
                    
                           </li>
                            
                           <li class = "nav-item">
                            <a class = "nav-link" aria-current = "page" href = "/em"  style = {{textDecoration:'none',color:'white'}} >EmployeeList
                             </a>
                    
                           </li>


                           </ul>


                  </div>
             </div>
            </nav>
            
        )
    }

  }

  */