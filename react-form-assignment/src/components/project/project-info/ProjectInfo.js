import React, { Component } from 'react';
import './ProjectInfo.css';

class ProjectInfo extends Component {
    render() {
        return (
            <div className="project-info">
                <h3> Project Information</h3>
                <div >
                    <input className="title-input" type="text" name="title" placeholder="Enter Projcet Title" />
                </div>
                <div className="study-type">
                <span> Select Study Type </span>
                    <select className="option-type">
                    {this.props.pStudyTypeProp.map(studyType=><option value={studyType}>{studyType.toUpperCase()}</option>)}
                    </select>
                </div>
            </div>

        );
    }
}

export default ProjectInfo;
