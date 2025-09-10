import type { Media } from '@root/payload-types'
import type { Metadata } from 'next'

import { Hero } from '@components/Hero/index'
import { PayloadRedirects } from '@components/PayloadRedirects'
import { RefreshRouteOnSave } from '@components/RefreshRouterOnSave'
import { RenderBlocks } from '@components/RenderBlocks/index'
import { fetchPage, fetchPages } from '@data'
import { mergeOpenGraph } from '@root/seo/mergeOpenGraph'
import { unstable_cache } from 'next/cache'
import { draftMode } from 'next/headers'
import React from 'react'

// Accept an array of slug segments so we can consistently pass normalized segments (including home)
const getPage = async (slugSegments: string[], draft?: boolean) =>
  draft ? fetchPage(slugSegments) : unstable_cache(fetchPage, [`page-${slugSegments.join('/')}`])(slugSegments)

const Page = async ({
  params,
}: {
  params: Promise<{
    slug: any
  }>
}) => {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await params

  // Normalize slug param for root (home) route. When visiting '/', Next does not supply a slug
  // and previous logic produced '/undefined', breaking redirect resolution and yielding a 404.
  let slugSegments: string[] | undefined
  if (!slug) {
    // Treat absence of slug as the home page which uses slug 'home' in the CMS
    slugSegments = ['home']
  } else if (Array.isArray(slug)) {
    slugSegments = slug
  } else {
    slugSegments = [slug]
  }

  // Home page should resolve to '/'; other pages join their segments
  const url = slugSegments.length === 1 && slugSegments[0] === 'home' ? '/' : `/${slugSegments.join('/')}`

  const page = await getPage(slugSegments, draft)

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  return (
    <React.Fragment>
      <PayloadRedirects disableNotFound url={url} />
      <RefreshRouteOnSave />
      <Hero firstContentBlock={page.layout[0]} page={page} />
      <RenderBlocks blocks={page.layout} hero={page.hero} />
    </React.Fragment>
  )
}

export default Page

export async function generateStaticParams() {
  const getPages = unstable_cache(fetchPages, ['pages'])
  const pages = await getPages()

  return pages
    .map(({ breadcrumbs }) => {
      const url = breadcrumbs?.[breadcrumbs.length - 1]?.url || '/'
      const cleaned = url.replace(/^\/|\/$/g, '')
      // Represent home page explicitly as ['home'] so our normalization matches runtime logic
      if (cleaned === '') return { slug: ['home'] }
      return { slug: cleaned.split('/') }
    })
    .filter(Boolean)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: any
  }>
}): Promise<Metadata> {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()
  const page = await getPage(slug, draft)

  let ogImage: Media | null = null

  if (page && page.meta?.image && typeof page.meta.image !== 'string') {
    ogImage = page.meta.image
  }

  // check if noIndex is true
  const noIndexMeta = page?.noindex ? { robots: 'noindex' } : {}

  return {
    description: page?.meta?.description,
    openGraph: mergeOpenGraph({
      description: page?.meta?.description ?? undefined,
      images: ogImage
        ? [
            {
              url: ogImage.url as string,
            },
          ]
        : undefined,
      title: page?.meta?.title || 'Payload',
      url: Array.isArray(slug) ? slug.join('/') : '/',
    }),
    title: page?.meta?.title || 'Payload',
    ...noIndexMeta, // Add noindex meta tag if noindex is true
  }
}
