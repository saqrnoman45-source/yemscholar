
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// ملاحظة: يمكنك لاحقاً استخدام React Router للانتقال بين الصفحات
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* شريط التنقل العلوي */}
      <Navbar />

      {/* المحتوى الرئيسي (حالياً نعرض الصفحة الرئيسية فقط) */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* تذييل الصفحة */}
      <Footer />
    </div>
  );
}

export default App;
