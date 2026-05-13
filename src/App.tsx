import React from 'react';

function App() {
  return (
    <div style={{ direction: 'rtl', textAlign: 'right', fontFamily: 'Tahoma, sans-serif' }}>
      {/* شريط علوي بسيط */}
      <nav style={{ background: '#003366', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>يمسكولر (YemScholar)</h1>
        <a href="/s-secure-portal-2026" style={{ color: 'white', textDecoration: 'none' }}>دخول المدير</a>
      </nav>

      <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <header style={{ textAlign: 'center', margin: '40px 0' }}>
          <h2 style={{ color: '#003366' }}>مرحباً بك في منصة المنح الدراسية اليمنية</h2>
          <p>بوابة الطالب اليمني للحصول على فرص تعليمية عالمية.</p>
        </header>

        <section style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h3>أحدث المنح المضافة:</h3>
          <p>لا يوجد منح مضافة حالياً. كن أول من يضيف منح من لوحة التحكم.</p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '0.8em', color: '#666' }}>
        <p>تطوير: صقر نعمان - طالب أمن سيبراني بجامعة الجزيرة</p>
      </footer>
    </div>
  );
}

export default App;
