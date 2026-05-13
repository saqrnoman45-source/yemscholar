import React from 'react';

function App() {
  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* استخدام وسم main يحل مشكلة الرابط الذي أرسلته */}
      <main>
        <header>
          <h1>منصة يمسكولر للمنح الدراسية</h1>
          <p>مرحباً بك يا صقر في موقعك الجديد</p>
        </header>
        
        <section style={{ marginTop: '30px' }}>
          <h2>المنح المتاحة</h2>
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <p>لا توجد منح دراسية مضافة حالياً.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
