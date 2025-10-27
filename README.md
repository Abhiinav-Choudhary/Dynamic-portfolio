# 🧑‍💻 React Portfolio Builder

This is a **React-based dynamic portfolio generator app** built for the **React Developer Skill Assessment (Assessment 2)** by IPAGE UM Services Pvt. Ltd.

Users can select from multiple templates, fill out a detailed multi-section form, view their profile card, and open a **dynamic portfolio page** generated based on the selected template and stored via a mock API.

---

## 🚀 Features

### 🔹 Core Features
- **Template Selection:** Choose between multiple portfolio templates (Light / Dark themes)
- **Dynamic Form:** Fill a multi-section form with personal and professional details
- **Profile Card List:** Displays created user profiles with "View Portfolio" option
- **Dynamic Portfolio Pages:** Each portfolio is rendered with its selected template
- **Real API Integration:** Uses `json-server` for GET/POST requests
- **Fully Responsive UI:** Works smoothly on desktop and mobile devices

### 🔹 Templates
1. **Template A (Light & Minimal)**
   - Clean blue-accented theme
   - Simple layout, perfect for personal branding
   - Sections: Hero, About, Skills, Services, Projects, Testimonial, Contact

2. **Template B (Dark & Professional)**
   - Sleek dark theme with neon purple accents
   - Developer-style layout with blog section
   - Sections: Hero, About, Skills, Services, Projects, Testimonial, Blog, Contact

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Animation | Framer Motion |
| API | Axios + JSON Server |
| Data Storage | `db.json` (Mock API) |

---

## 🧩 Folder Structure
src/
├─ api/
│ └─ portfolioAPI.js
├─ components/
│ ├─ TemplateSelector.jsx
│ ├─ PortfolioForm.jsx
│ ├─ ProfileCard.jsx
│ ├─ templates/
│ │ ├─ TemplateA.jsx
│ │ └─ TemplateB.jsx
├─ pages/
│ ├─ Home.jsx
│ └─ PortfolioPage.jsx
├─ App.jsx
└─ main.jsx
