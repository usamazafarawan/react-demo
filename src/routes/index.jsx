import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
// import Layout from "../layout/Index";
// import Customer from "../pages/Customer";
// import Dashboard from "../pages/dashboard/Index";
// import Clients from "../pages/clients/Index";
// import Invoices from "../pages/invoices/Index";
// import AddClient from "../pages/clients/AddClient";
// import AddInvoice from "../pages/invoices/AddInvoice";
// import InvoiceDetails from "../pages/invoices/InvoiceDetails";
// import Career from "../pages/Career";
// import Assignment from "../pages/Assignment";
// import AddAssignments from "../pages/Assignment/AddAssignments";
// import Resources from "../pages/Resources";
// import Notes from "../pages/Notes";
// import AddNotes from "../pages/Notes/AddNotes";
// import Books from "../pages/Books";
// import AddBooks from "../pages/Books/AddBooks";
// import ComingSoon from "../pages/Learning/ComingSoon";
// import Login from "../pages/login";
// import BlogPost from "../pages/BlogPost";
// import AddBlog from "../pages/BlogPost/AddBlog";
// import AllConsultant from "../pages/MainPage/AllConsultant";
// import Navbars from "../pages/MainPage/Navbars";
// import Footer from "../pages/MainPage/Footer";
 import Navbar from "../pages/MainPage/Navbar";
// import SingleConsultant from "../pages/MainPage/SingleCpnsultant";
// import SignUp from "../pages/signup";
// import Forget from "../pages/Forget";
// import Forget from "../pages/Forget";
const Routers = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
