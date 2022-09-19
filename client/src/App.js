import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    dispensed: []
  };

  componentDidMount = () => {
    this.getDispensedData();
  };


  getDispensedData = () => {
    axios.get('/get')
      .then((response) => {
        const data = response.data;
        this.setState({ dispensed: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        console.log('Error retrieving data!!!');
      });
  }

  displayDispensedData = (dispensed) => {

    if (!dispensed.length) return null;

    return dispensed.map((dispensed, index) => (
      <div key={index} className="data_display">
        <p>Time: {dispensed.time}, Distance: {dispensed.distance}, Amount: {dispensed.amount}</p>
      </div>
    ));
  };
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>You have reached the Web App for the Mobile Sanitization Station</p>
          <p>Team Austrlian 6 is the best!</p>
          <p>Here is some sample data that isn't very well formatted: </p>
          <div className="dispensedData">
            {this.displayDispensedData(this.state.dispensed)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
