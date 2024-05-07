import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import EmployeeSummary from "./components/EmployeeSummary";
import PostDetails from "./components/PostDetails";
import NavBar from "./components/NavBar";
import EmployeeLeave from "./components/EmployeeLeave";
import CreatePost1 from "./components/CreatePost1";
import CreatePost2 from "./components/CreatePost2";
import SalarySummary from "./components/SalarySummary";
import PostDetails1 from "./components/PostDetails1";
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";





export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
         <div className ="container">
                           
          <NavBar/>
          <Routes>
                
                 <Route path ="/" element = {<EmployeeSummary/>}></Route>
                 <Route path ="/add" element = {<CreatePost/>}></Route>
                 <Route path ="/edit/:id" element = {<EditPost/>}></Route>
                 <Route path="/post/:id" element={<PostDetails/>}> </Route>
                 <Route path ="/2" element = {<EmployeeLeave/>}></Route>
                 <Route path ="/add1" element = {<CreatePost1/>}></Route>
                 <Route path ="/add2" element = {<CreatePost2/>}></Route>
                 <Route path ="/sal" element = {<SalarySummary/>}></Route>
                 <Route path="/post2/:id" element={<PostDetails1/>}> </Route>
                 <Route path ="/em" element = {<EmployeeList/>}></Route>
                 <Route path ="/hm" element = {<Home/>}></Route>
                 
                 
                 
          </Routes>
          
         </div> 
      
      </BrowserRouter>
    )
  }
}

