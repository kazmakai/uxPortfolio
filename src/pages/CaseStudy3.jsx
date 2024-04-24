import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./casestudy.css";

const scrollToTop = () => {
  window.scrollTo({
      top: 0
  });
}

function CaseStudy3() {
  return (
    <div className="case-study" id='cs3'>
      
      <div className='avertrolite'>
        <Navbar />
        <section className='hero'>
          <div className='text-container'>
            <h1>Avertro Lite</h1>
            <h3>Avertro is a venture-backed global cybersecurity software company based in Sydney, Australia. They are the strategic cybersecurity headquarters that helps leaders manage the business of cyber through its SaaS platform. As a team of UX designers, we helped the client understand what the entry-level version of the Avertro platform could look like.</h3>
          </div>
          <img src="assets/images/CaseStudy2/roche-hero.png" alt="avertrolite-hero-image" />
        </section>
      </div>


      <section className='layout-a'>
        <div className='info'>
          <div className='info-container'>
            <h3>Role</h3>
            <p>UX/UI Designer, Researcher</p>
          </div>
          <div className='info-container'>
            <h3>Category</h3>
            <p>SaaS, Cybersecurity, B2B</p>
          </div>
          <div className='info-container'>
            <h3>Duration</h3>
            <p>2 weeks</p>
          </div>
        </div>
      </section>
    

      <section className='layout-a'>
        <div className='text-container'>
          <h3>Problem</h3>
          <p>
          Start-ups and scale-ups, that generally need to adhere to cybersecurity and regulatory standards, do not have the resources to seamlessly understand and manage their cyber risks to communicate this to the broader business.
          </p>
        </div>
        <div className='text-container'>
          <h3>Solution</h3>
          <p>
          Start-ups and scale-ups often lack the resources to effectively understand and manage their cybersecurity risks and communicate them to the broader business.
          </p>
        </div>
      </section>

      <section className='layout-a'>
        <div className='section-divider'>
          <h2 className='avertrolite-text'>Approach</h2>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Gathering Insights</h3>
          <ul>
            <li>One of the few competitors we found in the SaaS security space was JupiterOne.</li>
            <li>Contacted 60 fintech startups in Australia and conducted interviews with 5 executive-level individuals.</li>
            <li>Desktop research on the SME’s cybercrime trends, third-party integrations, cyber risk management requirements</li>
          </ul>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy3/avertro-insights.svg" alt="insights" className='insights'/>
        </div>
      </section>

      
      <section className='layout-a'>
        <div className='text-container'>
          <h3>User Journey</h3>
          <p>One of our main challenges was the confidentiality surrounding cybersecurity, limiting access to insights. Despite this, we gathered valuable input and consulted with Avertro's CEO, who possesses deep client understanding. Leveraging these insights, we crafted a concise persona and journey map to steer our direction effectively.</p>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy3/avertro-journeymap.webp" alt="journey" />
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
          <h3>Workshop with Avetro stakeholders</h3>
          <p>Our team organized two ideation sessions with Avertro the first one to discuss the objectives, in order to do this our team developed two how might we questions, that address all the objectives;</p>
          <br />
          <ul>
            <li><em>How might we make a light version of Avertro platform for a more entry-level user?</em></li>
            <li><em>How might we reduce friction from Mark's on boarding experience?</em></li>
          </ul>
        </div>
      </section>


      <section className='layout-a'>
        <div className='img-container'>
        <img src="assets/images/CaseStudy3/avertro-ws2.webp" alt="Crazy 8's" />
        </div>
        <div className='img-container'>
        <img src="assets/images/CaseStudy3/avertro-ws.webp" alt="MVP" />
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Lo-fi wireframes</h3>
          <p>After ideation workshops, we entered the development stage, where my role as lead designer became crucial. I divided the team into four groups to create lo-fi wireframes, promoting divergent thinking due to tight deadlines. Then, we merged the best features and information architecture collectively chosen by the group.</p>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy3/avertro-wf.jpeg" alt="journey" />
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
          <h3>We did 2 rounds of usability tests on 4 Roche's internal stakeholders. Here is the general feedback:</h3>
          <ul>
            <li>Didn't know how to navigate to Homepage</li>
            <li>Embedded videos would be better than YouTube links</li>
            <li>Better to have the section they're in indicated/highlighted</li>
            <li>Found the Help button placement confusing</li>
            <li>Not sure the setup progress bar is related to the screen you're looking at</li>
          </ul>
        </div>
      </section>


      <section className='layout-a'>
        <div className='section-divider'>
          <h2 className='avertrolite-text'>Hi-fi Designs</h2>
        </div>
      </section>


      <section className='layout-b'>
        <div className='text-container-b'>
          <h3 className='avertrolite-text'>1.</h3>
          <h3>Simplified Onboarding: Avertro Lite streamlines the lengthy onboarding process for cybersecurity, offering prefilled sections based on client industry and standards, reducing setup time.</h3>
        </div>
          <div class="embed-responsive embed-responsive-21by9">
          <iframe src="https://player.vimeo.com/video/574636908?h=b890d82f43" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
      </section>


      <section className='layout-b'>
        <div className='text-container-b'>
          <h3 className='avertrolite-text'>2.</h3>
          <h3>Avertro Lite simplifies the clutter and technical jargon of the original platform. Its dashboard highlights key information like the cyber compliant score through a progress bar. Each card features a 'traffic light' system to quickly indicate the risk level of various cyber aspects.</h3>
        </div>
          <div class="embed-responsive embed-responsive-21by9">
          <iframe src="https://player.vimeo.com/video/574638512?h=29a093d964" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
          <h3>Reflection</h3>
          <p><em>"You've considered fast and easy ways to get people to where they want to be, and you have simplified the journey. I'm super impressed...” </em>- client</p>
          <br />
          <p>We ended up stretching our timeline, leaving little room for design and development, which was disappointing for me as the lead designer. Rushing through the prototyping phase with only three days remaining exacerbated the situation. Moreover, user testing revealed confusion over our data graphs, emphasizing the importance of tailoring our solutions to each user's unique needs.</p>
        </div>
      </section>


      {/* Other projects */}
      <section className='other-projects-container-container'>
        <h3>More of my case studies</h3>
        <div className='other-projects-container'>
          <div className='other-projects'>
            <Link to="/case-study-1" onClick={scrollToTop}>
              <img src="assets/images/CaseStudy1/projectthumbnail1.png" alt="artjammers" />
              <h4>ArtJammers</h4>
            </Link>
          </div>
          <div className='other-projects'>
            <Link to="/case-study-2" onClick={scrollToTop}>
              <img src="assets/images/CaseStudy2/projectthumbnail2.png" alt="roche" />
              <h4>Roche</h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CaseStudy3;
