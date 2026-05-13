export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      
      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #1e293b"
      }}>
        <h1>YemScholar AI</h1>
        <button style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px"
        }}>
          تسجيل الدخول
        </button>
      </nav>

      {/* Hero */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{
          fontSize: "45px",
          fontWeight: "bold"
        }}>
          منصة الذكاء الاصطناعي التعليمية
        </h1>

        <p style={{
          marginTop: "20px",
          color: "#cbd5e1"
        }}>
          تعلم بشكل أسرع وأكثر ذكاء مع YemScholar AI
        </p>

        <button style={{
          marginTop: "30px",
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "12px",
          fontSize: "18px"
        }}>
          ابدأ الآن
        </button>
      </section>

      {/* Features */}
      <section style={{
        display: "grid",
        gap: "20px",
        padding: "20px"
      }}>
        {[
          "شرح الدروس بالذكاء الاصطناعي",
          "حل الواجبات بسرعة",
          "واجهة احترافية وسهلة"
        ].map((item, i) => (
          <div key={i} style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px"
          }}>
            <h2>{item}</h2>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "40px",
        marginTop: "50px",
        borderTop: "1px solid #1e293b"
      }}>
        <p>© 2026 جميع الحقوق محفوظة</p>

        <h2 style={{
          marginTop: "10px",
          color: "#60a5fa"
        }}>
          صقر نعمان العفيف ✍️
        </h2>
      </footer>
    </main>
  );
          }
