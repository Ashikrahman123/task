// src/components/TaskProgress.js
import React from 'react';
import styled from 'styled-components';

const ProgressCard = styled.div`
  background-color: #2196f3;
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  grid-column: span 2;
`;

const Title = styled.h3`
  margin: 0;
`;

// Adjusted styling for oval-shaped progress circle
const ProgressCircle = styled.div`
  margin: 10px 0;
  width: 120px; /* Increased width to create oval shape */
  height: 1500px; /* Decreased height to create oval shape */
  border-radius: 50%;
  border: 10px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const TaskInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TaskProgress = () => {
  return (
    <ProgressCard>
      <Title>Task Progress</Title>
      <ProgressCircle>72%</ProgressCircle>
      <TaskInfo>
        <div>
          <p>Project Completed</p>
          <p>10 of 30</p>
        </div>
        <div>
          <p>Project Hold</p>
          <p>3 of 10</p>
        </div>
      </TaskInfo>
    </ProgressCard>
  );
};

export default TaskProgress;