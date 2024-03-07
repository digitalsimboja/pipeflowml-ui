"use client";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react"
import Activity from "src/components/Activity";
import Sidebar from "src/components/Sidebar";

const Dashboard = () => {
    useLayoutEffect(() => {
        const isAuthenticated = localStorage.getItem("token");
        console.log(isAuthenticated)
        if (!isAuthenticated) {
            redirect("/login")
        }
    }, [])

    return (
        <Sidebar>
            <Activity />
            
        </Sidebar>
    )
}

export default Dashboard