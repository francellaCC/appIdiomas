import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";


export default function Router(){

  return(
    <BrowserRouter>

      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>} index/>
        </Route>
        <Route>
          <Route path="/auth/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}