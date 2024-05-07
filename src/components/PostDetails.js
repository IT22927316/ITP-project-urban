import React, { Component } from "react";
import axios from "axios";


export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {} // Initial state
        };
    }
 
    componentDidMount() {
        const id = this.props.match?.params?.id; // Destructure id from route params
        
        axios.get(`/post/${id}`).then((res) => {
                if (res.data.success) {
                    this.setState({
                        post: res.data.post // Update state with received post data
                    });
                
                    console.log(this.state.post);
                }
           
            });   

        }
     
    
        render() {
            const { Employee_ID, Name, Email, jobRole } = this.state.post;
            return(
                <div className="col-lg-9 mt-2 mb-2">
                <p>Employee Details </p>

                    <div style={{ marginTop: "20px" }}>
                        <h4>{Name}</h4>
                        <hr />

                        <dl className="row">
                            <dt className="col-sm-3">Employee ID</dt>
                            <dd className="col-sm-9">{Employee_ID}</dd>

                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9">{Name}</dd>

                            <dt className="col-sm-3">Email</dt>
                            <dd className="col-sm-9">{Email}</dd>

                            <dt className="col-sm-3">Job Role</dt>
                            <dd className="col-sm-9">{jobRole}</dd>
                        </dl>
                </div>
              </div>
            )
        }
  
    }

            
