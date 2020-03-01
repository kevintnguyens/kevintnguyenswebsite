import React from 'react';
import ReactDOM from 'react-dom';
import webCrawl from './images/web-crawler.png';
import './App.css';
import './assets/css/main.css';
import redcross from './images/redcross.jpg';
import  HeaderCom from './components/Header/HeaderCom';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
    	<HeaderCom />
		<AboutSection />
			<section id="one" className="wrapper style1">
				<div className="inner">
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
