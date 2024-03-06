import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CaseStudy1() {
  return (
    <div className="case-study">
        <Navbar />
        <h1>ArtJammers</h1>
        <p>Add your case study content here...</p>
        <Link to="/case-study-2">Roche</Link>
        <Link to="/case-study-3">Avertro Lite</Link>
    </div>
  );
}

export default CaseStudy1;
