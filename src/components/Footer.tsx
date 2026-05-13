import { Facebook, Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
          
          {/* العمود الأول: عن المنصة */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              YEM SCHOLAR
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              منصة أكاديمية يمنية تهدف إلى تعزيز البحث العلمي والتعاون المعرفي بين الباحثين والطلاب حول العالم.
            </p>
            <div className="flex justify-end gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-white font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-emerald-400 transition-colors">الرئيسية</a></li>
              <li><a href="/research" className="hover:text-emerald-400 transition-colors">الأبحاث العلمية</a></li>
              <li><a href="/network" className="hover:text-emerald-400 transition-colors">شبكة الباحثين</a></li>
              <li><a href="/about" className="hover:text-emerald-400 transition-colors">عن المنصة</a></li>
            </ul>
          </div>

          {/* العمود الثالث: الدعم */}
          <div>
            <h4 className="text-white font-semibold mb-6">الدعم والمساعدة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>

          {/* العمود الرابع: التواصل المباشر */}
          <div>
            <h4 className="text-white font-semibold mb-6">تواصل معنا</h4>
            <p className="text-gray-400 text-sm mb-4">اشترك في نشرتنا الإخبارية للحصول على أحدث الأبحاث.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-emerald-400 text-right"
              />
              <button className="mt-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                اشتراك
              </button>
            </div>
          </div>

        </div>

        {/* خط الحقوق السفلي */}
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-500 text-xs">
          <p>© {currentYear} يم سكولار - جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
