import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./casestudy.css";

function CaseStudy2() {
  return (
    <div className="case-study">
      
      <div className='roche'>
        <Navbar />
        <section className='hero'>
        <div className='text-container'>
          <h1>Roche</h1>
          <h3>Roche is a multinational medical company that has two main arms: pharmaceuticals, and diagnostics. We were tasked with figuring out how to rebuild and restructure the Roche Diagnostics Australia website in a way that attracts current and prospective customers to visit and return to it for valuable content and engagement.</h3>
        </div>
        <img src="assets/images/CaseStudy2/roche-hero.png" alt="avertrolite-hero-image" />
        </section>
      </div>


      <section className='layout-a'>
        <div className='info'>
          <div className='info-container'>
            <h3>Role</h3>
            <p>UX Researcher, UI Lead</p>
          </div>
          <div className='info-container'>
            <h3>Category</h3>
            <p>Website / Medical / B2B</p>
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
          Roche Diagnostics Australia has little to no presence online due to limited relevant content and confusing IA. The challenge was to increase engagement with existing and prospective customers.
          </p>
        </div>
        <div className='text-container'>
          <h3>Solution</h3>
          <p>
          Translating Roche’s well known personal approach and impeccable customer service on its digital platform. The final deliverable is a simplified IA that links different verticals and services in a holistic manner.
          </p>
        </div>
      </section>

      <section className='layout-a'>
        <div className='section-divider'>
          <h2 className='roche-text'>Approach</h2>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Gathering Insights</h3>
          <ul>
            <li>We interviewed 8 Roche employees in key customer-facing roles, but due to workload and time constraints, only 6 could participate. They provided invaluable insights into Roche's client base, comprising medical labs, hospitals, and government projects</li>
            <li>SWOT analysis on 6 diagnostics websites, especially Roche’s main competitor in Australia; Abbott Diagnostics. Our goal here was to understand how the competitors attract, retain customers, market products and how they arrange their own IA</li>
          </ul>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy2/roche-insights.svg" alt="insights" className='insights'/>
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Competitor Analysis and Heuristics</h3>
          <p>We created a competitor analysis and heuristics testing of the primary competitor websites. Our goal here was to understand how the competitors attract, retain customers, market products and how they arrange their own IA.</p>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy2/roche-ca.webp" alt="insights" />
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>My team and I arranged an ideation workshop with the Roche team. For this meeting we devised three how might we questions to focus our ideas</h3>
          <ul>
            <li>How might we improve the experience and simplify the tender process for current and future clients?​</li>
            <li>How might we provide value in Roche Diagnostics Australia site that will help attract current and potential clients?</li>
            <li>How might we provide better help and support to satisfy users' needs before and during contact with Roche?</li>
          </ul>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy2/roche-ws.webp" alt="insights" />
        </div>
      </section>


      <section className='layout-a'>
        <div className='text-container'>
          <h3>Wireframes</h3>
          <p>Due to limited client and user availability for a traditional Crazy 8 session, I, as the design lead, propose that each designer craft a design iteration outlining their top three favorite features and their rationale behind each selection.</p>
          <ol>
            <li>Staying up to date: content related to current news/event (e.g. Covid19)</li>
            <li>Illustrate Roche's personal approach to potential clients</li>
            <li>Troubleshooting: video guides / how-to content for the website</li>
          </ol>
        </div>
        <div className='img-container'>
          <img src="assets/images/CaseStudy2/roche-wf.webp" alt="insights" />
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
        <h3>Main feedback from user tests (3 stakeholders)</h3>
        <ul>
          <li>Careers should be added to the header</li>
          <li>Search for articles should be included</li>
          <li>Include patient stories</li>
          <li>Too much information on product pages</li>
          <li>Specification graphics too playful for medical site</li>
          <li>Add links to Roche ELabDoc service</li>
          <li>Trouble shooting videos should be product specific</li>
        </ul>
        </div>
      </section>
      

      <section className='layout-a'>
        <div className='full-spread'>
          <img src="assets/images/CaseStudy2/roche-map.svg" alt="sitemap" />
        </div>
      </section>

      <section className='layout-a'>
        <div className='section-divider'>
          <h2 className='roche-text'>Hi-fi Designs</h2>
        </div>
      </section>


      <section className='layout-b'>
        <div className='text-container-b'>
          <h3 className='roche-text'>Final design proposal</h3>
          <h3>As the design lead, one of the key challenges in creating the high-fidelity prototype was ensuring strict adherence to Roche's established brand identity.</h3>
          <br />
          <h3>Additionally, we faced the task of structuring the information architecture effectively to showcase the extensive amount of content on the website.</h3>
        </div>
        <div class="embed-responsive embed-responsive-21by9">
          <iframe src="https://player.vimeo.com/video/574619896?" width="500" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </section>


      <section className='layout-b'>
      <div className='text-container-b'>
          <h3>Reflection</h3>
          <p><em>“You've considered fast and easy ways to get people to where they want to be and you have simplified the journey. I’m super impressed...” </em>- client</p>
          <br />
          <p>Over 2 weeks, we were able to provide the client with a restructured and simplified website. Through research, we ensured the final product stays true to Roche’s values and responds to customers' needs.</p>
          <br />
          <p>It was enlightening to encounter the challenge of limited customer data and instead rely on internal stakeholders with frequent customer interactions. This experience shifted my perspective, highlighting that the 'typical' linear UX design approach is just a guideline.</p>
        </div>
      </section>


    
      <section className='other-projects-container-container'>
        <h3>More of my case studies</h3>
        <div className='other-projects-container'>
          <div className='other-projects'>
            <Link to="/case-study-3">
              <img src="assets/images/CaseStudy3/projectthumbnail3.png" alt="avertrolite" />
              <h4>Avertro Lite</h4>
            </Link>
          </div>
          <div className='other-projects'>
            <Link to="/case-study-1">
              <img src="assets/images/CaseStudy1/projectthumbnail1.png" alt="artjammers" />
              <h4>ArtJammers</h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
  </div>
  );
}

export default CaseStudy2;
