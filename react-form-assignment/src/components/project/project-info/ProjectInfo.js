import React, { Component } from 'react';
import './ProjectInfo.css';

class ProjectInfo extends Component {

    constructor(props){
        super();
        this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
        this.handleStudyTypeSelection = this.handleStudyTypeSelection.bind(this);
    }
    isTitleEntered = false;
    isStudyTypeEntered = false;

    handleProjectTitleChange(event) {
        const value = event.target.value;
        if (value) this.isTitleEntered = true;
        else this.isTitleEntered = false;

        this.props.pInfoStatusProp(this.isTitleEntered,this.isStudyTypeEntered);
    }
    handleStudyTypeSelection(event) {
        const value = event.target.value;
        if (value !== 'None') this.isStudyTypeEntered = true;
        else this.isStudyTypeEntered = false;

        this.props.pInfoStatusProp(this.isTitleEntered,this.isStudyTypeEntered);
    }

    render() {
        return (
            <div className="project-info">
                <h3> Project Information</h3>
                <div >
                    <span>Project Title </span>
                    <input className="title-input" type="text" name="title" placeholder="Enter Projcet Title" onChange={this.handleProjectTitleChange} />
                </div>
                <div className="study-type">
                    <span> Select Study Type </span>
                    <select className="option-type" onChange={this.handleStudyTypeSelection}>
                        {this.props.pStudyTypeProp.map(studyType => <option value={studyType}>{studyType.toUpperCase()}</option>)}
                    </select>
                </div>
            </div>

        );
    }
}

export default ProjectInfo;
