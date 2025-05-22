import { SEARCHQUERY } from '@/lib/contants'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  // Get start of today
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  // Get start of tomorrow
  const startOfTomorrow = new Date(startOfToday)
  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1)

  // Check if news was already created today
  const isNewsUpdated = await prisma.news.findFirst({
    where: {
      createdAt: {
        gte: startOfToday,
        lt: startOfTomorrow,
      },
    },
  })

  // If news already exists for today, return it
  if (isNewsUpdated) {
    return Response.json({ message: 'News already updated for today' })
  }

  // Otherwise, fetch and add fresh news
  const news = await fetch(
    `${process.env.NEWS_DATA_ORIGIN}${process.env.NEWS_DATA_API_KEY}&q=${SEARCHQUERY}&country=us&language=en&category=entertainment`,
  )

  const newsJson = (await news.json()) || []

  const toBeAddedNews = newsJson?.results?.map((newsItem) => ({
    title: newsItem.title,
    description: newsItem.description,
    link: newsItem.link,
    image: newsItem?.image_url ?? '',
    pubDate: new Date(newsItem.pubDate),
    creator: newsItem.creator?.[0] ?? 'unknown',
  }))

  const addedNews = await prisma.news.createMany({
    data: toBeAddedNews,
  })

  return Response.json({
    message: `Added ${addedNews} news`,
  })
}

export async function GET(request: Request) {
  const news = await prisma.news.findMany()

  // if no news retrieve nothing
  if (!news) {
    return Response.json({ news: [], message: 'No news found' })
  }

  return Response.json({
    message: `News found!!!`,
    news,
  })
}
