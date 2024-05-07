import React, {Component} from 'react'
import axios from 'axios'
import "./EditPost.css";
export default class EditPost extends Component {

    constructor(props){
        super(props);

        this.state = {
            Employee_ID: "",
            Name: "",
            Email: "",
            jobRole: ""
            
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
        const id = this.props.match?.params?.id;

           const{ Employee_ID,Name, Email, jobRole} = this.state;

           const data = {
            Employee_ID : Employee_ID,
            Name : Name ,
            Email: Email,
            jobRole : jobRole
           };
           console.log(data);

           axios.put(`http://localhost:8005/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Poat Updated Successfully");
                this.setState(
                    {
                        Employee_ID : "",
                        Name : "",
                        Email: "",
                        jobRole : ""
                    }
                    
                );
            }
           }) 
      }

      componentDidMount(){
        const id = this.props.match?.params?.id;

        axios.put(`http://localhost:8005/post/update/${id}`).then((res)=>{

            if(res.data.success){
                this.setState({
                    Employee_ID:res.data.post.Employee_ID,
                    Name:res.data.post.Name,
                    Email:res.data.post.Email,
                    jobRole:res.data.post.jobRole,
                
                });

                console.log(this.state.post);
            }
        });
    }


    render(){
        return(
             <section className ="hero">
               <div className = "content">
              <h6></h6>
                
                <h1>Edit Post</h1>

        <form class = "needs-validation" noValidate>

        <div className = "form-group" style = {{marginBottom : '15px'}}>
                   <label style = {{marginBottom:'5px'}}>Employee_ID</label>
                   <input type = "text"
                     className = "form-control"
                     name = "Employee_ID"
                     placeholder = "Enter employee number"
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
                   <label style = {{marginBottom:'5px'}}>Enmail</label>
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
                     placeholder = "Enter job Role "
                     value = {this.state.jobRole}
                     onChange = {this.handleInputChange}/>
            </div> 

            <button className = "btn btn-success" type = "submit"  style = {{marginTop: '15px'}} onClick = {this.onSubmit}>
                
                       <i className = "far fa-check-square"></i>
                       &nbsp; Update
                </button>   


        </form>
        </div>
        </section>
           
        )
    }

}