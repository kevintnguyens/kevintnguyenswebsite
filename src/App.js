import React from 'react';
import ReactDOM from 'react-dom';
import webCrawl from './images/web-crawler.png';
import './App.css';
import './assets/css/main.css';
import redcross from './images/redcross.jpg';
import  HeaderCom from './components/Header/HeaderCom';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';
import SkillPanelGrid from './components/SkillPanelGrid/SkillPanelGrid';
import Quick from './DevIcons'

function App() {
  return (
    
    <div className="App">
    	<HeaderCom />
		<AboutSection />
		<SkillPanelGrid/>
	
					<section className="wrapper style3">
						<div className ="inner">
							<h3> My work</h3>

						<div className="content">
							<h2>toshiba America business Solution</h2>
							<h5>Tech Stack: Visual C#, .NET 4.5, LINQ, REST APIs/Web services, ASP.NET, Angular, JavaScript, jQuery, &amp; SQL Server. </h5>
							<br/>
							<h6>Summary</h6>
							<p>
							Toshiba America Business Soutions (TABS) specializes in managing client communications, from paper to electronic to digital. Duties included Agile/SCRUM development, maintenance &amp;
							support, and mentoring engineers. 
							</p>

							<h6>Achivments &amp; Duties</h6>
							<ul>
								<li>
									Reduced SQL database usage on a high cloud traffic product by 40% by optimizing sql queries, saving production $110,000 a year.  
								</li>
								<li>
									Streamlined a whole new CI/CD process for all microservices in a project using Azure DevOps which reduced deployment time from 12 hours to 2 hours. 
								</li>
								<li>
									Improved the development process of the team by integrating QA’s test suite in to a daily build for multiple projects. This allowed bugs to caught earlier across teams. 
								</li>
								<li>
									Researched and Migrated a Cloud service project to an on-prem vm with IIS in order for QA to perform code coverage on a new project.
								</li>
								<li>
									Resolved a production bug that caused virtual machines to be at 100% memory usage for a day. 
								</li>
								<li>
									Lead an effort on refactoring the front end of legacy asp.net mvc architecture to more of a component-based architecture. 
								</li>

								<li>
									Integrated and developed a fully functional license feature for printer applications which is used by 100,000 of printers.
								</li>
							</ul>
						</div>
						<div>
							<a href="http://business.toshiba.com/" className="button alt">Company  Website</a>
						</div>
						<br/>
						<div className="content">
							<h2>KWALL</h2>
							<h5>Tech Stack: Linux, Nginx, Apache, RESTful APIs/Web services,  PHP. JavaScript, jQuery, CSS, MySQL, Drupal </h5>
							<h5>Summary</h5>
							<p>
							KWALL creates, designs and codes projects for top colleges and universities. Duties included AGILE/SCRUM development, maintenance &amp;
							support, and communication to clients. 
							</p>
							<h6>Achivments &amp; Duties</h6>
							
							<ul>
								<li>
									Consulted with Arizona State University on possible implementations of features for their website.
								</li>
								<li>
									Created a responsive social feed carousel that imported the latest posts from Twitter and Facebook using Facebook and twitters API. 
								</li>
								<li>
									Collaborated with a team of 8 on projects from start to finish such as the Harlem Globetrotter. 
								</li>
								<li>
									Built a bash script that moved 100’s of GB of data on a server in order to mimic production file structure. 
								</li>
								<li>
									Built a bash script that organizes a multisite file structure into a csv. 
								</li>

								<li>
									Created responsive and functional components from designs for sites like SDSU, TBN, and ASU which have thousands of visitors daily
								</li>
							</ul>
						</div>
						<a href="https://www.kwallcompany.com" className="button alt">Company  Website</a>
						</div>

					</section>

					<section className="wrapper style1">
						<div className ="inner">
					<h2> My Projects</h2>
					<article className="feature left">
					<span className="image"><img src={redcross}/></span>
						<div className="content">
							<h2>Red Cross UCI website</h2>
							<h1>Tech Stack Used: PHP, MYSQL, Javascript, Linux</h1>
							<p>  Designed a website prototype that improved the way members sign up for events during meetings for Red Cross.  
							<br/>
							<a href="https://github.com/kevintnguyens/redcrossuci" className="button alt">View Code</a>
						</p>
			
						</div>
					</article>
					<article className="feature right">
						<span className="image"><img src={webCrawl}/></span>
						<div className="content">
							<h2>Web Crawler - Search Enginre</h2>
							<h1>Tech Stack Used: Python</h1>
							<p> Lead a team of three students and was able to create a web Crawler off a boiler plate project.The crawler was able to search through  UCI's website and stored the results such that it could be consume by a search engine.  
							<br/>
							<a href="https://github.com/kevintnguyens/crawler" className="button alt">View Code</a>
						</p>
			
						</div>
					</article>
				</div>
			</section>
		<Footer/>
    </div>    
  );
}

export default App;
