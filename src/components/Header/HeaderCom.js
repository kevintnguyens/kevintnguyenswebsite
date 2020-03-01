import React, {Component} from 'react';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

class HeaderCom extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			active : false,
			titles : ["Full Stack Developer","Software Engineer","UCI Graduate","SnowBoarder"],
			currentTitle : "Full Stack Developer",
			currentIndex : 0,
			writeInc : false,
			waitToType: true,
		}
		setInterval(this.activeToggle.bind(this), 500);
		setInterval(this.changeTitleDec.bind(this), 100);
		setInterval(this.waitToType.bind(this), 5000);
	}
	dynamicHeader () {
		return ( <p> {this.state.currentTitle} <span className={this.state.active == true ? "hidden" : "visible"}>|</span></p>);
	}
	waitToType() {
		return this.setState( {
			waitToType :  false,
		});
	}
	activeToggle() {
		return this.setState( {
			active : this.state.active === true ? false : true,
		});
	}


	changeTitleDec() {

			if (this.state.waitToType) {
				return;
			}


			// if removeing characters 
			if (!this.state.writeInc ) {
				
				this.setState({currentTitle : this.state.currentTitle.substring(0,this.state.currentTitle.length - 1)});
			}
			else {

				this.setState({currentTitle : this.state.titles[this.state.currentIndex].substring(0, this.state.currentTitle.length + 1)});
			}
			if (this.state.currentTitle.length === 0) {

				this.setState({
					currentIndex : this.state.currentIndex === this.state.titles.length - 1 ? 0 : this.state.currentIndex + 1,
					writeInc : true,
					waitToType : !this.state.writeInc,
				});

			} 

			if (this.state.currentTitle.length === this.state.titles[this.state.currentIndex].length) {
				this.setState({
					writeInc : false,
					waitToType : !this.state.waitToType,
				});

			}

	}

    render() { 
		
        return (
            <div>

			<header id="header" className="alt">
			<	h1><a href="mailto:kevintnguyens@yahoo.com">kevintnguyens@yahoo.com</a></h1>
				<NavigationMenu />
			</header>
			
			<section id="banner">
				<i className="icon fa-desktop"></i>
				<h2>Kevin Nguyen</h2>
				{this.dynamicHeader()}
			</section>
		
            </div>
        );
    }
}
 
export default HeaderCom;