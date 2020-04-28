import React, { Component } from "react";
// import PropTypes from "prop-types";
import "../styles/searchContainers/searchContainer.scss";

class SearchContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.myRef = React.createRef();
    this.state = {
      searchText: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  filterSearchData(searchText) {
    let newArr = [],
      gamesArr = this.props.gamesData;

    for (let index = 0; index < gamesArr.length; index++) {
      // console.log("title:", gamesArr[index].title.toLowerCase());
      let title =
        gamesArr[index].title && gamesArr[index].title.length
          ? gamesArr[index].title.toLowerCase()
          : "";
      searchText = searchText.toLowerCase();
      if (title.search(searchText) !== -1) {
        newArr.push(gamesArr[index]);
      }
    }

    this.props.updateGameData(newArr);
  }

  updateSearch() {
    let searchText = this.myRef.current.value;

    searchText = searchText.trim();

    this.setState({
      searchText: searchText
    });

    if (searchText) {
      this.filterSearchData(searchText);
    } else {
    }
  }

  render() {
    return (
      <div className="main-search-container">
        <div className="search-games-container">
          <div className="search-field">
            <input
              className="search-input-box ibm"
              type="text"
              placeholder="Search Images"
              maxLength="200"
              ref={this.myRef}
            />
          </div>
          <button className="search-button ibm" onClick={this.updateSearch}>
            <span className="search-text roboto-normal">Search</span>
          </button>
        </div>
      </div>
    );
  }
}

// SearchContainer.PropTypes = {};

export default SearchContainer;
