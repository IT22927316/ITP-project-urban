import React,{Component} from "react";
import axios from "axios";


export default class EmployeeLeave extends Component {
constructor(props){
  super(props);
  this.state={
    posts1:[]
  };
}

componentDidMount(){
  this.retrivePosts1();
}

retrivePosts1(){
  axios.get("/posts1").then(res =>{

    if(res.data.success){
      this.setState({
        posts1:res.data.existingPosts1
      });
      console.log(this.state.posts1)
    }
  });
}

onDelete = (id) =>{
  axios.delete(`/post1/delete/${id}`).then((res) => {
    alert("Leave Cancel");
    this.retrivePosts1();
  })
}

onApprove = (id) =>{
  axios.put(`/post1/${id}`).then((res) => {
    alert("Leave Cancel");
    this.retrivePosts1();
  })
}

filterData(posts1,searchkey){
  const result = posts1.filter((post1) =>
  post1.Employee_ID.toLowerCase().includes(searchkey)||
  post1.Name.toLowerCase().includes(searchkey)||
  post1.jobRole.toLowerCase().includes(searchkey)||
  post1.Leave_Type.toLowerCase().includes(searchkey)||
  post1.Leave_From.toLowerCase().includes(searchkey)||
  post1.Leave_To.toLowerCase().includes(searchkey)

  )
     this.setState({posts1: result})
}
handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
  axios.get("/posts1").then(res =>{

  if(res.data.success){
    
    this.filterData(res.data.existingPosts1,searchKey)
  }
});
    
}
  render(){
    return(
  
      <div className = "container"  style={{ backgroundColor: "#e3f2fe" }}>
          <div className ="row">

            <div className = "col-lg-9 mt-2 mb-2">
                <p>Employees Leave Summary </p>
            </div>
            <div className = "col-lg-3 mt-2 mb-2">
            <input 
                         className = "form-control"
                         type = "search"
                         placeholder = "search"
                         name = "searchQuery"
                         onChange = {this.handleSearchArea}>
                          </input>
              </div>
          </div>

        <table className="table table-hover" style={{marginTop:'40px'}}>
              
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Employee_ID</th>
                <th scope="col"> Name</th>
                <th scope="col">jobRole</th>
                <th scope="col">Leave_Type</th>
                <th scope="col">Leave_From</th>
                <th scope="col">Leave_To</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts1.map((posts1,index)=>(

                 <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/post1/${posts1._id}`} style={{textDecoration:'none'}}>
                         {posts1.Employee_ID}

                    </a>
                    </td>
                       
                       <td>{posts1.Name}</td>
                       <td>{posts1.jobRole}</td>
                       <td>{posts1.Leave_Type}</td>
                       <td>{posts1.Leave_From}</td>
                       <td>{posts1.Leave_To}</td>
                  
                       <td>
                  <a className = "btn btn-warning">
                    <i className = "fas fa-edit"></i>&nbsp;Approve
                  </a>
                   
                   &nbsp;
                   
                  <a className = "btn btn-danger" href = "#" onClick={()=> this.onDelete(posts1._id)}>
                    <i className = "fas fa-trash-alt"></i>&nbsp;Cancel
                  </a>

                </td>
               
                 </tr>
             ))}
            </tbody>
      </table>

           <button className="btn btn-success"><a href="/add1" style = {{textDecoration:'none',color:'white'}}>  Leave form  </a></button>
      </div> 
    )
  }
}