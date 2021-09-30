import React from "react";

class SearchBar extends React.Component {
  state = {
    text: "",
  };
  // onInputChange(event) {
  //   this.setState({ text: event.target.value });
  //   console.log(this.state.text);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.text);
    this.props.onSubmit(this.state.text);
  };
  render() {
    return (
      <div className="ui segement">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label> Image Search </label>
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
