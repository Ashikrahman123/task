// src/components/TaskCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.color};
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Count = styled.p`
  font-size: 2em;
  margin: 5px 0;
`;

const Subtitle = styled.p`
  font-size: 1em;
  margin: 0;
`;

const TaskCard = ({ title, count, subtitle, color }) => {
  return (
    <Card color={color}>
      <Title>{title}</Title>
      <Count>{count}</Count>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Card>
  );
};

export default TaskCard;