
import React from 'react';
import './github-profile.css';


import axios from 'axios';
import LoadingSpinner from '../loadingSpinner';


let displayIndex;
class GitHubProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitHubUsers: [],
            extraDetails: '',
            loading: true
        }
    }

    componentDidMount() {
        this.fetchGitHubData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gitHubUserName !== this.props.gitHubUserName) {
            this.setState({ loading: true })
            this.fetchGitHubData(this.props.gitHubUserName ? this.props.gitHubUserName : 'a');

        }
    }
    async fetchExtraDetailUser(gitHubUserName) {
        const result = await axios.get("https://api.github.com/users/" + gitHubUserName + "/repos");
        return result;
    }

    async fetchGitHubData(gitHubUserName = 'a') {
        try {
            const result = await axios.get(`https://api.github.com/search/users?q=${gitHubUserName}`)
            this.setState({ gitHubUsers: result.data.items, loading: false })

            // console.log(result.data.items)
        } catch (error) {
            throw error;
        }
    }

    async getExtraDetails(event, i) {
        displayIndex = i;
        console.log(displayIndex);

        const result = await this.fetchExtraDetailUser(event);
        this.setState({ extraDetails: result.data, loading: false })
        console.log(this.state.extraDetails);
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
                    <div class='assignees-url'>{displayIndex === i && this.state.extraDetails.length ? `Assignees url at 0th index : ${this.state.extraDetails[0].assignees_url}` : ''}</div>
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
