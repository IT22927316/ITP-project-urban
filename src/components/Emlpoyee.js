import React,{Component} from "react";
import axios from "axios";


export default class Employee extends Component {
constructor(props){
  super(props);
  this.state={
    posts:[]
  };
}

componentDidMount(){
  this.retrivePosts();
}

retrivePosts(){
  axios.get("http://localhost:8005/posts").then(res =>{

    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}


  render(){
    const{Employee_ID,Name,Email,jobRole} = this.state.posts;
    return(

            <div>
                <h1>All Employees </h1>
                <br></br>

                <h1>Employee_ID:{Employee_ID}</h1>
                <h1>Name:{Name}</h1>
                <h1>Email:{Email}</h1>
                <h1>jobRole:{jobRole}</h1>
            </div>

    
                 
             
            

    )
  }
}