import React from "react";
import "./TrackList";
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        return (
            <div class="TrackList">
               {
                this.props.tracks.map(track => {
                    return <Track />
                } )
               } 
            </div>
        )
    }
}

export default TrackList
  