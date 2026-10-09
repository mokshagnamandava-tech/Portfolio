const portfolioData = {
  personalInfo: {
    name: "Mandava Mokshagna",
    role: "Full-Stack & Systems Developer",
    college: "QIS College of Engineering and Technology",
    education: "II-Year B.Tech in Computer Science",
    bio: "Passionate II-year B.Tech student focused on machine learning, data analysis, and developing intelligent AI solutions. Driven by curiosity to explore ML algorithms, build predictive models, and transform data into meaningful insights.",
    email: "mokshagnamandava@gmail.com",
    location: "Ongole, Andhra Pradesh, India",
    dob: "April 27, 2007",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/mandava-mokshagna-772735408",
    resumeUrl: "#"
  },

  stats: [
    { label: "Year of Study", value: "II-year" },
    { label: "Primary Focus", value: "Machine Learning" },
    { label: "Core Skills", value: "4+ Languages" }
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["C", "Python", "Java (Basic)", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "VS Code"]
    }
  ],

  projects: [
    {
      title: "Stack Game",
      description: "An interactive, arcade-style block stacking game built to test timing, precision, and state management mechanics.",
      tags: ["HTML5", "CSS3", "JavaScript", "Game Mechanics"],
      demoUrl: "https://moksha-stackgame.bytexl.live",
      githubUrl: "https://github.com/"
    }
  ]
};


document.addEventListener("DOMContentLoaded", () => {
  // Render Personal Information
  const info = portfolioData.personalInfo;
  document.getElementById("hero-name").textContent = info.name;
  document.getElementById("hero-bio").textContent = info.bio;

  document.getElementById("about-text-1").textContent = 
    `Currently pursuing my ${info.education} at ${info.college}. I focus on developing machine learning models, optimizing algorithms, and building intelligent solutions that transform data into meaningful insights.`;
  document.getElementById("about-text-2").textContent = 
    `I enjoy solving complex data-driven problems, exploring machine learning algorithms, and developing intelligent models that uncover patterns and deliver predictive insights.`;

  // Links
  document.getElementById("resume-btn").href = info.resumeUrl;
  document.getElementById("mobile-resume-btn").href = info.resumeUrl;
  document.getElementById("link-github").href = info.github;
  document.getElementById("link-linkedin").href = info.linkedin;
  document.getElementById("link-email").href = `mailto:${info.email}`;

  document.getElementById("info-email").textContent = info.email;
  document.getElementById("info-email").href = `mailto:${info.email}`;
  document.getElementById("info-location").textContent = info.location;
  document.getElementById("info-college").textContent = info.college;

  document.getElementById("year").textContent = new Date().getFullYear();

  // Render Stats Cards
  const statsContainer = document.getElementById("stats-container");
  portfolioData.stats.forEach(stat => {
    const card = document.createElement("div");
    card.className = "bg-slate-900/60 border border-slate-800 p-4 rounded-xl";
    card.innerHTML = `
      <div class="text-sm text-slate-400">${stat.label}</div>
      <div class="text-lg font-bold text-slate-100">${stat.value}</div>
    `;
    statsContainer.appendChild(card);
  });

  // Render Skills
  const skillsContainer = document.getElementById("skills-container");
  portfolioData.skills.forEach(skillGroup => {
    const groupCard = document.createElement("div");
    groupCard.className = "bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl";
    
    const tagsHTML = skillGroup.items.map(item => `
      <span class="px-3 py-1 bg-slate-800 text-indigo-300 rounded-lg text-sm border border-slate-700/60 font-medium">${item}</span>
    `).join("");

    groupCard.innerHTML = `
      <h3 class="text-md font-semibold text-slate-200 mb-4">${skillGroup.category}</h3>
      <div class="flex flex-wrap gap-2">${tagsHTML}</div>
    `;
    skillsContainer.appendChild(groupCard);
  });

  // Render Projects
  const projectsContainer = document.getElementById("projects-container");
  portfolioData.projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-colors";
    
    const tagsHTML = project.tags.map(tag => `
      <span class="text-xs font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md">${tag}</span>
    `).join("");

    projectCard.innerHTML = `
      <div>
        <h3 class="text-xl font-bold text-slate-100 mb-2">${project.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-6">${tagsHTML}</div>
      </div>
      <div class="flex items-center space-x-4 pt-4 border-t border-slate-800/60">
        <a href="${project.demoUrl}" target="_blank" class="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
          Live Demo <i data-lucide="external-link" class="w-4 h-4"></i>
        </a>
        <a href="${project.githubUrl}" target="_blank" class="text-sm font-medium text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors">
          GitHub <i data-lucide="github" class="w-4 h-4"></i>
        </a>
      </div>
    `;
    projectsContainer.appendChild(projectCard);
  });

  // Initialize Lucide Icons
  lucide.createIcons();

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close Mobile Menu on Nav Click
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // Form Validation Handling
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusMsg.classList.remove("hidden");
    statusMsg.className = "text-xs text-center text-emerald-400 font-medium";
    statusMsg.textContent = "Thank you! Your message has been recorded.";
    form.reset();
  });
});