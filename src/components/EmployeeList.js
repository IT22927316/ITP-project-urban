import React, { Component } from "react";
import axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './EmployeeList.css'; // Import CSS file for custom styles

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:8005/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
            }
        });
    }

    filterData(posts, searchkey) {
        const result = posts.filter(post =>
            post.Employee_ID.toLowerCase().includes(searchkey) ||
            post.Name.toLowerCase().includes(searchkey) ||
            post.Email.toLowerCase().includes(searchkey) ||
            post.jobRole.toLowerCase().includes(searchkey)
        );
        this.setState({ posts: result });
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:8005/posts").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey);
            }
        });
    }

    /*handleDownloadPDF = () => {
        const input = document.getElementById('employee-list');
        html2canvas(input, { scale: 20 })
            .then((canvas) => {
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
                pdf.save('employee_list.pdf');
            });
    }
*/

handleDownloadPDF = () => {
    const input = document.getElementById('employee-list');
    const inputWidth = input.scrollWidth;
    const inputHeight = input.scrollHeight;

    html2canvas(input, { scale: 2, width: inputWidth, height: inputHeight })
        .then((canvas) => {
            const pdf = new jsPDF('l', 'pt', 'a4',[inputWidth, inputHeight]);
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, inputWidth, inputHeight);
            pdf.save('employee_list.pdf');
        });
}
    render() {
        return (
            <div className="container" style={{ backgroundColor: "#e3f2fe" }}>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <p>All Employees List </p>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                        </input>
                    </div>
                    <div className="col-lg-12 mt-2 mb-2">
                        <button className="btn btn-primary" onClick={this.handleDownloadPDF}>Download PDF</button>
                    </div>
                </div>

                <table id="employee-list" className="table table-hover report-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee_ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">jobRole</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{post.Employee_ID}</td>
                                <td>{post.Name}</td>
                                <td>{post.Email}</td>
                                <td>{post.jobRole}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

/*
import React, { Component } from "react";
import axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:8005/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
            }
        });
    }

    filterData(posts, searchkey) {
        const result = posts.filter(post =>
            post.Employee_ID.toLowerCase().includes(searchkey) ||
            post.Name.toLowerCase().includes(searchkey) ||
            post.Email.toLowerCase().includes(searchkey) ||
            post.jobRole.toLowerCase().includes(searchkey)
        );
        this.setState({ posts: result });
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:8005/posts").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey);
            }
        });
    }

    handleDownloadPDF = () => {
        const input = document.getElementById('employee-list');
        html2canvas(input, { scale: 2 })
            .then((canvas) => {
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
                pdf.save('employee_list.pdf');
            });
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: "#e3f2fe" }}>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <p>All Employees List </p>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                        </input>
                    </div>
                    <div className="col-lg-12 mt-2 mb-2">
                        <button className="btn btn-primary" onClick={this.handleDownloadPDF}>Download PDF</button>
                    </div>
                </div>

                <table id="employee-list" className="table table-hover" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee_ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">jobRole</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{post.Employee_ID}</td>
                                <td>{post.Name}</td>
                                <td>{post.Email}</td>
                                <td>{post.jobRole}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}



*/

/*import React, { Component } from "react";
import axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:8005/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
            }
        });
    }

    filterData(posts, searchkey) {
        const result = posts.filter(post =>
            post.Employee_ID.toLowerCase().includes(searchkey) ||
            post.Name.toLowerCase().includes(searchkey) ||
            post.Email.toLowerCase().includes(searchkey) ||
            post.jobRole.toLowerCase().includes(searchkey)
        );
        this.setState({ posts: result });
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:8005/posts").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey);
            }
        });
    }

    handleDownloadPDF = () => {
        const input = document.getElementById('employee-list');
        html2canvas(input)
            .then((canvas) => {
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
                pdf.save('employee_list.pdf');
            });
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: "#e3f2fe" }}>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <p>All Employees List </p>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                        </input>
                    </div>
                    <div className="col-lg-12 mt-2 mb-2">
                        <button className="btn btn-primary" onClick={this.handleDownloadPDF}>Download PDF</button>
                    </div>
                </div>

                <table id="employee-list" className="table table-hover" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee_ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">jobRole</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{post.Employee_ID}</td>
                                <td>{post.Name}</td>
                                <td>{post.Email}</td>
                                <td>{post.jobRole}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

*/

