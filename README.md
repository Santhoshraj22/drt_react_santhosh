  Digantara Satellite Explorer

A modern, responsive React application to search, filter, and explore satellite data in real-time. Built with Vite, Tailwind CSS, and React Virtualized Lists for performance.

---

 Features

- 🔍 Search by satellite name or NORAD ID (with partial matching)
- 🎯 Filter by Object Type and Orbit Code (multi-select)
- 📊 Table with Virtualized Rows for large datasets (react-window)
- ✅ Select/Deselect Rows with checkbox (max 10 selections)
- 📦 Selected Satellites View shown on right side panel
- 💾 Persist Selections to localStorage
- 🔄 Loading + Error Handling built-in
- 🧪 API Integration with [Digantara backend](https://backend.digantara.dev/)

---

 Tech Stack

- React 18 with Vite
- Tailwind CSS for styling
- React Select for dropdowns
- React Window for virtualized tables
- Axios for API calls
- react-router-dom for navigation
---

 Installation

git clone https://github.com/yourusername/digantara-satellite-explorer.git
cd digantara
npm install
npm run dev

