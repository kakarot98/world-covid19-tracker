import React from "react";

//import Cards from './components/Cards/Cards'
//import Chart from './components/Chart/Chart'
//import CountryPicker from './components/CountryPicker/CountryPicker'
//above way of importing files is too much code hence below is the simpler way

import { Cards, Chart, CountryPicker } from "./components";
import "./style.css";
import { fetchData } from "./api";

class App extends React.Component {
  //there are many ways to create a state but this one is simplest with least code
  //you can use constructor but its not needed
  state = {
    data: {},
    country: "",
    darkMode: false,
  };

  //put async keyword before componentdidmount as it is a built in function
  async componentDidMount() {
    const fetchedData = await fetchData(); //this will be await as well since we have to wait fir the data to be fetched
    this.setState({ data: fetchedData }); //set the state to the fetched data
    //console.log(fetechedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country, darkMode } = this.state;
    return (
      <div className={darkMode ? "dark" : "light"}>
        <nav className="navBar">
          <div className="toggle-container">
            <span className="label">LightMode</span>
            <label className="switch">
              <input
                onChange={() => this.setState({darkMode: !darkMode})}
                type="checkbox"
              />
              <span className="slider round" />
            </label>
            <span className="label">DarkMode</span>
          </div>
        </nav>
        <div className="container">
          <h1>COVID-19 TRACKER</h1>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
