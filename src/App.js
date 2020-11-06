import React, { Component } from 'react';

import Cards from './components/cards/cards';
import CountryPicker from './components/countryPicker/countryPicker';
import Chart from './components/chart/chart';
import Style from './App.module.css';
import { fetchData } from './api';
import coronaIagme from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetData = await fetchData();
    this.setState({ data: fetData });
  }
  handleCountryChange = async (country) => {
    const fetData = await fetchData(country);
    this.setState({ data: fetData, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={Style.container}>
        <img className={Style.Img} src={coronaIagme} alt='Covide-19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart dataCountry={data} country={country} />
      </div>
    );
  }
}

export default App;
