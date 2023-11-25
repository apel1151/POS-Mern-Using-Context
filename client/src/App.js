import "antd/dist/reset.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Billspage from "./pages/Billspage";
import CartPage from "./pages/CartPage";
import CutomerPage from "./pages/CustomerPage";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
   return (
     <>
       <BrowserRouter>
         <Routes>
           <Route
             path="/"
             element={
               <ProtectedRoute>
                 <Homepage />
               </ProtectedRoute>
             }
           />
           <Route
             path="/bills"
             element={
               <ProtectedRoute>
                 <Billspage />
               </ProtectedRoute>
             }
           />
           <Route
             path="/items"
             element={
               <ProtectedRoute>
                 <ItemPage />
               </ProtectedRoute>
             }
           />
           <Route
             path="/cart"
             element={
               <ProtectedRoute>
                 <CartPage />
               </ProtectedRoute>
             }
           />
           <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <CutomerPage/>
              </ProtectedRoute>
            }
          />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
         </Routes>
       </BrowserRouter>
     </>
   );
 }
 
 export default App;
 
 export function ProtectedRoute({ children }) {
   if (localStorage.getItem("auth")) {
     return children;
   } else {
     return <Navigate to="/login" />;
   }
 }