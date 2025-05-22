import type { News } from '@/lib/generated/prisma'
import Image from 'next/image'

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60 * 60 * 24 * 1000

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const {
    news,
  }: {
    news: News[]
    message: string
  } = await fetch(`${process.env.BACKEND_URL}/api/news`).then((res) =>
    res.json(),
  )
  return news.map((post) => ({
    id: String(post.id),
  }))
}

export default async function GetNews({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { news }: { news: News } = await fetch(
    `${process.env.BACKEND_URL}/api/news/${id}`,
  ).then((res) => res.json())
  return (
    <main>
      <h1>{news.title}</h1>
      <p>{news.description}</p>
      <Image width={400} height={400} src={news.image} alt={news.title} />
    </main>
  )
}
