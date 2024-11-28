import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import LayerBase from "./image/layer-base.png"
import LayerMiddle from "./image/layer-middle.png"
import LayerFront from "./image/layer-front.png"
import dungeon from "./image/dungeon.png"


const Home = () => {
	window.addEventListener('scroll', e => {
		document.querySelector('html').style.cssText = `--scrollTop: ${window.scrollY}px`;
	});
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	const smoother = ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content'
	})

	const handleClick = () => {
		smoother = ScrollSmoother.get();
		smoother.kill();
		smoother = null;
	};

	return (
		<div className="wrapper">
			<div className="content">
				<header className="main-header">
					<div className="layers">
						<div className="layer__header">
							<div className="layers__caption">test platform</div>
							<div className="layers__title">Lead</div>
						</div>
						<div 
						className="layer layers__base" 
						style={{ backgroundImage: `url(${LayerBase})` }}
						></div>

						<div 
						className="layer layers__middle" 
						style={{ backgroundImage: `url(${LayerMiddle})` }}
						></div>
						<div 
						className="layer layers__front" 
						style={{ backgroundImage: `url(${LayerFront})` }}
						></div>
					</div>
				</header>

				<article className="main-article"
								 style={{ backgroundImage: `url(${dungeon})` }}>

					<div className="main-article__content">
						<h2 className="main-article__header">Who are you?</h2>
					</div>
					<div className="main-article__buttons">
						<Link onClick={handleClick} to="/teacher" className="startButton">Teacher</Link>
						<Link onClick={handleClick} to="/tests" className="startButton">Student</Link>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Home;