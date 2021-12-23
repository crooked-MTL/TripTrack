import React, { useContext, useEffect, useState } from 'react';
import { TripContext } from './TripContext';
import styled from 'styled-components';

const Profile = () => {
    // const {user, isAuthenticated, isLoading} = useAuth0();
    const [allTrip, setAllTrip] = useState(null);

const {currentUser} = useContext(TripContext)

    
useEffect(()=>{
    fetch(`/myTrips`, {
        method: "POST",
      body: JSON.stringify({TripsArr: currentUser?.tripPlans}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((TripData) => {
        console.log(TripData.data);
        setAllTrip(TripData.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
},[currentUser])

    if (!currentUser) {
        return <div><p>Loading...</p></div>
    }

    console.log(currentUser)
    return (
        currentUser && (
        <MainDiv>
            <MainContainer>
                <UserInfoDiv>
                        <img src={currentUser.user.picture} alt={currentUser.user.name} />
                    <UserDataDiv>
                        <h1>Welcome {currentUser.user.name}!</h1>
                    </UserDataDiv>
                </UserInfoDiv>
            <AllTripsContainerDiv>
                {allTrip && allTrip.map((trip, index)=>{
                    console.log(trip)
                    return (
                        <>
                        <TripNumberDiv><h2>Trip {index +1}</h2></TripNumberDiv>
                        <TripDaysDiv>
                            {trip.trip.map((day, index)=>{
                            return (
                                    <>
                                    <EachDayDiv><h1 style={{fontSize:'25px'}}>Day {index +1}</h1></EachDayDiv>
                                    {day.map((venue)=> {
                                        console.log(venue);
                                        return (<>
                                        <EachVenueDiv>
                                            <EachVenue>
                                                <li>{venue.name}</li>
                                                <li>{venue.vicinity}</li>
                                                {venue.rating && <li>{venue.rating} / 5 Rating!</li>}
                                            </EachVenue>
                                        </EachVenueDiv>
                                        </>)
                                    })}
                                    </>
                                )
                            })}
                        </TripDaysDiv>
                        </>
                    )
                })}
            </AllTripsContainerDiv>
            </MainContainer>
        </MainDiv>
    ));
};
const MainDiv=styled.div`
display: flex;
min-height:100vh;
width:100%;
justify-content:center;
`;
const MainContainer=styled.div`
display: flex;
flex-direction:column;
padding-top: 50px;
min-width: 50%;
`;
const UserInfoDiv=styled.div`
display: flex;
`;
const AllTripsContainerDiv=styled.div`
`;
const TripNumberDiv=styled.div`
margin-top: 50px;
`;
const TripDaysDiv=styled.div`
`;
const EachDayDiv=styled.div`
display:flex;
`;
const EachVenueDiv=styled.div`
display: flex;
flex-direction:column;
margin: 15px 0 15px;
`;
const EachVenue=styled.ol`
box-shadow:0px 5px 5px #888888;
padding: 15px;
`;
const UserDataDiv=styled.div`
display: flex;
flex-direction:row;
width:100%;
justify-content:flex-start;
align-items:center;
margin-left: 50px;

`;
export default Profile;