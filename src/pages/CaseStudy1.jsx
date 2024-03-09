import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./casestudy.css";

function CaseStudy1() {
  return (
    <div className="case-study">
      
      <div className='artjammers'>
        <Navbar />
        <section className='hero'>
        <div className='text-container'>
          <h1>ArtJammers</h1>
          <h4>While working in Tokyo, I co-founded an art Meetup group that visits a different location within the city to sketch every weekend. This app is designed to alleviate some of the pain points experienced by both members and organizers.</h4>
        </div>
        <img src="src/assets/images/CaseStudy1/artjammers-hero.png" alt="artjammers-hero-image" />
        </section>
      </div>


      <section className='layout-a'>
        <div className='info'>
          <div className='info-container'>
            <h3>My Role</h3>
            <p>UXUI Designer</p>
          </div>
          <div className='info-container'>
            <h3>Category</h3>
            <p>App / Art / Social</p>
          </div>
          <div className='info-container'>
            <h3>Duration</h3>
            <p>4 weeks</p>
          </div>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Problems</h3>
          <ol>
            <li>Insufficient organizers limit the ability to fulfill event demand, resulting in unmet community needs and potential disengagement</li>
            <li>Lack of engagement beyond events diminishes community connection and may hinder sustained participation and growth</li>
            <li>Members want to initiate events but the process but don’t want the commitment of running an official group</li>
          </ol>
        </div>
        <div className='text-container'>
          <h3>Solution</h3>
          <p>
          A dynamic platform fostering the sharing of artworks, hosting informal gatherings, and providing a supportive forum for amateur artists in Tokyo to make meaning connections through art.
          </p>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Gathering Insights</h3>
          <ul>
            <li>Besides the obvious issues with Meetup, I wanted to explore what other pains members are experiencing.</li>
            <li>I created and sent out a questionnaire aimed at collecting demographic, behavioral, and motivational data from members, which eventually received 25 responses.</li>
          </ul>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy1/aj-insights.svg" alt="insights" className='insights' />
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
        <h3>Understanding the user base</h3>
        <p>Based on initial insights, I created two personas to track the main users and mitigate bias from being the primary organizer. I refer back to them throughout the design process when I find myself going off-track.</p>
        </div>
      </section>


      <section className='layout-a'>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy1/aj-person1.png" alt="persona1" />
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy1/aj-persona2.png" alt="persona2" />
        </div>
      </section>


      <section className='layout-b'>
        <div className='text-container-b'>
          <h3><em>How might we streamline the process of organizing urban sketching events in Tokyo to meet growing demand and ensure community needs are fulfilled, while also enhancing post-event engagement to foster lasting connections and encourage sustained participation...?</em></h3>
        </div>
      </section>


      <section className='layout-b'>
        <div className='text-container-b'>
          <h3>Wireframes and User Flows</h3>
          <p>The initial design emphasized a robust map UI, enabling users to locate ideal spots for events and associate their artworks.</p>
          <br />
          <p>Drawing inspiration from Meetup's intuitive interface, the second iteration prioritized user-friendly event creation, particularly for first-time organizers. In response to organizer pain points, subtle details were integrated to streamline the process, informed by real-world experience.</p>
        </div>
      </section>


      <section className='layout-a'>
        <div className='full-spread'>
          <img src="src/assets/images/CaseStudy1/aj-wireframes.png" alt="wireframes" />
        </div>
      </section>


      <section className='layout-b'>
        <div className='text-container-b'>
          <h3>2 guerrilla usability tests</h3>
          <h3>6 participants</h3>
          <ul>
            <li>Lack of clarity on how to utilize the map UI and skepticism about its necessity</li>
            <li>Event creation process perceived as overly cumbersome and formal</li>
            <li>Confusion regarding the naming conventions of certain list sorting filters</li>
            <li>Feedback suggests a perceived disconnect between the main features (event, art gallery, map UI, and checklist), with users feeling they are not sufficiently integrated, likening the experience to disparate apps stitched together</li>
          </ul>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Pivot and more research</h3>
          <p>Acknowledging user feedback and feasibility concerns, I streamlined the approach by simplifying event creation, prioritizing the MVP, and enhancing sharing capabilities. Through a competitor analysis, I identified an untapped market for an event and art-sharing platform for amateur artists in Tokyo as the product evolves.</p>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy1/aj-ca.svg" alt="competitor analysis" />
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3 className='artjammers-text'>1.</h3>
          <h4>A dynamic forum interface fostering the exchange of artworks, casual gatherings, and inquiries</h4>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy1/aj-hifi1.png" alt="hifi-1" className='hifi make-smaller'/>
        </div>
      </section>

      <section className='layout-b'>
        <div className='text-container-b'>
          <h3 className='artjammers-text'>2.</h3>
          <h4>A personal portfolio where users can look back on where they have created their artworks or the locations they are based on</h4>
        </div>
        <div className='img-container-2'>
          <img src="src/assets/images/CaseStudy1/aj-hifi2.png" alt="hifi-2" className='hifi'/>
        </div>
      </section>

      <section className='layout-b'>
        <div className='text-container-b'>
          <h3 className='artjammers-text'>3.</h3>
          <h4>A streamlined process to create casual, informal art hangouts with your friends, minus the stress of being officially dubbed the organizer</h4>
        </div>
        <div className='img-container-2'>
          <img src="src/assets/images/CaseStudy1/aj-hifi3.png" alt="hifi-3" className='hifi'/>
        </div>
      </section>

      <section className='layout-a'>
        <div className='text-container'>
          <h3 className='artjammers-text'>4.</h3>
          <h4>Discover artwork posts based on tools and topics</h4>
        </div>
        <div className='img-container'>
          <img src="src/assets/images/CaseStudy1/aj-hifi4.png" alt="hifi-4" className='hifi'/>
        </div>
      </section>


            <section className='layout-b'>
      <div className='text-container-b'>
          <h3>Reflection</h3>
          <p>This project has been personally fulfilling, especially as the founder of this community. Maintaining objectivity through thorough research, prioritizing MVPs over potential future features, and navigating pivots were challenging but rewarding aspects of the journey.</p>
        </div>
      </section>


      <section className='other-projects-container-container'>
        <h3>More of my case studies</h3>
        <div className='other-projects-container'>
          <div className='other-projects'>
            <Link to="/case-study-2">
              <img src="src/assets/images/CaseStudy2/projectthumbnail2.png" alt="roche" />
              <h4>Roche</h4>
            </Link>
          </div>
          <div className='other-projects'>
            <Link to="/case-study-3">
              <img src="src/assets/images/CaseStudy3/projectthumbnail3.png" alt="avertrolite" />
              <h4>Avertro Lite</h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
      );
}

export default CaseStudy1;
