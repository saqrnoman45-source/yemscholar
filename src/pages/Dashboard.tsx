import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Dashboard = () => {
  const [formData, setFormData] = useState({ title: '', country: '', link: '' });

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "scholarships"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("تم النشر بنجاح في منصة yemscholar!");
    } catch (err) {
      alert("خطأ في الاتصال بقاعدة البيانات!");
    }
  };

  return (
    <div style={{ direction: 'rtl', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#1a73e8' }}>إدارة المنح الدراسية</h2>
      <form onSubmit={handlePublish} style={{ display: 'grid', gap: '15px', maxWidth: '400px' }}>
        <input type="text" placeholder="اسم المنحة" onChange={e => setFormData({...formData, title: e.target.value})} required style={{padding:'10px'}} />
        <input type="text" placeholder="الدولة" onChange={e => setFormData({...formData, country: e.target.value})} required style={{padding:'10px'}} />
        <input type="url" placeholder="رابط التقديم الرسمي" onChange={e => setFormData({...formData, link: e.target.value})} required style={{padding:'10px'}} />
        <button type="submit" style={{ background: '#1a73e8', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', cursor: 'pointer' }}>
          نشر المنحة الآن
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
