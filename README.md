# Blog CMS (Client-Side)

A simple blog Content Management System (CMS) built using only **HTML**, **CSS**, and **JavaScript**.  
This project allows users to create, view, and store blog posts using the browser's **LocalStorage** — no backend required!

## 🔧 Features

- 📝 Add new blog posts with title and content
- 📋 View all saved blog posts on the homepage
- 📄 Read individual posts on a dedicated page
- 💾 Data stored locally using LocalStorage (persistent across refresh)
- 🎨 Fully responsive and clean UI

## 🖥️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage (no database)

## 🚀 Live Demo

🔗 [View Live Blog CMS](https://CSE-2201640100309.github.io/blog-cms/)  
_(Enable GitHub Pages from Settings > Pages to make this live)_

## 📁 File Structure

blog-cms/
├── index.html # Homepage showing all blog posts
├── new-post.html # Page to create a new blog post
├── post.html # Page to read a single blog post
├── style.css # Stylesheet
├── script.js # JavaScript logic
└── README.md # Project info (this file)

markdown
Copy
Edit

## 💡 How It Works

- Posts are stored in `localStorage` as JSON
- Each post has an `id`, `title`, and `content`
- Post links open `post.html?id=POST_ID`
- JavaScript reads from `localStorage` and renders dynamically
