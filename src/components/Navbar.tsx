import { Link } from 'react-router-dom';

// داخل مكون الـ Navbar...
<div className="hidden md:flex items-center gap-8 text-sm">
  <Link title="الرئيسية" to="/" className="text-white hover:text-blue-400">الرئيسية</Link>
  <Link title="لوحة التحكم" to="/dashboard" className="text-gray-400 hover:text-blue-400">لوحة التحكم</Link>
  <Link title="الأبحاث" to="/research" className="text-gray-400 hover:text-blue-400">الأبحاث</Link>
</div>
