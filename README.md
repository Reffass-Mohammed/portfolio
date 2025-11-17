# Mohammed Reffass - Personal Portfolio

This is the official repository for my personal developer portfolio. It's a fully responsive, dynamic website built from scratch to showcase my skills, projects, and professional journey.

**Visit the live site:** **[https://reffass-mohammed.github.io/portfolio/](https://reffass-mohammed.github.io/portfolio/)**

---

## 🚀 Core Features

* **Dynamic Project Loading:** Projects are loaded asynchronously from a `projects.json` file, making it easy to update the portfolio without touching the HTML.
* **Modern UI/UX:** Features a professional dark-mode, glassmorphism design with a custom animated particle background (`<canvas>`).
* **Advanced Animations:** Includes a multi-text "typing effect" for the hero section and smooth "slide-up" animations on scroll, powered by the Intersection Observer API.
* **Active Navigation:** The navigation bar automatically highlights the section currently in the viewport.
* **Fully Responsive:** Adapts seamlessly from large desktop monitors to mobile devices.
* **Professional Branding:** Includes a custom `<RM/>` logo and polished UI elements.

## 💻 Tech Stack

* **HTML5:** Semantic structure for optimal accessibility and SEO.
* **CSS3:** Custom properties, Flexbox, Grid, and advanced animations for a modern look.
* **Tailwind CSS:** Used for utility classes to speed up development.
* **JavaScript (ES6+):**
    * **Fetch API:** To load projects dynamically from `projects.json`.
    * **Intersection Observer API:** For performance-optimized scroll animations.
    * **DOM Manipulation:** To build the UI dynamically and handle all interactive elements.

## 🏃 How to Run Locally

Due to browser security policies (CORS) related to the `fetch()` API call for `projects.json`, you cannot run this project by simply opening the `index.html` file in your browser.

You must run it on a local server.

**The easiest way (using VS Code):**
1.  Clone this repository:
    ```bash
    git clone [https://github.com/Reffass-Mohammed/portfolio.git](https://github.com/Reffass-Mohammed/portfolio.git)
    ```
2.  Open the folder in VS Code.
3.  Install the **"Live Server"** extension (by Ritwick Dey).
4.  Right-click on `index.html` and select **"Open with Live Server"**.

## 🔮 Future Plans

* [ ] **Develop Case Study Pages:** Create individual HTML pages for each project to detail the problem, solution, and my learning process.
* [ ] **Activate Contact Form:** Integrate a backend service (like Formspree or Netlify Forms) to make the contact form fully functional.

## 👤 Author

**Mohammed Reffass**
* **GitHub:** [@Reffass-Mohammed](https://github.com/Reffass-Mohammed)
* **LinkedIn:** [Mohammed Reffass](https://www.linkedin.com/in/mohammed-reffass-3730582a9/)