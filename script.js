// =========================
// TAB SWITCHING
// =========================

const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        sections.forEach(section => {
            section.classList.remove("active");
            section.style.display = "none";
        });

        if (sections[index]) {
            sections[index].classList.add("active");
            sections[index].style.display = "block";
        }
    });
});

// =========================
// FACILITY INFORMATION
// =========================

const facilities = {
    library: {
        title: "📚 University Library",
        description: "The University Library provides books, journals, research databases, internet access, and study spaces for students."
    },

    administration: {
        title: "🏛️ Administration Block",
        description: "Contains the Vice Chancellor's office, Registrar, Finance offices, and student services."
    },

    lecture: {
        title: "🎓 Lecture Halls",
        description: "Modern lecture rooms used for teaching and academic activities across all schools."
    },

    hostels: {
        title: "🏠 Student Hostels",
        description: "Accommodation facilities for students with water, security, and internet services."
    },

    cafeteria: {
        title: "🍽️ Cafeteria",
        description: "Provides affordable meals, snacks, tea, and refreshments to students and staff."
    },

    sports: {
        title: "⚽ Sports Grounds",
        description: "Football pitch, volleyball courts, athletics field, and other recreational facilities."
    },

    clinic: {
        title: "🏥 Health Clinic",
        description: "Offers medical services, consultations, first aid, and health support."
    },

    ict: {
        title: "💻 ICT Centre",
        description: "Computer laboratories, internet access, software training, and technical support."
    }
};

const facilityCards = document.querySelectorAll(".facility-card");
const infoPanel = document.querySelector(".info-panel");

facilityCards.forEach(card => {

    card.addEventListener("click", () => {

        facilityCards.forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        const name = card.querySelector(".fac-name").textContent;

        let facilityKey = "";

        if (name.includes("Library")) facilityKey = "library";
        else if (name.includes("Administration")) facilityKey = "administration";
        else if (name.includes("Lecture")) facilityKey = "lecture";
        else if (name.includes("Hostels")) facilityKey = "hostels";
        else if (name.includes("Cafeteria")) facilityKey = "cafeteria";
        else if (name.includes("Sports")) facilityKey = "sports";
        else if (name.includes("Health")) facilityKey = "clinic";
        else if (name.includes("ICT")) facilityKey = "ict";

        const facility = facilities[facilityKey];

        if (facility) {
            infoPanel.innerHTML = `
                <h3>${facility.title}</h3>
                <p>${facility.description}</p>
            `;
        }
    });
});

// =========================
// CAMPUS BUTTONS
// =========================

const campusButtons = document.querySelectorAll(".ctab");

campusButtons.forEach(button => {
    button.addEventListener("click", () => {

        campusButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
    });
});

// =========================
// AI CHAT DEMO
// =========================

const sendBtn = document.querySelector(".send-btn");
const chatInput = document.querySelector(".ai-footer input");
const chatMessages = document.querySelector(".ai-messages");

function addMessage(message, sender) {

    const div = document.createElement("div");

    div.classList.add("msg");
    div.classList.add(sender);

    div.textContent = message;

    chatMessages.appendChild(div);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(userMessage) {

    let reply = "Welcome to UOK Campus Navigator.";

    const msg = userMessage.toLowerCase();

    if (msg.includes("library")) {
        reply = "The University Library is located near the Administration Block.";
    }

    else if (msg.includes("hostel")) {
        reply = "Student hostels are located within the main campus.";
    }

    else if (msg.includes("admission")) {
        reply = "Visit the Admissions Office or the UOK website for application procedures.";
    }

    else if (msg.includes("school")) {
        reply = "UOK has five schools offering various undergraduate and postgraduate programmes.";
    }

    else if (msg.includes("campus")) {
        reply = "UOK has Main Campus, Kapkatet Campus, and Kericho Town Campus.";
    }

    addMessage(reply, "bot");
}

if (sendBtn) {

    sendBtn.addEventListener("click", () => {

        const message = chatInput.value.trim();

        if (message === "") return;

        addMessage(message, "user");

        chatInput.value = "";

        setTimeout(() => {
            botReply(message);
        }, 700);
    });

    chatInput.addEventListener("keypress", e => {

        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
}

// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);
});