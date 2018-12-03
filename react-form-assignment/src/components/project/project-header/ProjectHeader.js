import React, { Component } from 'react';
import './ProjectHeader.css';

class ProjectHeader extends Component {
    render() {
        return (
            <div className="project-header">
                <div className="header-icon">
                    <i className="fa fa-plus"></i>
                </div>
                <div className="header-info">
                    <h1> New Project</h1>
                    <p> Enter the details of the project</p>
                </div>
            </div>

        );
    }
}

export default ProjectHeader;
