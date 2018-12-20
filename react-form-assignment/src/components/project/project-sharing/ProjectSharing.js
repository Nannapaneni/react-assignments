import React, { Component } from 'react';
import './ProjectSharing.css';
import classNames from 'classnames';

class ProjectSharing extends Component {
    selUsersList = []
    constructor(props) {
        super(props);
        this.state = {
            showUserList: false,
            userList: this.props.userListProp,
            selectedUsers: []
        }
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.toggleUserList = this.toggleUserList.bind(this);
        this.selectUser = this.selectUser.bind(this);
    }
    componentWillMount() {
        //this.state.set
    }

    handleUserInputChange(event) {
        const value = event.target.value;
        if (!value) {
            this.setState({ userList: this.props.userListProp });
        }
        else {
            // logic for filtering userList
            const updatedUserList = this.props.userListProp.filter(user => {
                return user.indexOf(value) !== -1;

            });
            this.setState({ userList: updatedUserList });
        }

    }
    handleStudyTypeSelection(event) {
        const value = event.target.value;


    }
    toggleUserList() {
        this.setState({ showUserList: true });

    }
    selectUser(event) {
        const selUser = event.target.innerHTML;
        this.state.selectedUsers.push(selUser)
        this.setState({ selectedUsers: this.state.selectedUsers  });
    }

    render() {
        const userListContainer = classNames(
            'user-list',
            {
                'show': this.state.showUserList,
                'hide': !this.state.showUserList
            }
        );
        return (
            <div className="project-sharing">
                <h3> Project Sharing</h3>
                <div >
                    <span>Select Users </span>
                    <input className="user-input" type="text" name="user" placeholder="Enter User To Share Project"
                        onChange={this.handleUserInputChange}
                        onFocus={this.toggleUserList}

                    />
                </div>
                <div className={userListContainer}>
                    <ul>
                        {this.state.userList.map((user, index) =>
                            <li key={index} onClick={this.selectUser}>{user}</li>)}
                    </ul>
                </div>

                <div className="selected-user-list">
                    <ul>
                        {this.state.selectedUsers.map((user, index) =>
                            <div>
                                <li key={index}>{user}</li>
                                <button>Remove</button>
                            </div>
                        )}
                    </ul>
                </div>
            </div>

        );
    }
}

export default ProjectSharing;
