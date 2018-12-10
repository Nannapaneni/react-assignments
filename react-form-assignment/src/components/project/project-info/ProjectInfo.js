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
                    <select className="option-type">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>

        );
    }
}

export default ProjectInfo;
