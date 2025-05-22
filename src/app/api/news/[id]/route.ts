import prisma from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string }
  },
) {
  const { id }: { id: string } = params
  const news = await prisma.news.findUnique({
    where: {
      id,
    },
  })

  // If news already exists for today, return it
  if (!news) {
    return Response.json(
      { news: [], message: 'No news found' },
      {
        status: 400,
      },
    )
  }

  return Response.json({
    message: `News found!!!`,
    news,
  })
}
