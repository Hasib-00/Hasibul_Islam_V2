export const profile = {
  name: "Md Hasibul Islam",
  email: "mhhasibul.is@gmail.com",
  phone: "01329529026",
  location: "Bashundhara R/A, Dhaka",
  linkedin: "https://www.linkedin.com/in/hasibul-islama6a434385/",
  github: "https://github.com/Hasib-00",
  cv: "/Md-Hasibul-Islam-CV.pdf",
  roles: ["Artificial Intelligence", "Machine Learning", "Data Science", "Deep Learning", "Data Analytics", "Software Development"],
  intro: "I build software and study how machines learn from data. My foundation is native Android engineering; my direction is artificial intelligence, machine learning and data science.",
};

export const education = [
  { title: "BSc in Artificial Intelligence and Data Science", place: "Green University of Bangladesh", status: "Currently studying", note: "Focus areas: artificial intelligence, machine learning, deep learning, data science and analytics." },
  { title: "Diploma in Engineering, Computer Science & Technology", place: "Dhaka Polytechnic Institute, Dhaka", status: "Completed", note: "Foundation in programming, databases and software development." },
];

export const skillGroups = [
  { name: "Languages", items: ["Python", "Kotlin", "XML", "SQL (MySQL, SQLite)"] },
  { name: "Software development", items: ["Android Studio", "Jetpack Compose", "Retrofit", "Room Database", "Firebase", "MVVM", "Clean Architecture"] },
  { name: "Collaboration", items: ["Git", "GitHub", "Leadership", "Team collaboration", "Time management", "Client communication"] },
  { name: "Learning focus", items: ["Machine learning", "Deep learning", "Data science", "Data analytics"] },
];

export type Project = { slug: string; title: string; kind: string; summary: string; points: string[]; tech: string[] };
export const projects: Project[] = [
  { slug: "social-chat", title: "Mini Social Media & Real-Time Chat", kind: "Mobile", summary: "Android social app with real-time messaging, offline caching and a clean, layered architecture.",
    points: ["Kotlin and XML interface that is responsive and user-centric.", "Firebase Authentication, Firestore and Storage for user management, real-time messaging and media.", "Room database for structured local caching and offline access.", "MVVM with Clean Architecture for a scalable, maintainable codebase.", "Retrofit, REST APIs and JSON for network communication."],
    tech: ["Kotlin", "XML", "MVVM", "Firebase", "Firestore", "Room", "Retrofit"] },
  { slug: "location-sharing", title: "Location Sharing App", kind: "Mobile", summary: "Native Android app for real-time location sharing and map visualization with battery-aware tracking.",
    points: ["Continuous background tracking with the Fused Location Provider, tuned for battery usage.", "Firebase or socket-based backend for real-time data sync.", "MVVM, Coroutines/Flow and dependency injection (Hilt or Koin).", "Material Design interface with Google Maps SDK."],
    tech: ["Kotlin", "MVVM", "Coroutines", "Flow", "Google Maps SDK", "Firebase", "Jetpack"] },
  { slug: "news-app", title: "News Application", kind: "Data & APIs", summary: "News reader that pulls live articles from a REST API with category filters, search and pagination.",
    points: ["REST API integration with Retrofit.", "Category filtering and keyword search.", "Detailed article view with images, headlines, timestamps and descriptions.", "Pagination for smooth scrolling and faster loads on large datasets."],
    tech: ["Kotlin", "Retrofit", "REST API", "MVVM"] },
  { slug: "weather-app", title: "Weather Application", kind: "Data & APIs", summary: "Real-time weather app that updates automatically from the user's GPS location.",
    points: ["OpenWeatherMap API for temperature, humidity, wind speed and conditions.", "Retrofit network layer with strong error handling.", "GPS-based location detection for automatic updates."],
    tech: ["Kotlin", "Retrofit", "OpenWeatherMap API", "GPS"] },
];

export const experience = [
  { title: "Academic Internship, Mobile Application Development with Flutter", place: "Daffodil International Professional Training Institute", note: "Hands-on mobile development internship as part of the diploma programme." },
];

export const certifications = [
  { title: "Android Mobile Application Development (Level 4)", issuer: "Daffodil International Professional Training Institute", note: "Professional training, certified by the National Skill Development Authority (NSDA)." },
];

export const nav = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" }, { href: "/projects", label: "Projects" }, { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" }, { href: "/contact", label: "Contact" },
];
