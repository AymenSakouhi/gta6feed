import type { News } from '@/lib/generated/prisma'
import Image from 'next/image'
import {
  CardContent,
  CardAction,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  Card,
} from '@/components/ui/card'
import { IconTrendingUp } from '@tabler/icons-react'

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
  return news
}

export default async function GetNews() {
  const news: News[] = await generateStaticParams()
  return (
    <main>
      {news?.map((_) => (
        <>
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {_.title}
                </CardTitle>
                <CardDescription>{_.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image width={400} height={400} src={_.image} alt={_.title} />
              </CardContent>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
          </div>
        </>
      ))}
    </main>
  )
}
