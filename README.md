# CV-Sam  
**Personal CV Website – Sameha Salem**

## Project Overview  
This repository contains my personal CV/portfolio website, built with HTML, CSS & JavaScript.  
It is designed to showcase my profile, skills, education, projects and contact details in a clean and modular way.

## Project Structure  
```

CV-Sam/
├── index.html
├── css/
│   └── global.css
├── img/
│   └── sam-bild.jpg
├── js/
│   └── (your JavaScript files if any)
└── sections/
├── about.html
├── skills.html
├── projects.html
├── education.html
└── contact.html

````

##  Technologies  
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Modular loading of HTML sections via `fetch()`  
- Responsive design mindset  

## How to Run It Locally  
1. Clone the repository  
   ```bash
   git clone https://github.com/SamehaSalem87/CV-Sam.git
````

2. Open the folder in your code editor (e.g., Visual Studio Code)
3. Start a local server (e.g., VS Code extension “Live Server”)
4. Navigate to `http://127.0.0.1:5500/` (or the port your server uses)
5. Browse the sections loading dynamically in the main content area

## Key Features

* Each section (`about.html`, `skills.html`, …) is loaded dynamically into the `<main>` tag — clean and scalable.
* Easy to add new sections by simply creating a new `.html` file in `sections/` and adding its name into the JavaScript array.
* Professional layout tailored for a junior software developer’s portfolio.

