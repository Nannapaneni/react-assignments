import React, { Component } from 'react';
import './Project.css';
import ProjectHeader from './project-header/ProjectHeader';

class Project extends Component {
    render() {
        return(
            <div className="project">
             <ProjectHeader></ProjectHeader>
            </div>

        )
    }
}
export default Project;