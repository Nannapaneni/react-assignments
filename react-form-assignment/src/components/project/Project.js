import React, { Component } from 'react';
import './Project.css';
import ProjectHeader from './project-header/ProjectHeader';
import ProjectInfo from './project-info/ProjectInfo';
import classNames from 'classnames';
class Project extends Component {
    isProjectInfoEnabled = false;

    constructor(){
        super();
        this.state = {
            isSubmitEnabled: this.isProjectInfoEnabled 
        }
    }
    setProjectInfoStatus = (isTitleEnt, isStudyTypeSel )=>{
        this.isProjectInfoEnabled = isTitleEnt && isStudyTypeSel ;
        this.setState({isSubmitEnabled : this.isProjectInfoEnabled})
    }
    render() {
        const submitButtonStyles = classNames(
            'submit-btn',
            {
              'enable': this.state.isSubmitEnabled,
              'disable': !this.state.isSubmitEnabled
            }
          );
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="project">
                    <ProjectHeader></ProjectHeader>
                    <ProjectInfo pStudyTypeProp= {this.props.infoProps} pInfoStatusProp={this.setProjectInfoStatus}></ProjectInfo>
                </div>
                <input type="submit" className={submitButtonStyles} disabled={!this.state.isSubmitEnabled} value="Submit"/>
            </form>

        )
    }
}
export default Project;