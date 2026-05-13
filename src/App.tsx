import React from 'react';

function App() {
  return (
    <div style={{ direction: 'rtl', textAlign: 'right', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      {/* رأس الصفحة */}
      <nav style={{ background: '#0056b3', color: 'white', padding: '15px 20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>منصة يمسكولر (YemScholar)</h1>
      </nav>

      <main style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ color: '#333' }}>بوابتك للمنح الدراسية العالمية</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>مشروع تقني لخدمة الطلاب اليمنيين - تطوير الطالب صقر نعمان</p>
        </header>

        {/* قسم عرض المنح */}
        <section style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '10px', color: '#0056b3' }}>آخر الفرص المتاحة</h3>
          <div style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
            <p>سيتم عرض المنح هنا قريباً عند إضافتها من لوحة التحكم.</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', color: '#999', fontSize: '0.9rem' }}>
        <p>© 2026 صقر نعمان العفيف(إب)</p>
      </footer>
    </div>
  );
}

export default App;
