import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updatedSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-suggestions-section">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-bar"
              onChange={this.updatedSearchInput}
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <ul className="suggestions-list">
            {searchResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionItem={eachItem}
                onClickArrow={this.onClickArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
