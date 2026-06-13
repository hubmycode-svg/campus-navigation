/* =========================================
   UOK CAMPUS NAVIGATOR - MAIN JS
========================================= */

/* ─────────────────────────────
   FACILITY DATA
──────────────────────────── */

const facilities = {
    library: {
        icon: "📚",
        name: "University Library",
        cat: "Academic Resource Centre",
        desc: "Main library with digital + print academic resources for all schools.",
        hours: "Mon–Fri: 8:00 AM – 10:00 PM"
    },
    admin: {
        icon: "🏛️",
        name: "Administration Block",
        cat: "University Management",
        desc: "VC office, registrar, finance, and student affairs services.",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    lecture: {
        icon: "🎓",
        name: "Lecture Halls",
        cat: "Academic Teaching",
        desc: "Lecture blocks A & B used for teaching and seminars.",
        hours: "Mon–Sat: 7:00 AM – 9:00 PM"
    },
    ict: {
        icon: "💻",
        name: "ICT Centre",
        cat: "Technology Hub",
        desc: "Computer labs, internet access, e-learning systems.",
        hours: "Mon–Fri: 7:00 AM – 10:00 PM"
    },
    agrilab: {
        icon: "🌿",
        name: "Agriculture Lab",
        cat: "Research Facility",
        desc: "Crop science, animal science and biotechnology labs.",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    clinic: {
        icon: "🏥",
        name: "Health Clinic",
        cat: "Medical Services",
        desc: "On-campus healthcare for students and staff.",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    hostel: {
        icon: "🏠",
        name: "Student Hostels",
        cat: "Accommodation",
        desc: "Secure on-campus student accommodation facilities.",
        hours: "24/7 Residents"
    },
    cafeteria: {
        icon: "🍽️",
        name: "Cafeteria",
        cat: "Dining Services",
        desc: "Affordable meals and snacks for students and staff.",
        hours: "6:30 AM – 9:00 PM"
    },
    sports: {
        icon: "⚽",
        name: "Sports Grounds",
        cat: "Sports & Recreation",
        desc: "Football, basketball, volleyball and athletics facilities.",
        hours: "6:00 AM – 8:00 PM"
    },
    chapel: {
        icon: "⛪",
        name: "University Chapel",
        cat: "Spiritual Life",
        desc: "Worship and prayer services for all faiths.",
        hours: "Daily"
    },
    farm: {
        icon: "🍃",
        name: "Tea Farm",
        cat: "Research & Heritage",
        desc: "Historic tea farm used for agricultural learning.",
        hours: "Daytime access"
    }
};


/* =========================================
   FACILITY DETAILS PANEL
========================================= */

function showFacility(id, event) {

    const f = facilities[id];
    if (!f) return;

    document.querySelectorAll(".map-node")
        .forEach(n => n.classList.remove("active"));

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }

    const panel = document.getElementById("detail-panel");

    if (!panel) return;

    panel.innerHTML = `
        <div class="detail-top">
            <div class="detail-icon">${f.icon}</div>
            <div class="detail-name">${f.name}</div>
            <div class="detail-cat">${f.cat}</div>
        </div>

        <div class="detail-body">
            <p>${f.desc}</p>

            <div class="detail-hours">
                ⏰ ${f.hours}
            </div>
        </div>
    `;
}


/* =========================================
   CAMPUS SWITCHER
========================================= */

function switchCampus(id, btn) {

    document.querySelectorAll(".campus-panel")
        .forEach(p => p.classList.remove("active"));

    document.getElementById("panel-" + id)
        .classList.add("active");

    document.querySelectorAll(".ctab")
        .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu = document.getElementById("mobile-menu");

    if (!menu) return;

    menu.style.display =
        menu.style.display === "block" ? "none" : "block";
}


/* =========================================
   CHAT SYSTEM (AI GUIDE)
========================================= */

function addMsg(text, cls) {

    const box = document.getElementById("chat-msgs");

    if (!box) return;

    const el = document.createElement("div");

    el.className = "msg " + cls;

    el.textContent = text;

    box.appendChild(el);

    box.scrollTop = box.scrollHeight;

    return el;
}

async function sendMsg() {

    const input = document.getElementById("chat-input");

    if (!input) return;

    const text = input.value.trim();

    if (!text) return;

    input.value = "";

    addMsg(text, "msg-user");

    const typing = addMsg("Typing...", "msg-bot");

    // Simulated AI response (replace with API later)
    setTimeout(() => {

        typing.remove();

        addMsg(
            "Habari! I am your UoK AI Guide. Ask about admissions, courses, hostels or campus life.",
            "msg-bot"
        );

    }, 1200);
}


/* =========================================
   QUICK PROMPTS
========================================= */

function quickAsk(q) {

    const input = document.getElementById("chat-input");

    if (!input) return;

    input.value = q;

    sendMsg();
}


/* =========================================
   HERO TYPING EFFECT
========================================= */

const heroText = "Explore the University of Kabianga Campus";

let i = 0;

function typeWriter() {

    const el = document.getElementById("typing-title");

    if (!el) return;

    if (i < heroText.length) {

        el.textContent += heroText.charAt(i);

        i++;

        setTimeout(typeWriter, 55);
    }
}

window.addEventListener("load", typeWriter);


/* =========================================
   NAV ACTIVE SCROLL EFFECT
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(a => a.classList.remove("active"));

            const link = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );

            if (link) link.classList.add("active");
        }
    });

}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));
// sticky navbar shrink on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

window.addEventListener("scroll", () => {
  const bg = document.querySelector(".hero-bg");
  if (bg) {
    bg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.2}px)`;
  }
});

function showTyping() {
  const box = document.getElementById('chat-msgs');
  const el = document.createElement('div');
  el.className = 'msg msg-typing';

  el.innerHTML = `
    <div class="typing-dots">
      <span></span><span></span><span></span>
    </div>
  `;

  box.appendChild(el);
  box.scrollTop = box.scrollHeight;
  return el;
}