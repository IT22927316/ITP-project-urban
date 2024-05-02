import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Articleshub from "../articleshub/Articleshub";
import About from "../components/About";
import SingleArticle from "../articleshub/SingleArticle";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadArticle from "../dashboard/UploadArticle";
import ManageArticles from "../dashboard/ManageArticles";
import EditArticles from "../dashboard/EditArticles";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Eventshub from "../eventshub/Eventshub";
import SingleEvent from "../eventshub/SingleEvent";
import ReviewPage from "../reviewforms/ReviewPage";
import UploadReview from "../reviewforms/UploadReview";
import ManageReviews from "../dashboard/ManageReviews";
import ShopPage from "../inventoryshop/ShopPage";
import CommunityMain from "../communityhub/CommunityMain";
import SingleCommunity from "../communityhub/SingleCommunity";
import SingleItem from "../inventoryshop/SingleItem";
import MyCart from "../inventoryshop/MyCart";
import ManageEvent from "../dashboard/ManageEvent";
import StartupPage from "../components/StartupPage";
import EditEvent from "../dashboard/EditEvent";
import UploadEvent from "../dashboard/UploadEvent";
import UserProfile from "../components/UserProfile";
import ManageUsers from "../dashboard/ManageUsers";
import StudentProjects from "../articleshub/StudentProjects";
import SingleProject from "../articleshub/SingleProject";
import AddStudentProject from "../articleshub/AddStudentProject";
import QnAsection from "../articleshub/QnAsection";
import UploadQuestion from "../articleshub/UploadQuestion";
import UploadAnswer from "../dashboard/UploadAnswer";
import ManageQuestions from "../dashboard/ManageQuestions";
import ProvideAnswer from "../dashboard/ProvideAnswer";
import ManageStudentProjects from "../dashboard/ManageStudentProjects";
import EditAnswers from "../dashboard/EditAnswers";
import ManageQnA from "../dashboard/ManageQnA";
import PaymentDashboard from "../Payment/PaymentDashboard";
import Checkout from "../Payment/Checkout";
import PaymentSuccess from "../Payment/PaymentSuccess";
import ProductCreate from "../Payment/ProductCreate";
import ProductViewPage from "../Payment/Product";
import ProductUpdate from "../Payment/productUpdate";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: "/articleshub",
            element: <Articleshub/>
        },
        
        {
            path: "/studentprojects",
            element: <StudentProjects/>
        },
        {
            path: "/events",
            element: <Eventshub/>
        },
        {
            path: "/reviewpage",
            element: <ReviewPage/>
        },
        {
            path: "/communitymain",
            element: <CommunityMain/>
        },
        {
            path: "/shop",
            element: <ShopPage/>
        },
        {
            path: "/userprofile",
            element: <UserProfile />,
        },
        {
            path: "/uploadproject",
            element: <AddStudentProject/>
        },
        {
            path: "/qnasection",
            element: <QnAsection/>
        },
        {
            path: "/uploadreview",
            element: <UploadReview/>
        },
        {
            path: "/uploadquestion",
            element: <UploadQuestion/>
        },
        {
            path: "/mycart",
            element: <MyCart/>
        },
        {
            path: "/article/:id",
            element: <SingleArticle/>,
            loader: ({params}) => fetch(`http://localhost:5000/article/${params.id}`)
        },
        {
            path: "/studentproject/:id",
            element: <SingleProject/>,
            loader: ({params}) => fetch(`http://localhost:5000/studentproject/${params.id}`)
        },
        {
            path: "/event/:id",
            element: <SingleEvent/>,
            loader: ({params}) => fetch(`http://localhost:5000/event/${params.id}`)
        },
        {
            path: "/communityform/:id",
            element: <SingleCommunity/>,
            loader: ({params}) => fetch(`http://localhost:5000/communityform/${params.id}`)
        },
        {
            path: "/inventoryitem/:id",
            element: <SingleItem/>,
            loader: ({params}) => fetch(`http://localhost:5000/inventoryitem/${params.id}`)
        }
      ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/admin/dashboard/upload-articles",
                element: <UploadArticle/>
            },
            {
                path: "/admin/dashboard/manage-articles",
                element: <ManageArticles/>
            },
            {
                path: "/admin/dashboard/manage-studentprojects",
                element: <ManageStudentProjects/>
            },
            {
                path: "/admin/dashboard/edit-articles/:id",
                element: <EditArticles/>,
                loader: ({params}) => fetch(`http://localhost:5000/article/${params.id}`)
            },
            {
                path: "/admin/dashboard/edit-answers/:id",
                element: <EditAnswers/>,
                loader: ({params}) => fetch(`http://localhost:5000/answer/${params.id}`)
            },
            {
                path: "/admin/dashboard/upload-events",
                element: <UploadEvent/>
            },
            
            {
                path:"/admin/dashboard/manage-event",
                element: <ManageEvent/>
            },
            {
                path: "/admin/dashboard/manage-question",
                element: <ManageQnA/>
            },
            {
                path: "/admin/dashboard/answer-question/:id",
                element: <ProvideAnswer/>,
                loader: ({params}) => fetch(`http://localhost:5000/question/${params.id}`)
            },
            {
                path: "/admin/dashboard/edit-events/:id",
                element: <EditEvent/>,
                loader: ({params}) => fetch(`http://localhost:5000/event/${params.id}`)
            },
            {
                path: "/admin/dashboard/manage-reviews",
                element: <ManageReviews/>
            },
            {
                path: "/admin/dashboard/manage-users",
                element: <ManageUsers/>
            },
            {
                path: "/admin/dashboard/payment-dashboard",
                element: <PaymentDashboard/>
            },
            {
                path: "/admin/dashboard/checkout",
                element: <Checkout/>
            },
            {
                path: "/admin/dashboard/PaymentSuccess",
                element: <PaymentSuccess/>
            },
            {
                path: "/admin/dashboard/product-create",
                element: <ProductCreate/>
            },
            {
                path: "/admin/dashboard/product-view",
                element: <ProductViewPage/>
            },
            {
                path: "/admin/dashboard/product-update",
                element: <ProductUpdate/>
            }
            
        ]
    },
    {
        path: "/startup",
        element: <StartupPage/>
    },
    {
        path: "startup/sign-up", 
        element: <Signup/>
    },
    {
        path: "startup/login",
        element: <Login/>
    },
    {
        path: "/logout",
        element: <Logout/>
    }
  ]);

  export default router;