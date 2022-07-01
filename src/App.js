import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// ============== Seção 2: React ( O Básico ) ==============

class App extends Component {
  constructor (props) {
    super(props)

    this.handleParagraphClicked = this.handleParagraphClicked.bind(this) // precisa quando se usa function declartion
    this.state = {
      name: 'Roger Santos',
      counter: null
    }
  }

  handleParagraphClicked () {
    if (this.state.name === 'Roger Santos') {
      this.setState({ name: 'Tudo bem?' })
      return
    }
    this.setState({ name: 'Roger Santos' })
  }

  handleLinkClicked = event => { // não precisa de bind, pois pega o this do escopo de onde ta declarada
    event.preventDefault()
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { name, counter } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleParagraphClicked}>Olá, {name} {counter}</p>
          <a 
            onClick={this.handleLinkClicked}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
