import React from 'react';
import styled from 'styled-components';
import introImage from "../assets/TripTrack-Hook-Image.png";
import discovery from "../assets/discover-image.png";
import optimize from "../assets/optimized-route-image.png";
import personal from "../assets/personalized-choices-image.png";
import shared from "../assets/share-trip-image.png";

const HomePage = () => {
    return (
        <>
        <MainPageDiv>
            <ContentContainer>
            <IntroDiv>
                <BlurbDiv>
                    <div>
                <h1>TripTrack</h1>
                <p>Make the most of your travels</p>
                </div>
                <div>
                    <p>TripTrack helps plan your next vacation for you! Simply input your preferences and TripTrack will recommend destinations tailored just for you!</p>
                </div>
                </BlurbDiv>
                <MapImageDiv>
                    <ImageIntro src={introImage} />
                </MapImageDiv>
            </IntroDiv>

            <FeaturesDiv>

                <Feature>
                    <FeatureImg src={discovery} />
                    <h1>Discover Something New</h1>
                    <p>Don't know where to get started? Check out trips other travelers planned using TripTrack!</p>
                </Feature>

                <Feature>
                    <FeatureImg src={optimize} />
                    <h1>Optimized Routes</h1>
                    <p>Time matters! we help plan your itinerary so you can make the most of each day!</p>
                </Feature>

                <Feature>
                    <FeatureImg src={personal} />
                    <h1>Personalized Recommendations</h1>
                    <p>Make the most of your trip! TripTrack recommends destinations suited to your preferences!</p>
                </Feature>

                <Feature>
                    <FeatureImg src={shared} />
                    <h1>Share Your Trip</h1>
                    <p>Planning a group getaway? Work with your friends to build the best vacation yet!</p>
                </Feature>                          
                            
            </FeaturesDiv>

            <PublicInfoDiv>
                <ReviewsDiv>

                </ReviewsDiv>
                <PublicTripsDiv>

                </PublicTripsDiv>
            </PublicInfoDiv>
            </ContentContainer>
        </MainPageDiv>
        </>
    );
};
const FeatureImg=styled.img`
width:75%;
`;
const Feature=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 400px;
margin: 0 10px 0 0;
`;
const MainPageDiv=styled.div`
display:flex;
flex-direction: column;
border: 2px solid black;
align-items:center;
`;
const ContentContainer=styled.div`
display: flex;
flex-direction: column;
max-width:1250px;
min-width: 1250px;
`;
const IntroDiv=styled.div`
display: flex;
flex-direction: row;
height: 33vh;
min-height: 250px;
`;
const BlurbDiv=styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
justify-content: center;
align-items: center;
text-align: justify;
`;
const MapImageDiv=styled.div`
display: flex;
`;
const FeaturesDiv=styled.div`
display: flex;
justify-content: center;
flex: wrap;
height: 33vh;
`;
const PublicInfoDiv=styled.div`
height:33vh;
`;
const ReviewsDiv=styled.div`
`;
const PublicTripsDiv=styled.div`
`;
const ImageIntro=styled.img`
min-height:100%;
`;
export default HomePage;