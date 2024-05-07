import React,{Component} from "react";
import axios from "axios";


export default class SalarySummary extends Component {
constructor(props){
  super(props);
  this.state={
    posts2:[]
  };
}

componentDidMount(){
  this.retrivePosts2();
}

retrivePosts2(){
  axios.get("/posts2").then(res =>{

    if(res.data.success){
      this.setState({
        posts2:res.data.existingPosts2
      });
      console.log(this.state.posts2)
    }
  });
}




filterData(posts2,searchkey){
  const result = posts2.filter((post2) =>
  post2.Employee_ID.toLowerCase().includes(searchkey)||
  post2.Select_month.toLowerCase().includes(searchkey)||
  post2.Basic_Salary.toLowerCase().includes(searchkey)||
  post2.OT_Hours.toLowerCase().includes(searchkey)||
  post2.OT_Rate.toLowerCase().includes(searchkey)||
  post2.Total_Salary.toLowerCase().includes(searchkey)

  )
     this.setState({posts2: result})
}
handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
  axios.get("/posts2").then(res =>{

  if(res.data.success){
    
    this.filterData(res.data.existingPosts2,searchKey)
  }
});
    
}
  render(){
    return(
  
      <div className = "container"  style={{ backgroundColor: "#e3f2fe" }}>
          <div className ="row">

            <div className = "col-lg-9 mt-2 mb-2">
                <p>Salary Details </p>
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
                <th scope="col"> Select_month</th>
                <th scope="col">Basic_Salary</th>
                <th scope="col">OT_Hours</th>
                <th scope="col">OT_Rate</th> 
                <th scope="col">Total_Salary</th>       
          
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts2.map((posts2,index)=>(

                 <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/post2/${posts2._id}`} style={{textDecoration:'none'}}>
                         {posts2.Employee_ID}

                    </a>
                    </td>
                    
                       <td>{posts2.Select_month}</td>
                       <td>{posts2.Basic_Salary}</td>
                       <td>{posts2.OT_Hours}</td>
                       <td>{posts2.OT_Rate}</td>
                       <td>{posts2.Total_Salary}</td>
                            
                 </tr>
             ))}
            </tbody>
      </table>

      
      </div> 
    )
  }
}


