import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={

      issues:[]

    }
  }

  componentDidMount(){

   const data = fetch(
     'https://api.github.com/repos/rails/rails/issues?state=open&sort=comments'
  ).then ( response => {
    if (response.ok) {
      return response.json()
    }
    })
    data.then((d) => {
      //Resolves the promise

      this.setState({
        issues: d
      })
    })
  }

  render() {

    const issues = this.state.issues && Object.keys(this.state.issues).map( (key)=> {

      const issue = this.state.issues[key];
      return(
        <div key={key}>{issue.title}</div>
      )

    })

    return (
      <div className="App">
      {issues}
      </div>
    );
  }
}

export default App;

//https://api.github.com/repos/rails/rails/issues?state=open&sort=comments