
import React from 'react';
import './github-profile.css';


import axios from 'axios';


let showMore = [];
class GitHubProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitHubUsers: [],
            extraDetails: []
        }
    }

    componentDidMount() {
        this.fetchGitHubData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gitHubUserName !== this.props.gitHubUserName) {
            this.fetchGitHubData(this.props.gitHubUserName ? this.props.gitHubUserName : 'a');
        }
    }
    async fetchExtraDetailUser(gitHubUserName) {
        return await axios.get("https://api.github.com/users/" + gitHubUserName + "/repos");
    }

    async fetchGitHubData(gitHubUserName = 'a') {
        try {
            const result = await axios.get(`https://api.github.com/search/users?q=${gitHubUserName}`)
            this.setState({ gitHubUsers: result.data.items })
            // console.log(result.data.items)
        } catch (error) {
            throw error;
        }
    }

    async getExtraDetails(event, i) {
        showMore[i] = !showMore[i];
        if (showMore[i]) {
            const result = await this.fetchExtraDetailUser(event);
            this.setState({ extraDetails: result.data })
            console.log(result)
        }
    }
    render() {
        let gitHubUser = this.state.gitHubUsers.map((user, i) =>
            <div className="display-card" key={i}>
                <div><img className="profile-pic" src={user.avatar_url} />
                </div>
                <div className='user-details'>
                    <div className=''>{user.login}</div>
                    <div className=''>{user.html_url}</div>
                    <div className=''>{user.score}</div>
                    <div>{showMore[i] ? this.state.extraDetails[i].assignees_url : ''}</div>
                </div>
                <div className='extra-details'>
                    <button className='extra-details-btn' onClick={() => this.getExtraDetails(user.login, i)}>Show more</button>
                </div>
            </div>
        )
        return (
            <div>
                {gitHubUser}
            </div>
        );
    }
}

export default GitHubProfile;
