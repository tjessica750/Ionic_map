import {Map ,GoogleApiWrapper, Marker} from "google-maps-react"
import React from "react";

export class MapContainer extends React.Component {

    componentDidMount(){

    }

    render() {
        const containerStyle = { 
            width: '100%',
            height: '100%'
        }
        return(
            <Map 
                google={this.props.google} 
                zoom={14} 
                containerStyle={containerStyle}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current Location'} />
                
            </Map>
        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: ('AIzaSyAcW191qRfL43wIU0uqzMB-lBFjYepUCko')
    })
    
)(MapContainer)

