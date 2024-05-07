import React, { Component } from "react";
import axios from "axios";


export default class PostDetails1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post2: {} // Initial state
        };
    }

    componentDidMount() {
        const id = this.props.match?.params?.id; // Destructure id from route params

        axios.get(`http://localhost:8005/post2/${id}`)
            .then((res) => {
                if (res.data.success) {
                    this.setState({
                        post2: res.data.post2 // Update state with received post data
                    });
                
                    console.log(this.state.post2);
                }
           
            });   

        }
     
       
                
        render() {
            const { Employee_ID,Select_month,Basic_Salary,OT_Hours,OT_Rate,Total_Salary } = this.state.post2;
            return(
                <div className="col-lg-9 mt-2 mb-2">
                <p>Salary Details </p>
 
                    <div style={{ marginTop: "20px" }}>
                        <h4>{}</h4>
                        <hr />

                        <dl className="row">
                            <dt className="col-sm-3">Employee ID</dt>
                            <dd className="col-sm-9">{Employee_ID}</dd>
                
                            <dt className="col-sm-3">Select_month</dt>
                            <dd className="col-sm-9">{Select_month}</dd>

                            <dt className="col-sm-3">Basic_Salary</dt>
                            <dd className="col-sm-9">{Basic_Salary}</dd>

                            <dt className="col-sm-3">OT_Hours</dt>
                            <dd className="col-sm-9">{OT_Hours}</dd>

                            <dt className="col-sm-3">OT_Rate</dt>
                            <dd className="col-sm-9">{OT_Rate}</dd>

                            <dt className="col-sm-3">Total_Salary</dt>
                            <dd className="col-sm-9">{Total_Salary}</dd>
                        </dl>
                </div>
              </div>


            )
        }
  
    }

            
 