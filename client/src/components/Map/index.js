import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
    
            mapCenter: {
                lat: 29.7604,
                lng: -95.3698,
            }
        };
    };
 
  handleChange = address => {
    this.setState({ address });
  };
 
    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.setState({ address });
                this.setState({ mapCenter: latLng });
    })
      .catch(error => console.error('Error', error));
  };
 
  render() {
      return (
          <div id="googleMap">
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                    })}
                    />
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                        const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
              <Map
                style={{width: '100%', height: '59%', position: 'relative'}}
                zoom={15}
                google={this.props.google}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
                center={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
            >
                <Marker
                    position={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                    }}
                />
            </Map>
        </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBKaXO6WoUeXZ7KLv3qDT952hy4SLaLSgE")
})(MapContainer)