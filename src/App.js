import './App.css';
import { Component } from 'react';

// ============== Seção 2: React ( O Básico ) ==============

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(this.updateClock, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  updateClock = () => {
    this.setState({ date: new Date() })
  }

  render() {
    const { date } = this.state

    return (
      <div>
        <h1>Hello, World</h1>
        <p>It is {date.toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
