"use client";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import AgentLanding from "src/components/AgentLanding";
import Sidebar from "src/components/Sidebar";

const Dashboard = () => {
  useLayoutEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      redirect("/login");
    }
  }, []);

  return (
    <Sidebar>
      <AgentLanding />
    </Sidebar>
  );
};

export default Dashboard;
