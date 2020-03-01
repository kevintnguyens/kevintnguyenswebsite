import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
			<footer id="footer">
				<div className="inner">
					<ul className="icons">
						<li><a href="mailto:kevintnguyens@yahoo.com" className="icon fa-envelope">
							<span className="label">Facebook</span>
						</a></li>
						<li><a href="https://github.com/kevintnguyens" className="icon fa-github">
							<span className="label">Twitter</span>
						</a></li>
						<li><a href="https://www.linkedin.com/in/kevintnguyens/" className="icon fa-linkedin">
							<span className="label">LinkedIn</span>
						</a></li>
					</ul>
				</div>
			</footer>

        );
    }
}
export default Footer