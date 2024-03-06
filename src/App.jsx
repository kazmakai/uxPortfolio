import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';


function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/case-study-1" element={<CaseStudy1 />} />
          <Route path="/case-study-2" element={<CaseStudy2 />} />
          <Route path="/case-study-3" element={<CaseStudy3 />} />
      </Routes>
    </div>

  );
}

export default App;
