import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./casestudy.css";

function CaseStudy3() {
  return (
    <div className="case-study">
      
      <div className='avertrolite'>
        <Navbar />
        <section className='hero'>
          <div className='text-container'>
            <h1>Avertro Lite</h1>
            <h4>Avertro is a venture-backed global cybersecurity software company based in Sydney, Australia. They are the strategic cybersecurity headquarters that helps leaders manage the business of cyber through its SaaS platform. As a team of UX designers, we helped the client understand what the entry-level version of the Avertro platform could look like.</h4>
          </div>
          <img src="src/assets/images/CaseStudy2/roche-hero.png" alt="avertrolite-hero-image" />
        </section>
      </div>


      <section className='layout-a'>
        <div className='info'>
          <div className='info-container'>
            <h3>My Role</h3>
            <p>UXUI D3signer, Researcher</p>
          </div>
          <div className='info-container'>
            <h3>Category</h3>
            <p>SaaS / Cybersecurity / B2B</p>
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
          Simplifying the tedious process of onboarding by providing prefilled areas based on preferences. A “lighter” version of Avertro that offers only the critical areas small and medium-sized businesses need to be aware of.
          </p>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Gathering Insights</h3>
          <ul>
            <li>One of the few competitors we found that also provides SaaS security was JupiterOne</li>
            <li>Contacted 60 start-ups companies in Australia that were in fintech and managed to interview 5 executive-level individuals</li>
            <li>Desktop research on: SME’s cybercrime trends, third-party integrations, cyber risk management requirements</li>
          </ul>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy3/avertro-insights.svg" alt="insights" className='insights'/>
        </div>
      </section>

      
      <section className='layout-a'>
        <div className='text-container'>
          <h3>User Journey</h3>
          <p>One of our main challenges was the confidentiality surrounding cybersecurity, limiting access to insights. Despite this, we gathered valuable input and consulted with Avertro's CEO, who possesses deep client understanding. Leveraging these insights, we crafted a concise persona and journey map to steer our direction effectively.</p>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy3/avertro-journeymap.webp" alt="journey" />
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Lo-fi wireframes</h3>
          <p>After ideation workshops, we entered the development stage, where my role as lead designer became crucial. I divided the team into four groups to create lo-fi wireframes, promoting divergent thinking due to tight deadlines. Then, we merged the best features and information architecture collectively chosen by the group.</p>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy3/avertro-wf.jpeg" alt="journey" />
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
          <h3>2 usability tests</h3>
          <h3>5 participants</h3>
          <p>After ideation workshops, we entered the development stage, where my role as lead designer became crucial. I divided the team into four groups to create lo-fi wireframes, promoting divergent thinking due to tight deadlines. Then, we merged the best features and information architecture collectively chosen by the group.</p>
        </div>
      </section>

      
      <section className='layout-a'>
        <div class="embed-responsive embed-responsive-21by9">
        <iframe src="https://player.vimeo.com/video/574636908?h=b890d82f43" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </section>

      
      <section className='layout-a'>
        <div class="embed-responsive embed-responsive-21by9">
        <iframe src="https://player.vimeo.com/video/574638512?h=29a093d964" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
          <h3>Reflection</h3>
          <p><em>You've considered fast and easy ways to get people to where they want to be and you have simplified the journey I’m super impressed...” </em>- client</p>
          <br />
          <p>We dove headfirst into research, despite being novices in cybersecurity. This ended up stretching our timeline, leaving little room for design and development, much to my dismay as the lead designer. We rushed through prototyping with only three days to spare. On top of that, user testing showed confusion over our data graphs, highlighting the importance of tailoring our solutions to fit each user's unique needs.</p>
        </div>
      </section>


      {/* Other projects */}
      <section className='other-projects-container-container'>
        <h3>More of my case studies</h3>
        <div className='other-projects-container'>
          <div className='other-projects'>
            <Link to="/case-study-1">
              <img src="src/assets/images/CaseStudy1/projectthumbnail1.png" alt="artjammers" />
              <h4>ArtJammers</h4>
            </Link>
          </div>
          <div className='other-projects'>
            <Link to="/case-study-2">
              <img src="src/assets/images/CaseStudy2/projectthumbnail2.png" alt="roche" />
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
