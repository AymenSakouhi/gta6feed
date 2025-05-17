# 📰 GTA 6 News Feed

A modern web app that delivers everything you need to know about **GTA 6** — including news, leaks, official updates, and curated tweets from X (formerly Twitter). Built with **Next.js 14**, **Tailwind CSS**, and optional scraping integrations.

---

## 🚀 Features

- ✅ Curated GTA 6 news feed
- 🧠 Scrapes or fetches latest tweets from X.com (Twitter)
- 🔍 Search and filter news and tweets
- 📱 Responsive design for mobile and desktop
- ⚡ Fast, modern Next.js 14 architecture (App Router)
- 🌐 Ready to deploy on Vercel

---

## 📸 Preview

![App Screenshot Placeholder](https://via.placeholder.com/900x500.png?text=GTA+6+News+Feed+App+Preview)

---

## 🛠️ Tech Stack

| Tool         | Purpose                    |
| ------------ | -------------------------- |
| Next.js 14   | React framework            |
| Tailwind CSS | UI styling                 |
| TypeScript   | Type safety                |
| Puppeteer\*  | Scraping tweets (optional) |
| RapidAPI\*   | Twitter/X API (optional)   |

---

## 📂 Project Structure

```bash
gta6-news/
├── app/ # App Router pages and layout
│ ├── layout.tsx # Root layout wrapper
│ ├── page.tsx # Homepage (GTA 6 News Feed)
│ └── tweets/ # Tweets feed route
│ └── page.tsx # Page showing latest tweets
│
├── components/ # Reusable UI components
│ ├── NewsCard.tsx # Card component for news articles
│ └── TweetCard.tsx # Card component for tweet previews
│
├── lib/ # Utility and data-fetching functions
│ ├── fetchNews.ts # News fetching or scraping logic
│ └── fetchTweets.ts # X/Twitter scraping or API logic
│
├── public/ # Static assets (images, icons)
│
├── styles/ # Global and custom styles
│ └── globals.css # Tailwind CSS entry
│
├── .env.local # Environment variables (API keys, etc.)
├── tailwind.config.ts # Tailwind configuration
├── postcss.config.js # PostCSS config for Tailwind
├── next.config.js # Next.js configuration
├── tsconfig.json # TypeScript configuration
└── package.json # Dependencies and scripts
```

---

## 🧪 Setup & Development

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/gta6-news.git
cd gta6-news
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Dev Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

---

## ⚙️ Environment Variables (Optional)

If using Twitter API or a scraping service, set up:

```env
TWITTER_BEARER_TOKEN=your_token_here
```

Or configure Puppeteer logic in `lib/fetchTweets.ts`.

---

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

---

## 🤖 To-Do & Roadmap

- [ ] Real-time tweet scraping
- [ ] Admin panel for manual news
- [ ] Notifications / alerts
- [ ] RSS support
- [ ] User comments & voting

---

## 📄 License

MIT License © 2025

---

## 💬 Contributing

PRs and issues welcome! Let’s build the best GTA 6 hub out there.

---

## ✨ Credits

- [Rockstar Games](https://rockstargames.com)
- X.com (Twitter)
- Community leakers and fans 🙌
