import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";
import mapStyles from "./MapStyle";
import SearchBar from "./SearchBar";
import AddressBar from "./AddressBar.js";
import Days from "./Days";
import { TripContext } from "./TripContext";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};

const options = {
  styles: mapStyles,
  disabledDefaultUI: true,
  zoomControl: true,
};

const circleOptions = {
  strokeColor: "transparent",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#B3B3B3",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
};

const distances = [1, 2, 3, 4, 5, 10, 15, 20];

const PlanningPage = () => {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [finishDate, setFinishDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [latitude, setLat] = useState(50);
  const [longitude, setLng] = useState(-100);
  const [zoom, setZoom] = useState(4);
  const [circle, setCircle] = useState(false);
  const [radius, setRadius] = useState(null);
  const [tripDays, setTripDays] = useState(null);
  const [results, setResults] = useState([]);
  const [venueInfo, setVenueInfo] = useState(null);
  const [type, setType] = useState(null);

  const { tripPlan, setTripPlan, currentUser } = useContext(TripContext);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };
console.log(type)
  const dayDiff = (a, b) => {
    let newArr = [];

    const date1 = parseDate(a);
    const date2 = parseDate(b);
    console.log(date1);
    console.log(date2);
    const diff =
      Math.floor(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    console.log(diff);
    setTripDays(diff);
    for (let i = 1; i < diff + 1; i++) {
      newArr.push([]);
    }
    setTripPlan(newArr);
  };

  const toggleStartDate = (event) => {
    setStartDate(event.target.value);
    dayDiff(event.target.value, finishDate);
  };
  const toggleEndDate = (event) => {
    setFinishDate(event.target.value);
    dayDiff(startDate, event.target.value);
  };

  const panTo = (event,{ lat, lng }) => {
    setLat(lat);
    setLng(lng);
    setZoom(10);
  };
  const panToAddress = ({ lat, lng }) => {
    setLat(lat);
    setLng(lng);
    setZoom(14);
    setCircle(!circle);
  };

  const handleInfo = (result) => {
    setVenueInfo(result);
  };

  console.log(currentUser)
  const handleSubmitTrip = () => {
    fetch(`/addTrip/${currentUser?._id}`, {
      method: "PATCH",
      body: JSON.stringify({ trip: tripPlan }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSelect = (index) => {
    let copy = [...tripPlan];
    console.log(index);

    copy[index].push(venueInfo);

    setTripPlan(copy);
  };

const types = ['airport', 'amusement_park', 'art_gallery', 'restaurants', 'museum','night_club','church', 'shopping_mall','spa','tourist_attraction','zoo']

  useEffect(() => {
    fetch("/trip", {
      method: "POST",
      body: JSON.stringify({ latitude, longitude, radius, type}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((placesData) => {
        console.log(placesData);
        console.log(type)
        setResults(placesData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [radius, type]);

  if (loadError) {
    return "Error loading maps";
  }

  if (!isLoaded) {
    return "Loading Maps...";
  }

  console.log(startDate);
  console.log(finishDate);
  console.log(tripDays);
  console.log(results, "result hook string");
  console.log(tripPlan);
  return (
    <>
      <MainDiv>
        <PrefDiv>
<FilterDiv>
            <Filter onChange={(e)=>{setType(e.target.value)}} style={{ width: "100%", height: "40px", border: "none" }}><option>Choose A Venue</option>
                {types.map((type)=>{
                    console.log(type)
                    return <option value={type}>{type}</option>
                })}
            </Filter>
    </FilterDiv>
          <DaysDiv>
            <Days tripDays={tripDays} />
          </DaysDiv>

          <button
            onClick={() => {
              handleSubmitTrip();
            }}
          >
            Save Your Trip!
          </button>

        </PrefDiv>
        <UserInfoContainer>
          <UserInfoDiv>
            <SearchBar panTo={panTo} />

            <input
              type="date"
              value={startDate}
              style={{ fontSize: "18px" }}
              onChange={toggleStartDate}
            ></input>

            <input
              type="date"
              value={finishDate}
              style={{ fontSize: "18px" }}
              onChange={toggleEndDate}
            ></input>

            <AddressBar panToAddress={panToAddress} />

            <div>
              <select
                onChange={(e) => {
                  setRadius(e.target.value);
                }}
                style={{ width: "150px", height: "40px", border: "none" }}
              >
                <option>Radius in KM</option>
                {distances.map((distance) => {
                  return <option>{distance}</option>;
                })}
              </select>
            </div>
          </UserInfoDiv>
          <MapDiv>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={zoom}
              center={{ lat: latitude, lng: longitude }}
              options={options}
              onLoad={onMapLoad}
            >
              {results == []
                ? console.log("issue")
                : results.map((result) => {
                    console.log(results, "123");
                    return (
                      <Marker
                        position={{
                          lat: Number(result?.geometry?.location?.lat),
                          lng: Number(result?.geometry?.location?.lng),
                        }}
                        onClick={() => {
                          handleInfo(result);
                        }}
                      />
                    );
                  })}
              {venueInfo && (
                <InfoWindow
                  position={{
                    lat: Number(venueInfo.geometry.location.lat),
                    lng: Number(venueInfo.geometry.location.lng),
                  }}
                  onCloseClick={() => {
                    setVenueInfo(null);
                  }}
                >
                  <div>
                      <div>{venueInfo.name} </div>
                      <div>{venueInfo.vicinity}</div>
                    <div>{venueInfo.rating &&  <p>{venueInfo.rating}/ 5 Rating</p>} </div>
                    
                    <div>
                      <select
                        onChange={(e) => {
                          handleSelect(e.target.value);
                        }}
                      >
                        {" "}
                        <option>Choose Day</option>
                        {tripPlan.map((day, index) => {
                          // let info = {venue: venueInfo, index: index}
                          return (
                            <option value={index} id={index}>
                              Day {index + 1}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </InfoWindow>
              )}
              <Circle
                center={{ lat: latitude, lng: longitude }}
                radius={radius * 1000}
                options={circleOptions}
                visible={circle}
              />
            </GoogleMap>
          </MapDiv>
        </UserInfoContainer>
      </MainDiv>
    </>
  );
};
const FilterDiv=styled.div`
display: flex;
width:100%;
align-items:center;
justify-content:center;
`;
const Filter=styled.select`
text-align:center;
font-size: 18px;
font-weight:bold;
margin-top:25px;
`;
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-width: 100vw;
  position: relative;
`;
const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 75px;
  position: relative;
  border-bottom: 4px solid var(--color-banner-blue);
`;
const MapDiv = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;
const PrefDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 400px;
  align-items: center;
  overflow-y: scroll;
  justify-content:space-between;
`;

const DaysDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: bottom;
`;

export default PlanningPage;
