import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h1>مرحباً بك في منصة yemscholar</h1>
            <p>المنصة الرائدة للمنح الدراسية</p>
          </div>
        } />
        {/* رابط لوحة التحكم السري الخاص بك */}
        <Route path="/s-secure-portal-2026" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
