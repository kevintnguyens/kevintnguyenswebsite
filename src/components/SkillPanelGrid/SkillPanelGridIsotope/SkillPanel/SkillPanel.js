import React, { Component } from 'react';
import './SkillPanel.scss';

class SkillPanel extends Component {
    constructor(props) {
        super(props);    }
    render () {
        return(
            <a href = {this.props.url} data-type={this.props["data-type"]}>
                
            <div className="skill-panel-grid__item">
                {this.props.Icon}
                <h5>{this.props.language}</h5>
  
            </div>
            </a>
        );
    }
}

export default SkillPanel;