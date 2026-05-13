import GlassCard from '../components/GlassCard';
import { LayoutDashboard, Users, FileText, TrendingUp, Bell } from 'lucide-react';

const Dashboard = () => {
  // بيانات تجريبية للإحصائيات
  const stats = [
    { title: 'الباحثين المسجلين', value: '1,250', icon: <Users className="text-blue-400" />, trend: '+12%' },
    { title: 'الأبحاث المنشورة', value: '342', icon: <FileText className="text-emerald-400" />, trend: '+5%' },
    { title: 'المشاهدات الكلية', value: '15.4K', icon: <TrendingUp className="text-purple-400" />, trend: '+18%' },
  ];

  return (
    <div className="container mx-auto py-10 px-6 text-right">
      
      {/* رأس لوحة التحكم */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="flex items-center gap-3 order-2 md:order-1">
          <Bell className="text-gray-400 cursor-pointer hover:text-white transition-colors" size={24} />
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center font-bold">
            SN
          </div>
        </div>
        
        <div className="flex items-center gap-3 order-1 md:order-2">
          <h1 className="text-3xl font-bold text-white">لوحة التحكم</h1>
          <LayoutDashboard className="text-emerald-400" size={32} />
        </div>
      </div>

      {/* قسم الإحصائيات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((item, index) => (
          <GlassCard key={index}>
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                {item.trend}
              </span>
              <div className="p-3 bg-white/5 rounded-xl">
                {item.icon}
              </div>
            </div>
            <div className="mt-4 text-right">
              <p className="text-gray-400 text-sm">{item.title}</p>
              <h3 className="text-3xl font-bold text-white mt-1">{item.value}</h3>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* قسم النشاط الأخير والأبحاث الجديدة */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* قائمة الأبحاث الأخيرة */}
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">آخر الأبحاث المضافة</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <span className="text-xs text-gray-500">منذ 2 ساعة</span>
                <div className="text-right">
                  <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">دراسة حول الذكاء الاصطناعي في اليمن</p>
                  <p className="text-xs text-gray-500">بواسطة: د. أحمد محمد</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* قسم التنبيهات أو الإعلانات */}
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">تنبيهات المنصة</h3>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-blue-200 mb-4">
            يوجد تحديث جديد متاح لنظام رفع الملفات، يرجى مراجعة الدليل.
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-sm text-emerald-200">
            تم قبول 5 أوراق بحثية جديدة في قسم التكنولوجيا اليوم.
          </div>
        </GlassCard>

      </div>

    </div>
  );
};

export default Dashboard;
