import './App.css';   // it is possible by webpack.
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: [
        {
          id: 1,
          name: 'Pod akacjami',
          city: 'Warszawa',
          rating: '8.3',
          description: 'opis jakis jeszcze nie wiem jaki ale wkrótce się dowiem',
          image: ''
        },
        {
          id: 2,
          name: 'Dębowy',
          city: 'Lublin',
          rating: '8.8',
          description: 'opis jakis jeszcze nie wiem jaki ale wkrótce się dowiem',
          image: ''
        }
      ]
    }
  }
  render(){
    return (
        <div className="App">
          <Header />
          <Menu />
          <Hotels hotels={this.state.hotels} />
        </div>
    );
  }
}

export default App;
