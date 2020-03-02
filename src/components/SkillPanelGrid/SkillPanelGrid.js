import React, { Component } from 'react';
import SkillPanelGridIsotope from './SkillPanelGridIsotope/SkillPanelIsotope.jsx'
import './SkillPanelGrid.scss'
import isotope from 'isotope-layout';


class SkillPanelGrid extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            currentFilter: "0",
            
        };
    }


    changeFilter(value) {
        if (value == this.state.currentFilter) {
            return;
        }
        this.setState(
            {currentFilter: value,
            }
        )
    }
    getClass(value) {
        return value === this.state.currentFilter ? "button small" : "button small alt"
    }
    
    render () {
        return (
            <section className="wrapper style1 skill-panel-grid">
                <div className="inner">
                    <div>

                    <h2> My Skill Sets</h2>

                    <div className="Filters">

                        <button  value="0" onClick = {this.changeFilter.bind(this,0)} className={"0" == this.state.currentFilter ? "button small" : "button small alt"}>All</button>
                        <button  value="1" onClick = {this.changeFilter.bind(this,1)} className={"1" == this.state.currentFilter ? "button small" : "button small alt"}>Languages</button>
                        <button  value="2" onClick = {this.changeFilter.bind(this,2)} className={"2" == this.state.currentFilter ? "button small" : "button small alt"}>Technologies</button>
                        <button  value="3" onClick = {this.changeFilter.bind(this,3)} className={"3" == this.state.currentFilter ? "button small" : "button small alt"}>Non-Technical</button>
                    </div>
                    </div>
                    <div>
                        <hr/>                    
                        <SkillPanelGridIsotope currentFilter={ this.state.currentFilter} />
                    </div>
                </div>
             </section>
        );
    }
    
}

export default SkillPanelGrid;