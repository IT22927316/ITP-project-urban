import React, {Component} from 'react';
import axios from 'axios';
import "./CreatePost1.css";
export default class CreatePost1  extends Component {
      constructor(props){
        super(props);

        this.state = {
            Employee_ID:"",
            Name: "",
            jobRole: "",
            Leave_Type: "",
            Leave_From: "",
            Leave_To: "",

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
           const{Employee_ID,Name,jobRole,Leave_Type,Leave_From,Leave_To} = this.state;

           const data ={
               Employee_ID : Employee_ID,
               Name : Name ,
               jobRole : jobRole,
               Leave_Type : Leave_Type,
               Leave_From : Leave_From,
               Leave_To : Leave_To,


           };
           console.log(data);

           axios.post("/post1/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        Employee_ID : "",
                        Name : "",
                        jobRole : "",
                        Leave_Type : "",
                        Leave_From : "",
                        Leave_To : "" ,
                    }
                    
                );
            }
           })
         
      }

    render(){
        return(
            <section className = "hero">
              
                <div className = "content">
                <h6></h6>
                   
                 <h1>Leave Sheet</h1> 
        
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
                       <label style = {{marginBottom:'5px'}}>job Role</label>
                       <input type = "text"
                         className = "form-control"
                         name = "jobRole"
                         placeholder = "Enter jobRole"
                         value = {this.state.jobRole}
                         onChange = {this.handleInputChange}
                         />
                </div>

                  <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Leave_Type</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Leave_Type"
                         placeholder = "Enter Leave_Type"
                         value = {this.state.Leave_Type}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                  <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Leave_From</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Leave_From"
                         placeholder = "Enter Leave_From"
                         value = {this.state.Leave_From}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                  <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Leave_To</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Leave_To"
                         placeholder = "Enter Leave_To"
                         value = {this.state.Leave_To}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                <button className = "btn btn-success" type = "submit"  style = {{marginTop: '15px'}} onClick = {this.onSubmit}>
                    
                           <i className = "far fa-check-square"></i>
                           &nbsp; Submit
                    </button>   


            </form>

            <div className="on"></div>
            </div>
            </section>
        )
    }
  
}