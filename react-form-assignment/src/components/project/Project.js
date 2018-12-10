import React, { Component } from 'react';
import './Project.css';
import ProjectHeader from './project-header/ProjectHeader';
import ProjectInfo from './project-info/ProjectInfo';
class Project extends Component {
    isProjectInfoEnabled = false;
    isProjectSharingEnabled = false
    constructor(){
        super();
        this.state = {
            isSubmitEnabled: this.isProjectInfoEnabled && this.isProjectSharingEnabled
        }
    }
    setProjectInfoStatus = (isEnabled )=>{
        this.isProjectInfoEnabled = isEnabled;
    }
    setProjectInfoStatus = (isEnabled )=>{
        this.isProjectSharingEnabled = isEnabled;
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="project">
                    <ProjectHeader></ProjectHeader>
                    <ProjectInfo infoProps= {}></ProjectInfo>
                </div>
                <input type="submit" disabled = {!this.state.isSubmitEnabled} value="Submit"/>
            </form>

        )
    }
}
export default Project;