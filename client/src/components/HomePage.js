import React from 'react';
import styled from 'styled-components';
import introImage from "../assets/TripTrack-Hook-Image.png";
import discovery from "../assets/discover-image.png";
import optimize from "../assets/optimized-route-image.png";
import personal from "../assets/personalized-choices-image.png";
import shared from "../assets/share-trip-image.png";
import {HiStar} from "react-icons/hi"
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <MainPageDiv>
            <ContentContainer>
            <IntroDiv>
                <BlurbDiv>

                    <TitleDiv>
                        <Title>TripTrack</Title>
                        <SubTitle>Make the most of your travels</SubTitle>
                    </TitleDiv>

                <DescriptionDiv>
                    <Blurb>TripTrack helps plan your next vacation for you! Simply input your preferences and TripTrack will recommend destinations tailored just for you!</Blurb>
                    <NavLink to="/trip"><Button>Get Started!</Button></NavLink>
                </DescriptionDiv>

                </BlurbDiv>
                <MapImageDiv>
                    <ImageIntro src={introImage} />
                </MapImageDiv>
            </IntroDiv>

            <FeaturesDiv>
            <div>
                <Feature>
                    <FeatureImg src={personal} />
                    <FeatureText>
                    <h1>Personalize Your Trip</h1>
                    </FeatureText>
                    <FeatureText>
                    <p>Make the most of your trip! TripTrack recommends destinations suited to your preferences!</p>
                    </FeatureText>
                </Feature>

                <Feature>
                    <FeatureImg src={optimize} />
                    <FeatureText>
                    <h1>Optimized Routes</h1>
                    </FeatureText>
                    <FeatureText>
                    <p>Time matters! We help plan your itinerary so you can make the most of each day!</p>
                    </FeatureText>
                </Feature>
            </div>
            <div>
                <Feature>
                    <FeatureImg src={discovery} />
                    <FeatureText>
                    <h1>Discover Something New</h1>
                    </FeatureText>
                    <FeatureText>
                    <p>Don't know where to get started? Check out trips other travelers planned using TripTrack!</p>
                    </FeatureText>
                </Feature>

                <Feature>
                    <FeatureImg src={shared} />
                    <FeatureText>
                    <h1>Share Your Trip</h1>
                    </FeatureText>
                    <FeatureText>
                    <p>Planning a group getaway? Work with your friends to build the best vacation yet!</p>
                    </FeatureText>
                </Feature>                          
            </div>
            </FeaturesDiv>

<StartDiv>
<NavLink to="/trip"><Button2>Start Planning!</Button2></NavLink>
</StartDiv>


            <PublicInfoDiv>

                <ReviewsDiv>
                    <ReviewContainerDiv>
                        <UserDiv>
                            <User>Tony R.</User>
                        </UserDiv>                     
                        <ReviewComment>
                            <p>Life changing. I go on vacations every year with my friends and we always have a tough time figuring out what we want to see. TripTrack made it so easy for us!</p>
                        </ReviewComment>

                        <ReviewStars>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        </ReviewStars>
                    </ReviewContainerDiv>

                    <ReviewContainerDiv>
                        <UserDiv>
                            <User>Susanna E.</User>
                        </UserDiv>
                        <ReviewComment>
                            <p>My husband and I used this for our last vacation to Paris. There was so much we wanted to do, TripTrack helped us organize the best possible route so we could see everything!</p>
                        </ReviewComment>

                        <ReviewStars>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        </ReviewStars>
                    </ReviewContainerDiv>

                    <ReviewContainerDiv>
                        <UserDiv>
                            <User>David M.</User>
                        </UserDiv>
                        <ReviewComment>
                            <p>I went to Japan last year to immerse myself in their culture. TripTrack helped me find all the local spots some guides won't tell you about! I had such an amazing trip and I owe it all to TripTrack!</p>
                        </ReviewComment>

                        <ReviewStars>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        </ReviewStars>
                    </ReviewContainerDiv>

                    <ReviewContainerDiv>
                        <UserDiv>
                            <User>Sarah B.</User>
                        </UserDiv>
                        <ReviewComment>
                            <p>Went down to New Orleans to visit some extended family, and TripTrack helped a ton! It recommended some awesome restaurants and clubs and even told me how best to get there! Will definitely be using TripTrack again!</p>
                        </ReviewComment>

                        <ReviewStars>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        <HiStar style={{color:"#FFD700"}} size={30}/>
                        </ReviewStars>
                    </ReviewContainerDiv>
                </ReviewsDiv>
            
                <PublicTripsDiv>
                </PublicTripsDiv>

            </PublicInfoDiv>

            
        </ContentContainer>

    </MainPageDiv>
</>
    );
};
const StartDiv=styled.div`
display: flex;
justify-content:center;
align-items:center;
width:100%;
height: 250px;
`;
const Button=styled.button`
background-color: var(--color-title-red);
color: white;
border:none;
border-radius: 25px;
width:75%;
font-size: 20px;
font-weight:bold;
height: 40px;
margin-top: 15px;
cursor:pointer;
`;
const Button2=styled.button`
background-color: var(--color-title-red);
color: white;
border:none;
border-radius: 50px;
max-width: 750px;
width:750px;
min-width: 150px;
font-size: 35px;
font-weight:bold;
height: 75px;
cursor:pointer;
`;
const UserDiv=styled.div`
display: flex;
font-size: 20px;
`;

const User=styled.h3`
font-size:22px;
`
const ReviewContainerDiv=styled.div`
display: flex;
flex-direction:column;
max-width: 300px;
border-radius: 10px;
padding: 25px;
min-height: 300px;
background-image: linear-gradient(var(--color-highlight-aqua),transparent);
justify-content: space-between;
`;
const ReviewComment=styled.div`
line-height: 1.2;
text-align:justify;
`;
const ReviewStars=styled.div``;

const ReviewsDiv=styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-evenly;
`;

const TitleDiv=styled.div`
display: flex;
width:100%;
flex-direction: column;
border-bottom: 4px solid var(--color-title-red);
align-items: flex-start;
padding-bottom: 10px;
`;

const FeatureText=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
line-height: 1.3;
width:100%;
padding-bottom: 10px;

`;

const Title=styled.h1`
font-size: 55px;
`;

const SubTitle=styled.h1`
font-size: 28px;
`;

const Blurb=styled.p`
font-size: 20px;
line-height: 1.2;
`;

const DescriptionDiv=styled.div`
display: flex;
flex-direction: column;
font-family: var(--font-heading);
padding-top: 10px;
`;

const FeatureImg=styled.img`
width:75%;
`;

const Feature=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 400px;
margin: 0 25px 0 0;
`;

const MainPageDiv=styled.div`
display:flex;
flex-direction: column;
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
align-items: center;
min-height: 650px;
`;

const BlurbDiv=styled.div`
display: flex;
flex-direction: column;
min-width: 500px;
justify-content: center;
align-items: flex-start;
text-align: justify;
`;

const MapImageDiv=styled.div`
display: flex;
`;

const FeaturesDiv=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex: wrap;
height: 33vh;
min-height: 900px;
`;

const PublicInfoDiv=styled.div`
display: flex;
justify-content: center;
align-items:center;
height:33vh;
min-height: 500px;
`;

const PublicTripsDiv=styled.div`
`;

const ImageIntro=styled.img`
max-height:250px;
`;

export default HomePage;