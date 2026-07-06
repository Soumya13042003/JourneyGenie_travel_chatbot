# 🧞 JourneyGenie AI Travel Chatbot & Planner

**JourneyGenie** is a premium, conversational AI travel planning assistant web application. It features a split-panel interface where users chat directly with an agent to outline their travel preferences, answer diagnostic planning questions, and dynamically adjust their generated day-by-day itineraries in real-time.

Designed with clean HTML5, custom CSS glassmorphism themes, and modular vanilla JavaScript, the application runs entirely client-side. It features a robust **offline database of 12 detailed 10-day itineraries** and smart local parsing to mutate the trip dashboard directly from chat messages.

---

## 🌟 Key Features

* **💬 Conversational Chat Interface**: A polished messaging board featuring interactive suggestion chips, typing indicators, and step-by-step guidance.
* **🗺️ Day-by-Day Route Itinerary**: Renders a vertical scroll-locked timeline dashboard detailing morning, afternoon, and evening activities.
* **📊 Estimated Budget Charts**: Calibrates flight, lodging, food, transit, and shopping expenses dynamically based on traveler count, duration, and budget tier.
* **🔒 Pure Offline Mode**: Requires no setup, keys, or internet. Includes curated 10-day local itineraries for:
  - *India North-East*: Meghalaya, Sikkim, Tawang
  - *Himalayas*: Ladakh, Kashmir, Shimla & Manali
  - *Bengal Coast*: Darjeeling, Digha, Kolkata
  - *International*: Tokyo, Paris, Bali
* **⚡ Smart Local Parsing (Real-time mutations)**: Modify the itinerary directly by messaging the bot (e.g. typing *"change budget to luxury"*, *"make it 7 days"*, *"set transport to subway"*, or *"dietary to vegetarian"* will immediately update the dashboard).
* **🗑️ Session Clean Up**: Reset the chat logs and dashboard state instantly with the "Reset" button or by typing *"reset"*.
* **🖨️ Print & PDF Ready**: Custom print styles hide the chatbot panel and format a pristine multi-page printout or PDF layout.
* **🌓 Dual Themes**: Smooth transitions between deep dark mode and modern light mode.

---

## 📁 File Structure

```
adk_work/
├── index.html              # Core webpage layout (split-panel view)
├── style.css               # Theme systems, responsive styles, and printing rules
├── app.js                  # Conversation state-machine, database, and local math
├── index_standalone.html   # Compiled standalone version (inlined CSS & JS)
├── server.js               # Lightweight static Node.js server (Port 3000)
├── build.js                # Bundle builder compiling index/css/js into index_standalone
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Method 1: Standalone Open (Easiest)
Simply double-click **`index_standalone.html`** in your file manager. It will load in your browser instantly and run offline without any local server required.

### Method 2: Node.js Local Server
Run a clean local development server:
```bash
node server.js
```
Then navigate to **[http://localhost:3000/](http://localhost:3000/)** in your browser.

---

## 🛠️ Building the Standalone File

If you make modifications to `index.html`, `style.css`, or `app.js` and want to compile a fresh standalone file, run the builder script:
```bash
node build.js
```
This will automatically generate a new, updated **`index_standalone.html`** in your directory.

---

## 📤 Server Deployment

To upload this project to a live hosting server (Netlify, Vercel, GitHub Pages, or any shared hosting):
1. **Option A**: Upload `index.html`, `style.css`, and `app.js` together in the root directory.
2. **Option B**: Rename `index_standalone.html` to `index.html` and upload it as a single-file deployment.
