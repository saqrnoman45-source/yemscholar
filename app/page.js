export default function Home() {
  return (
    <main style={styles.page}>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h1 style={styles.logo}>YemScholar AI</h1>

        <button style={styles.btn}>
          تسجيل الدخول
        </button>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          منصة الذكاء الاصطناعي التعليمية 🚀
        </h1>

        <p style={styles.subtitle}>
          تعلم بشكل أسرع، افهم الدروس بسهولة، واحصل على إجابات فورية.
        </p>

        <button style={styles.primaryBtn}>
          ابدأ الآن
        </button>
      </section>

      {/* FEATURES */}
      <section style={styles.grid}>
        <div style={styles.card}>📘 شرح الدروس</div>
        <div style={styles.card}>⚡ حلول فورية</div>
        <div style={styles.card}>🧠 ذكاء اصطناعي</div>
      </section>

      {/* LOGIN SECTION (شكل بسيط) */}
      <section style={styles.login}>
        <h2>تسجيل الدخول</h2>

        <input style={styles.input} placeholder="البريد الإلكتروني" />
        <input style={styles.input} placeholder="كلمة المرور" type="password" />

        <button style={styles.primaryBtn}>
          دخول
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 YemScholar AI</p>
        <h3 style={{ color: "#60a5fa" }}>
          صقر نعمان العفيف ✍️
        </h3>
      </footer>

    </main>
  );
}

const styles = {
  page: {
    fontFamily: "sans-serif",
    background: "#0f172a",
    color: "white",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid #1e293b"
  },

  logo: {
    fontSize: "18px",
    fontWeight: "bold"
  },

  btn: {
    background: "#334155",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px"
  },

  hero: {
    textAlign: "center",
    padding: "70px 20px"
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold"
  },

  subtitle: {
    marginTop: "15px",
    color: "#cbd5e1"
  },

  primaryBtn: {
    marginTop: "20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "