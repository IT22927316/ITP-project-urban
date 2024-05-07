import axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './EmployeeList.css'; // Import CSS file for custom styles

export default class Salaryreport extends Component {
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

    calculateTotalSalary = (basicSalary, otHours, otRate) => {
        return basicSalary + (otHours * otRate);
    }

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
                            <th scope="col">Select_month</th>
                            <th scope="col">Basic_Salary</th>
                            <th scope="col">OT_Hours</th>
                            <th scope="col">OT_Rate</th>
                            <th scope="col">Total_Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{post.Employee_ID}</td>
                                <td>{post.Select_month}</td>
                                <td>{post.Basic_Salary}</td>
                                <td>{post.OT_Hours}</td>
                                <td>{post.OT_Rate}</td>
                                <td>{this.calculateTotalSalary(post.Basic_Salary, post.OT_Hours, post.OT_Rate)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}