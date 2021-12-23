import React, { useContext } from 'react';
import styled from 'styled-components';
import { TripContext } from './TripContext';

const Days = ({tripDays}) => {

const {tripPlan} = useContext(TripContext);

    let dayArr = [];

    for (let i=1; i < tripDays +1; i++) {
        dayArr.push("Day "+(i));
    }

    return (
        <>
        {dayArr.map((day, index) => {
            return (
        <MainDiv>
           <DayDiv>
               <h1>{day}</h1>
           </DayDiv>
           
           <ul>
               {tripPlan[index].map((venue)=>{
                   console.log(venue)           
                   return <Venue>{venue.name}</Venue>
               })}
           </ul>
       </MainDiv>
        )})}
        
       </>        
    );
};

const MainDiv=styled.div`
display: flex;
flex-direction:column;
min-height: 200px;
width: 350px;
margin-bottom: 25px;
margin-top: 25px;
`;

const DayDiv=styled.div`
display:flex;
align-items:center;
justify-content:center;
min-height: 50px;
border-radius:25px;
padding-bottom: 5px;
background-color: white;
box-shadow: 0px 5px 10px #888888;
`;

const Venue=styled.li`
display: flex;
background-color:white;
border-radius:25px;
justify-content:center;
align-items:center;
min-height:50px;
margin: 10px 0 10px;
`;
export default Days;