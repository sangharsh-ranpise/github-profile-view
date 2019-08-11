import React from 'react';
import './App.css';
import GitHubPage from './component/git-hub-page/github-page';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { userName: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ userName: event.target.value });
  // }

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.userName);
  //   event.preventDefault();
  // }

  render() {
    return (
      <GitHubPage></GitHubPage>
    );
  }
}

export default App;
