// src/components/Leaderboard.js
import React from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  background-color: #f0f4f8;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Leader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Leaderboard = () => {
  return (
    <LeaderboardContainer>
      <h3>Top Leaders</h3>
      <Leader>
        <span>Sarah Martins</span>
        <span>50,000</span>
      </Leader>
      <Leader>
        <span>Nimi Martins</span>
        <span>2,300</span>
      </Leader>
      <Leader>
        <span>Yomi Ndu</span>
        <span>2,300</span>
      </Leader>
      <Leader>
        <span>Akin Siyanbola</span>
        <span>2,300</span>
      </Leader>
    </LeaderboardContainer>
  );
};

export default Leaderboard;