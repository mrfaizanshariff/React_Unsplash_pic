import React from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onSearchBarSubmit = async (text) => {
    // console.log(text + " from App.js");
    //get request using axios
    const response = await unsplash.get("/search/photos", {
      params: { query: text },
    });

    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <ImageList image={this.state.images} />
      </div>
    );
  }
}
export default App;
