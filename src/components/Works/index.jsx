import React from "react";
import { Link } from "react-router-dom";
import './Works.css';

const scrollToTop = () => {
    window.scrollTo({
        top: 0
    });
}

const Works = () => {
    return (
        <section id="works">
            <h2>Case Studies</h2>
            <div className="cards-container">
                <div className="card">
                    <Link to="/case-study-1" onClick={scrollToTop}><img src="assets/images/CaseStudy1/projectthumbnail1.png" alt="artjammers" /></Link>
                    <div>
                        <h3>1. ArtJammers</h3>
                        <h4>App, Art, Social</h4>
                        <p>An app that allows hobbyist artists in Tokyo to make meaningful connections through art</p>
                    </div>
                </div>
                <div className="card">
                    <Link to="/case-study-2" onClick={scrollToTop}><img src="assets/images/CaseStudy2/projectthumbnail2.png" alt="roche" /></Link>
                    <div>
                        <h3>2. Roche</h3>
                        <h4>Client work</h4>
                        <h4>Website, Medical, B2B</h4>
                        <p>Redesign of the Roche website to help drive more traffic and reorganized the IA for ease of use.</p>
                    </div>
                </div>
                <div className="card">
                    <Link to="/case-study-3" onClick={scrollToTop}><img src="assets/images/CaseStudy3/projectthumbnail3.png" alt="avertrolite" /></Link>
                    <div>
                        <h3>3. Avertro Lite</h3>
                        <h4>Client work</h4>
                        <h4>SaaS, Cybersecurity, B2B</h4>
                        <p>A simplified dashboard tailored for a cybersecurity SaaS product, specifically catering to SME's</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;
