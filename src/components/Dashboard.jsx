// src/components/Dashboard.js
import React from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';
import TaskProgress from './TaskProgress';
import Leaderboard from './LeaderBoard';
import Meetings from './Meetings';

const DashboardContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Welcome = styled.div`
  grid-column: span 4;
  font-size: 2em;
  margin-bottom: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Welcome>Welcome Back, Eddy</Welcome>
      <TaskCard title="Open Deals" count="40,689" color="#3f51b5" />
      <TaskCard title="Untouched Deals" count="40,689" color="#ab47bc" />
      <TaskCard title="Calls Today" count="40,689" color="#e53935" />
      <TaskCard title="Leads" count="40,689" color="#1e88e5" />
      <TaskCard title="Total Client" count="10,250" subtitle="+20%" color="#81c784" />
      <TaskProgress />
      <TaskCard title="Today Pending Task" count="24" subtitle="Pending Task: 324" color="#ffb300" />
      <Leaderboard />
      <Meetings />
    </DashboardContainer>
  );
};

export default Dashboard;