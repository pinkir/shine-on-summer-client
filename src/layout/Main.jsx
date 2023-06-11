import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {
    const [theme, setTheme] = useState("light");
    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }

    },[theme])

    const handleTheme =()=>{
        setTheme(theme === "dark"? "light" : "dark")
    }
    return (
        <div className="dark:bg-slate-800">
            <Navber handleTheme={handleTheme}></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;