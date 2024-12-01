import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onClickArrow} = props
  const {suggestion} = suggestionItem
  const arrowClicked = () => onClickArrow(suggestion)

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestionItem.suggestion}</p>
      <button type="button" className="arrow-btn" onClick={arrowClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
