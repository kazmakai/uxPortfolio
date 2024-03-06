import { Link } from "react-router-dom";
import './Works.css'

const Works = () => {
    return (
        <section id="works">
            <div>
                <h2>Projects</h2>
                <div className="cards-container">
                    <div className="card">
                        <Link to="/case-study-1"><img src="src/assets/images/CaseStudy1/projectthumbnail1.png" alt="artjammers" /></Link>
                        <div>
                            <h3>1. ArtJammers</h3>
                            <p>App / Art / Social</p>
                            <p>An app that allows hobbyist artists in Tokyo to make meaningful connections through art</p>
                        </div>
                    </div>


                    <div className="card">
                        <Link to="/case-study-2"><img src="src/assets/images/CaseStudy2/projectthumbnail2.png" alt="artjammers" /></Link>
                        <div>
                            <h3>2. Roche</h3>
                            <p>Website / Medical / B2B</p>
                            <p>Redesign of the Roche website to help drive more traffic and reorganized the IA for ease of use.</p>
                        </div>
                    </div>


                    <div className="card">
                        <Link to="/case-study-3"><img src="src/assets/images/CaseStudy3/projectthumbnail3.png" alt="artjammers" /></Link>
                        <div>
                            <h3>3. Avertro LIte</h3>
                            <p>SaaS / Cybersecurity / B2B</p>
                            <p>A simplified dashboard tailored for a cybersecurity SaaS product, specifically catering to SME's</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;