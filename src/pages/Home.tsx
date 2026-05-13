import GlassCard from '../components/GlassCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* قسم الـ Hero بتصميم رسومي */}
      <section className="container py-20 text-right">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-l from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          يم سكولار
        </h1>
        <p className="text-gray-400 text-xl mb-10">الموقع يعمل بنجاح 🚀</p>

        {/* توزيع البطاقات الرسومية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">الأبحاث</h3>
            <p className="text-sm text-gray-400">استكشف أحدث الأوراق العلمية والأبحاث الأكاديمية.</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">التعليم</h3>
            <p className="text-sm text-gray-400">دروس ومصادر تعليمية متقدمة لطلاب العلم.</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">الشبكة</h3>
            <p className="text-sm text-gray-400">تواصل مع الباحثين والمتخصصين حول العالم.</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
