import React,{Component} from "react";
import axios from "axios";


export default class EmployeeSummary extends Component {
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

onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) => {
    alert("Delete Successfully");
    this.retrivePosts();
  })
}

filterData(posts,searchkey){
  const result = posts.filter((post) =>
  post.Employee_ID.toLowerCase().includes(searchkey)||
  post.Name.toLowerCase().includes(searchkey)||
  post.Email.toLowerCase().includes(searchkey)||
  post.jobRole.toLowerCase().includes(searchkey)
  )
     this.setState({posts: result})
}
handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
  axios.get("/posts").then(res =>{

  if(res.data.success){
    
    this.filterData(res.data.existingPosts,searchKey)
  }
});
    
}

  render(){
    return(
  
      <div className = "container"  style={{ backgroundColor: "#e3f2fe" }}>
          <div className ="row">

            <div className = "col-lg-9 mt-2 mb-2">
                <p>All Employees </p>
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
                <th scope="col">Email</th>
                <th scope="col">jobRole</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts,index)=>(

                 <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                         {posts.Employee_ID}

                    </a>
                    </td>
                       
                       <td>{posts.Name}</td>
                       <td>{posts.Email}</td>
                       <td>{posts.jobRole}</td>
                  
                <td>
                  
                   
                  <a className = "btn btn-warning" href = {`/edit/${posts._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                  </a>
                   
                   &nbsp;
                   
                  <a className = "btn btn-danger" href = "#" onClick={()=> this.onDelete(posts._id)}>
                    <i className = "fas fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>
                 </tr>
             ))}
            </tbody>
      </table>

      <button className="btn btn-success"><a href="/add" style = {{textDecoration:'none',color:'white'}}>Register form</a></button>
      &nbsp;
      &nbsp;
      
      <button className="btn btn-success"><a href="/add1" style = {{textDecoration:'none',color:'white'}}>  Leave form  </a></button>
       

      &nbsp;
      &nbsp;

     <button className="btn btn-success"><a href="/em" style = {{textDecoration:'none',color:'white'}}>  Employee List  </a></button>
     </div> 
     
    )
  }
}