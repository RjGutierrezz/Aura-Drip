<div align="center">
  <br />
      <img src="/frontend/assets/images/dashboard.jpg" alt="Project Banner">
    </a>
  <br />
</div>

<h3 align="center">StudyBreak-Bite app</h3>

# Aura Drip
Aura Drip is a full-stack wardrobe management and outfit recommendation app that
helps users organize their clothing, upload images, save favorites, and generate
outfit suggestions based on their own wardrobe. I built this project as a way to
strengthen my full-stack engineering skills while creating something practical,
visual, and user-focused.

**Frontend:** React + TypeScript + Vite  
**Backend:** Express + TypeScript + Prisma + PostgreSQL  
**Deployment:** Vercel (frontend) + Render (backend)

## Project Introduction
As a new computer science graduate, I wanted to build a project that felt closer to a real product than a tutorial app. Aura Drip started as an idea around fashion and personal organization, but it quickly became a way for me to practice full-stack development, authentication, file uploads, database design, protected APIs, deployment, and responsive frontend design.
The goal of the app is simple: give users a digital wardrobe where they can manage their clothing items and get outfit suggestions based on what they already own. Instead of relying on static sample data, the app stores user-specific items in a database and protects access through authentication.
This project was especially valuable for me because it forced me to work through real engineering problems such as:
- building authenticated CRUD routes
- handling user-specific data ownership
- connecting a deployed frontend and backend across different platforms
- configuring environment variables for local and production use
- debugging deployment issues related to Prisma, database URLs, and Supabase redirects
- improving mobile responsiveness after deployment

## Project Overview and Features
Aura Drip is a wardrobe organizer and outfit generator built around the idea of personalized fashion management.
A signed-in user can:
- create an account and sign in securely with Supabase Auth
- upload clothing items with images
- store item details such as category, color, style, occasion, and warmth
- browse their wardrobe in a searchable and filterable interface
- mark items as favorites
- edit or delete saved items
- generate outfit suggestions based on a natural language prompt
- view a profile page with wardrobe-related stats


