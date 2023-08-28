import React from "react";

const Dashboard = ({ userName }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {userName}!</h2>
      <p>Your e-learning dashboard</p>
    </div>
  );
};

export default Dashboard;