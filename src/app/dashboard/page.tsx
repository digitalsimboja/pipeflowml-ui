"use client";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react"
import Sidebar from "src/components/Sidebar";

const Dashboard = () => {
    // useLayoutEffect(() => {
    //     const isAuthenticated = localStorage.getItem("token");
    //     console.log(isAuthenticated)
    //     if (!isAuthenticated) {
    //         redirect("/login")
    //     }
    // }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            <div className="md:col-span-1">
                <Sidebar />
            </div>
            
        </div>
    )
}

export default Dashboard