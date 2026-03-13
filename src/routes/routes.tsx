import Layout from "../layout";
import Dashboard from "../pages/dashboard";
// import UserList from "../src/pages/users/";
import Profile from "../pages/users/profile"; 
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "../pages/products/list";
import EditProduct from "../pages/products/edit";
import ProductDetails from "../pages/products/details";
import EditUser from "../pages/users/edituser";
import List from "../pages/users/list";
import CreateUser from "../pages/users/create";
import Notification from "../pages/notification";
import CreateProduct from "../pages/products/create";
import ViewUser from "../pages/users/view";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/edit/:id" element={<EditUser/>} />
        <Route path="/user/create" element={<CreateUser/>} />
        <Route path="/user/list" element={<List />} />
        <Route path="/user/view/:id" element={<ViewUser />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;