import React from 'react';
import './github-page.css';
import GitHubProfile from '../git-hub-profile-list/github-profile';
const _ = require('lodash');


class GitHubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', userNameToSend: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.updateUrl = _.debounce(this.updateUrl, 500);

    }

    handleChange(event) {
        this.setState({ userName: event.target.value });
        this.updateUrl();
    }

    updateUrl() {
        this.setState({
            userNameToSend: this.state.userName
        });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.userName);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>GitHub Profile Viewer</h1>
                <div className='profile-view-container'>
                    {/* <form onSubmit={this.handleSubmit}> */}

                    <div className='search-user-name'>
                        GitHub Name
                        </div>
                    <input className="user-text-box" type="text" value={this.state.userName} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" />
                    </form> */}
                    <div className='profile-view-list'>
                        <GitHubProfile gitHubUserName={this.state.userNameToSend}></GitHubProfile>
                    </div>
                </div>
            </div>
        );
    }
}

export default GitHubPage;
