import React from 'react';
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";

const AddressBar = ({panToAddress}) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        requestOptions: {
          location:{lat:()=>50, lng:()=>-100}, radius:25*1000
        },
        debounce: 300,
      });

    
      const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
      };
    
      const handleSelect =
        ({ description }) =>
        () => {
          // When user selects a place, we can replace the keyword without request data from API
          // by setting the second parameter to "false"
          setValue(description, false);
          clearSuggestions();
    
          // Get latitude and longitude via utility functions
          getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
              console.log("📍 Coordinates: ", { lat, lng });
              panToAddress({lat,lng});
            })
            .catch((error) => {
              console.log("😱 Error: ", error);
            });
        };
    
      const renderSuggestions = () =>
        data.map((suggestion) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
          return (
            <li key={place_id} onClick={handleSelect(suggestion)} style={{ backgroundColor:"white",zIndex:15, width:"316px",}}>
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
          );
        });
    
      return (
        <div style={{position:"relative", zIndex:2}}>
          <input
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Enter Address"
          />
          {/* We can use the "status" to decide whether we should display the dropdown or not */}
          {status === "OK" && <ul style={{position:"absolute", zIndex:2}}>{renderSuggestions()}</ul>}
        </div>
      );
    };



export default AddressBar;