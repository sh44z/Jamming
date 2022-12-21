import React from "react";
import "./SearchResults.css"
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render() {
return (
        <div default="SearchResults">
  <h2>Results</h2>
 <TrackList tracks={this.props.SearchResults} />
    </div>)
    }
}

export default SearchResults