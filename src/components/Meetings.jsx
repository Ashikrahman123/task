// src/components/Meetings.js
import React from 'react';
import styled from 'styled-components';

const MeetingsContainer = styled.div`
  background-color: #edf2f7;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  grid-column: span 4;
`;

const MeetingCard = styled.div`
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MeetingTitle = styled.h4`
  margin: 0;
`;

const MeetingDetails = styled.p`
  margin: 5px 0;
`;

const Meetings = () => {
  return (
    <MeetingsContainer>
      <MeetingCard>
        <MeetingTitle>Business Development Discussion</MeetingTitle>
        <MeetingDetails>10:00 AM - 4:30 PM, New York, USA</MeetingDetails>
      </MeetingCard>
      <MeetingCard>
        <MeetingTitle>Business Development Discussion</MeetingTitle>
        <MeetingDetails>10:00 AM - 4:30 PM, New York, USA</MeetingDetails>
      </MeetingCard>
      <MeetingCard>
        <MeetingTitle>Business Development Discussion</MeetingTitle>
        <MeetingDetails>10:00 AM - 4:30 PM, New York, USA</MeetingDetails>
      </MeetingCard>
      <MeetingCard>
        <MeetingTitle>Business Development Discussion</MeetingTitle>
        <MeetingDetails>10:00 AM - 4:30 PM, New York, USA</MeetingDetails>
      </MeetingCard>
    </MeetingsContainer>
  );
};

export default Meetings;