import React, { Component } from 'react';

class NavigationMenu extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <nav id="nav" className="mobile--hidden">
                
                    <span><a href="https://drive.google.com/file/d/1iXdCmn1bPdWRXA64-P6J1dsjegx90FEd/view?usp=sharing">Resume</a></span>
                    <span><a href="https://www.linkedin.com/in/kevintnguyens/">Linkedin</a></span>
                    <span><a href="https://github.com/kevintnguyens">Github</a></span>
 
            </nav>
        );
    }
}

export default NavigationMenu;