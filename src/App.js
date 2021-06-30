import './App.css';   // it is possible by webpack.
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import { Component } from 'react';

class App extends Component {
    hotels = [
      {
        id: 1,
        name: 'Pod akacjami',
        city: 'Warszawa',
        rating: 8.3,
        description: 'opis jakis jeszcze nie wiem jaki ale wkrótce się dowiem',
        image: ''
      },
      {
        id: 2,
        name: 'Dębowy',
        city: 'Lublin',
        rating: 8.8,
        description: 'opis jakis jeszcze nie wiem jaki ale wkrótce się dowiem',
        image: ''
      }
    ];
    state = {
      hotels: this.hotels,
      loading: true
    }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false
      });
    }, 1000);
  }

  searchHandler(term) {
    const hotels = [...this.hotels]
      .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  render(){
    return (
        <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)}/>
        <Menu />
        {this.state.loading
          ? <LoadingIcon />
          : <Hotels hotels={this.state.hotels} />
        }
        </div>
    );
  }
}

export default App;
