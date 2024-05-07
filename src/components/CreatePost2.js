import React, {Component} from 'react';
import axios from 'axios';
import "./CreatePost2.css";
export default class CreatePost2 extends Component {
      constructor(props){
        super(props);

        this.state = {
            Employee_ID:"",
            Select_month: "",
            Basic_Salary: "",
            OT_Hours: "",
            OT_Rate:"",
            Total_Salary:"",


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
           const{Employee_ID,Select_month, Basic_Salary, OT_Hours,OT_Rate,Total_Salary} = this.state;

           const data ={
               Employee_ID : Employee_ID,
               Select_month:  Select_month,
               Basic_Salary: Basic_Salary,
               OT_Hours: OT_Hours,
               OT_Rate:OT_Rate,
               Total_Salary:Total_Salary,
              
           };
           console.log(data);

           axios.post("/post2/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        Employee_ID : "",
                        Select_month: "",
                        Basic_Salary: "",
                        OT_Hours: "",
                        OT_Rate:"",
                        Total_Salary:"",
                       
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
                <h1>Employee Salary Assignment</h1>  

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
                       <label style = {{marginBottom:'5px'}}>Select_month</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Select_month"
                         placeholder = "Enter month"
                         value = {this.state.Select_month}
                         onChange = {this.handleInputChange}
                         />
                </div>

                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Basic_Salary</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Basic_Salary"
                         placeholder = "Enter basic salary"
                         value = {this.state.Basic_Salary}
                         onChange = {this.handleInputChange}
                         />
                </div> 


                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>OT_Hours</label>
                       <input type = "text"
                         className = "form-control"
                         name = "OT_Hours"
                         placeholder = "Enter OT_Hours"
                         value = {this.state.OT_Hours}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>OT_Rate</label>
                       <input type = "text"
                         className = "form-control"
                         name = "OT_Rate"
                         placeholder = "Enter OT_Rate"
                         value = {this.state.OT_Rate}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                <div className = "form-group" style = {{marginBottom : '15px'}}>
                       <label style = {{marginBottom:'5px'}}>Total_Salary</label>
                       <input type = "text"
                         className = "form-control"
                         name = "Total_Salary"
                         placeholder = "Enter Total_Salary"
                         value = {this.state.Total_Salary}
                         onChange = {this.handleInputChange}
                         />
                </div> 

                <button className = "btn btn-success" type = "submit"  style = {{marginTop: '15px'}} onClick = {this.onSubmit}>
                    
                           <i className = "far fa-check-square"></i>
                           &nbsp; Submit
                    </button>   


            </form>
            </div>
            </section>
        )
    }
  
}