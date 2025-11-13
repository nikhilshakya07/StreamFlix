# 🎬 StreamFlix - Streaming Dashboard

A modern Netflix-style streaming dashboard built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🔗 Links

**Live Demo:** [Add Vercel URL here]  
**Repository:** [Add GitHub URL here]

---

## ✨ Features

- 🎥 Browse trending, popular, and top-rated movies
- 🔍 Search functionality
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 14
- 🎨 Smooth animations and hover effects
- 🖼️ Optimized images with Next.js Image

---

## 🛠️ Tech Stack

- **Next.js 14** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TMDB API** - Movie data
- **Vercel** - Deployment

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <repo-url>
cd streaming-dashboard
npm install
```

### 2. Add Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

Get your free API key: https://www.themoviedb.org/settings/api

### 3. Run
```bash
npm run dev
```

Open http://localhost:3000

---

## 📁 Project Structure
```
streaming-dashboard/
├── app/
│   ├── movie/[id]/page.tsx    # Movie detail pages
│   ├── page.tsx               # Homepage
│   └── layout.tsx             # Root layout
├── components/
│   ├── ui/                    # Header, Hero, MovieRow
│   └── shared/                # MovieCard
├── lib/
│   ├── tmdb.ts               # API functions
│   └── utils.ts              # Helpers
├── types/
│   └── movie.ts              # TypeScript types
└── .env.local                # Environment variables
```

---

## 🎯 Key Features

### Homepage
- Hero banner with trending movie
- 4 movie categories with horizontal scrolling
- Interactive search bar
- Smooth hover effects on cards

### Movie Details
- Dynamic routes (`/movie/[id]`)
- Full movie information
- Backdrop and poster images
- Back navigation

---

## 📦 Deployment (Vercel)

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## 📜 Scripts
```bash
npm run dev      # Development
npm run build    # Build for production
npm run start    # Start production
npm run lint     # Lint code
```

---

## 🐛 Known Issues

- Search currently shows alert (can be extended with TMDB search API)

---

## 📄 License

MIT - Free to use for learning

---

Built with Next.js 14 + TypeScript + Tailwind CSS