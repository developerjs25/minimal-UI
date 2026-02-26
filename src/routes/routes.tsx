import Layout from "../layout";
import Dashboard from "../pages/dashboard";
// import UserList from "../src/pages/users/";
import Profile from "../pages/users/profile"; 
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "../pages/products/list";
import EditProduct from "../pages/products/edit";
import ProductDetails from "../pages/products/details";
import AddUser from "../pages/users/adduser";
import UserList from "../pages/users/userlist";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/adduser" element={<AddUser/>} />
        <Route path="/user/userlist" element={<UserList />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;