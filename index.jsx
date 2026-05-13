import { useState } from "react"; import { motion } from "framer-motion"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function YemScholarRedesign() { const [dark, setDark] = useState(true);

return ( <div className={dark ? "dark bg-gray-950 text-white" : "bg-white text-gray-900"}> {/* NAVBAR */} <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800"> <h1 className="text-xl font-bold">YemScholar AI</h1> <div className="flex gap-3"> <Button onClick={() => setDark(!dark)}> {dark ? "Light" : "Dark"} </Button> </div> </nav>

{/* HERO */}
  <section className="text-center py-24 px-4">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-bold"
    >
      منصة الذكاء الاصطناعي التعليمية
    </motion.h1>

    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      تجربة حديثة تساعدك في الدراسة، البحث، وفهم المواد بطريقة أسرع وأكثر ذكاء.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <Button className="px-6 py-3 text-lg">ابدأ الآن</Button>
      <Button variant="outline">تعرف أكثر</Button>
    </div>
  </section>

  {/* FEATURES */}
  <section className="grid md:grid-cols-3 gap-6 px-6 py-16">
    {[
      { title: "ذكاء اصطناعي تعليمي", desc: "شرح وتبسيط الدروس بسهولة" },
      { title: "حلول فورية", desc: "إجابات سريعة ودقيقة للأسئلة" },
      { title: "واجهة حديثة", desc: "تصميم سريع وسهل الاستخدام" },
    ].map((item, i) => (
      <Card key={i} className="rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-400 mt-2">{item.desc}</p>
        </CardContent>
      </Card>
    ))}
  </section>

  {/* DEMO SECTION */}
  <section className="px-6 py-16 text-center bg-gray-900/40">
    <h2 className="text-3xl font-bold">جرب المنصة الآن</h2>
    <p className="text-gray-400 mt-2">واجهة مبسطة للتفاعل مع الذكاء الاصطناعي</p>
    <div className="mt-6 max-w-2xl mx-auto bg-gray-800 rounded-2xl p-4 text-left">
      <p className="text-sm text-gray-300">مثال:</p>
      <p className="mt-2">اشرح لي معادلة فيثاغورس بطريقة سهلة</p>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="text-center py-10 border-t border-gray-800">
    <p className="text-gray-500">© 2026 YemScholar AI - جميع الحقوق محفوظة | صقر نعمان العفيف</p>
  </footer>
</div>

); }
