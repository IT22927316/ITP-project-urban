import React, {Component} from 'react';
import axios from 'axios';
import "./CreatePost.css";
export default class CreatePost extends Component {
      constructor(props){
        super(props);

        this.state = { 
            Employee_ID:"",
            Name: "",
            Email: "",
            jobRole: "",

        }
      }
      
      handleInputChange = (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
      }

      onSubmit = (e) =>{
        e.preventDefault();
           const{Employee_ID,  Name,Email, jobRole} = this.state;

           const data ={
               Employee_ID : Employee_ID,
               Name : Name ,
               Email: Email,
               jobRole : jobRole
           };
           console.log(data);

           axios.post("http://localhost:8005/post/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        Employee_ID : "",
                        Name : "",
                        Email : "",
                        jobRole : ""
                    }
                    
                );
            }
           })
         
      }

    render(){
        return(
          <section className ="hero">
            
            <div className = "content">
              <h6><br></br></h6>
                <h1>Register</h1>
             
            <form className = "needs-validation" noValidate>
             
            <div className = "form-group" style = {{marginBottom : '15px'}} >
                       <label style = {{marginBottom:'5px'}}>Employee_ID</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Employee_ID"
                         placeholder = "Enter Employee ID"
                         value = {this.state.Employee_ID}
                         onChange = {this.handleInputChange}
                         />
                </div>


                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Name</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Name"
                         placeholder = "Enter full name"
                         value = {this.state.Name}
                         onChange = {this.handleInputChange}
                         />


                </div>

                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Email</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Email"
                         placeholder = "Enter email address"
                         value = {this.state.Email}
                         onChange = {this.handleInputChange}
                         />
                </div> 


                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>job Role</label>
                       <input type = "text"
                         className = "form-control"
                         name = "jobRole"
                         placeholder = "Enter jobRole"
                         value = {this.state.jobRole}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                <button className = "btn btn-success" type = "submit"  style = {{marginTop: '20px'}} onClick = {this.onSubmit}>
                    
                           <i className = "far fa-check-square"></i>
                           &nbsp; Submit
                    </button>   



            </form>
            </div>
            </section>

        )
    }
  
}