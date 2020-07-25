import React from "react";

//import Cards from './components/Cards/Cards'
//import Chart from './components/Chart/Chart'
//import CountryPicker from './components/CountryPicker/CountryPicker'
//above way of importing files is too much code hence below is the simpler way

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  //there are many ways to create a state but this one is simplest with least code
  //you can use constructor but its not needed
  state = {
    data: {},
  };

  //put async keyword before componentdidmount as it is a built in function
  async componentDidMount() {
    const fetchedData = await fetchData(); //this will be await as well since we have to wait fir the data to be fetched
    this.setState({ data: fetchedData }); //set the state to the fetched data
    //console.log(fetechedData);
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>App Heading</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
