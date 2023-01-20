import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    capital: 'India',
  }

  changeCountry = event => {
    // console.log(event.target.value)
    const getCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    // console.log(getCountry)

    const [countryObj] = getCountry
    // console.log(countryObj.country)
    this.setState({capital: countryObj.country})
  }

  render() {
    const {capital} = this.state
    return (
      <div className="bg-container">
        <div className="main-card">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="dropdown-box">
            <select
              onChange={this.changeCountry}
              className="dropdown-select-menu"
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-text">is capital of which country?</p>
          </div>
          <p className="display-capitols">{capital}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
