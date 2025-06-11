import random from 'just-random'

const pagesQuery = locale => `query PagesQuery {
  _site {
    faviconMetaTags {
      tag
      attributes
    }
  }
  allPages(
    locale: ${locale}
    fallbackLocales: [en]
  ) {
    id
    slug
    title
    position
    modularContent {
      ... on MastheadRecord {
        id
        _modelApiKey
        title
        showScrollButton
        expandedMasthead
        content
        addShadow
        illustrationWidth
        illustrationTopPosition
        illustrationBottomPosition
        illustrationRightPosition
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        illustration {
          alt
          basename
          blurUpThumb
          blurhash
          title
          url
          responsiveImage(imgixParams: {fm: png, w: 600}) {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
      }
      ... on CardBlockRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        addShadow
        maxColumns
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        backgroundImage {
          alt
          basename
          mimeType
          blurUpThumb
          blurhash
          title
          url
          responsiveImage {
            alt
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
        cards {
          title
          subtitle
          content
          vacancyId
          contentSize
          customLink
          readMoreLink {
            id
            title
            slug
          }
          image {
            alt
            basename
            blurUpThumb
            blurhash
            title
            url
            width
            height
            responsiveImage(imgixParams: {fit: crop, crop: focalpoint, h: 414, w: 736}) {
              alt
              aspectRatio
              base64
              height
              width
              sizes
              srcSet
              src
              webpSrcSet
              bgColor
              title
            }
          }
          illustration {
            alt
            basename
            blurUpThumb
            blurhash
            title
            url
            responsiveImage(imgixParams: {w: 300}) {
              alt
              aspectRatio
              base64
              height
              width
              sizes
              srcSet
              src
              webpSrcSet
              bgColor
              title
            }
          }
        }
      }
      ... on CenteredContentRecord {
        id
        _modelApiKey
        actionUrl
        callToAction
        content
        addShadow
        title
        titleColor {
          hex
        }
        contentTextSize
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        backgroundImage {
          alt
          basename
          mimeType
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage {
            alt
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
          video {
            streamingUrl
            mp4Url
            blurhash
            blurUpThumb
            thumbnailUrl(format: jpg)
          }
        }
      }
      ... on QuoteCarouselRecord {
        id
        _modelApiKey
        illustrationSide
        addShadow
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        illustration {
          alt
          basename
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage(imgixParams: {w: 220}) {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
        quotes {
          id
          author
          quote
        }
      }
      ... on ColumnContentRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        content
        addShadow
        maxColumns
      }
      ... on MultiColumnContentRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        addShadow
        columns {
          id
          title
          content
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
      }
      ... on StatsBlockRecord {
        id
        _modelApiKey
        title
        addShadow
        stats {
          id
          title
          value
          textColor {
            red
            blue
            green
            alpha
          }
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        illustration {
          alt
          basename
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage(imgixParams: {h: 260}) {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
      }
      ... on PeopleBlockRecord {
        id
        _modelApiKey
        title
        addShadow
        titleColor {
          hex
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        people {
          id
          name
          email
          title
          image {
            alt
            basename
            blurUpThumb
            blurhash
            title
            url
            width
            height
            responsiveImage(imgixParams: {fit: crop, crop: focalpoint, h: 230, w: 263}) {
              alt
              aspectRatio
              base64
              height
              width
              sizes
              srcSet
              src
              webpSrcSet
              bgColor
              title
            }
          }
        }
      }
      ... on FreeformColumnRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        addShadow
        backgroundImage {
          alt
          basename
          mimeType
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        content
      }
      ... on ContactFormRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        addShadow
        backgroundImage {
          alt
          basename
          mimeType
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        content
      }
      ... on ReferralFormRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        addShadow
        backgroundImage {
          alt
          basename
          mimeType
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        content
      }
      ... on MapRecord {
        id
        _modelApiKey
        title
        showTitle
        titleColor {
          hex
        }
        addShadow
        backgroundImage {
          alt
          basename
          mimeType
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
        backgroundColor {
          alpha
          hex
          red
          green
          blue
        }
        center {
          latitude
          longitude
        }
        latitudeDelta
        longitudeDelta
        pins {
          title
          showTitle
          pinColor {
            hex
          }
          ... on LocationRecord {
            title
            coordinates {
              longitude
              latitude
            }
          }
        }
      }
      ... on VacancyBlockRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        content
        addShadow
        alwaysShowInterestForm
        formContent
      }
      ... on FaqRecord {
        id
        _modelApiKey
        title
        titleColor {
          hex
        }
        content
        addShadow
        questions {
          id
          question
          answer
        }
        illustration {
          alt
          basename
          blurUpThumb
          blurhash
          title
          url
          width
          height
          responsiveImage(imgixParams: {fm: png, w: 600}) {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            srcSet
            src
            webpSrcSet
            bgColor
            title
          }
        }
      }
      ... on FullWidthVideoEmbedRecord {
        id
        _modelApiKey
        videoEmbed
      }
    }
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
}`

const menuQuery = locale => `query MenuQuery {
  allMenuItems(
    filter: {
      parent: {
        exists: false
      }
    }
    orderBy: position_ASC
    locale: ${locale}
    fallbackLocales: [en]
  ) {
    id
    externalUrl
    label
    position
    inactive
    children {
      id
      label
      inactive
      position
      page {
        id
        slug
      }
    }
    page {
      id
      slug
    }
  }
}`

const itemsQuery = locale => `query AllMenuQuery {
  allMenuItems(
    locale: ${locale}
    fallbackLocales: [en]
  ) {
    id
    externalUrl
    label
    position
    inactive
    page {
      id
      slug
    }
    parent {
      id
      page {
        id
      }
    }
    children {
      id
      label
      position
      inactive
      page {
        id
        slug
      }
    }
  }
}`

const uploadsQuery = `query UploadsQuery {
  allUploads(
    filter: {tags: {anyIn: ["academy", "cdis", "isq", "tis", "twps", "wyis", "yhis", "corp"]}}
  ) {
    id
    tags
    responsiveImage(imgixParams: {fm: webp, w: "900"}) {
      alt
      aspectRatio
      base64
      height
      width
      sizes
      srcSet
      src
      webpSrcSet
      bgColor
      title
    }
  }
}`

const makeRequest = async query => {
  return await fetch('https://graphql.datocms.com', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.DATOCMS_KEY || process.env.DATOCMS_KEY}`,
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
}

export function fetchPages(locale = 'en') {
  return makeRequest(pagesQuery(locale))
}

let menuCache = {}
export async function fetchMenu(locale) {
  if (menuCache[locale]) {
    return menuCache[locale]
  }

  return menuCache[locale] = await makeRequest(menuQuery(locale))
}

let menuItemsCache = {}
export async function fetchMenuItems(locale) {
  if (menuItemsCache[locale]) {
    return menuItemsCache[locale]
  }

  return menuItemsCache[locale] = await makeRequest(itemsQuery(locale))
}

export let locales = []
export async function fetchLocales() {
  if (locales.length) {
    return locales
  }

  return locales = ['en']
  const { data: { _site } } = await makeRequest(`query {
    _site {
      locales
    }
  }`)
  locales = _site.locales
  return locales
}

export let uploads = {}
export async function fetchUploads() {
  if (uploads.length === 0) {
    return uploads
  }

  const { data: { allUploads } } = await makeRequest(uploadsQuery)
  uploads = allUploads.reduce((carry, upload) => {
    for (const t of upload.tags) {
      const tag = t.toLowerCase()

      if (!carry[tag]) {
        carry[tag] = []
      }

      carry[tag].push(upload)
    }

    return carry
  }, uploads)
}
export function getRandomImage(school) {
  const upload = random(uploads[school] || [])

  if (!upload) {
    return getRandomImage(random(Object.keys(uploads)))
  }

  return upload
}

export let currentLocale = null
export function setCurrentLocale(locale) {
  currentLocale = locale
}

export function slugBuilder(slug, locale) {
  locale = locale ?? currentLocale
  const prefix = locale === 'en' ? '' : `/${locale}`
  const path = prefix + '/' + (slug === 'home' ? '' : slug)

  if (path === '/') {
    return undefined
  }

  return path
}

export const timezones = {
  'America/Los_Angeles': {
    en: 'Seattle',
    zh: '西雅图',
    ko: '시애틀',
  },
  'America/New_York': {
    en: 'Atlanta',
    zh: '亚特兰大',
    ko: '애틀랜타',
  },
  'Europe/London': {
    en: 'London',
    zh: '伦敦',
    ko: '런던',
  },
  'Europe/Zurich': {
    en: 'Zurich',
    zh: '苏黎世',
    ko: '취리히',
  },
  'Africa/Johannesburg': {
    en: "Johan'burg",
    zh: '约翰内斯堡',
    ko: '요하네스버그',
  },
  'Asia/Dubai': {
    en: 'Dubai',
    zh: '迪拜',
    ko: '두바이',
  },
  'Asia/Shanghai': {
    en: 'Beijing',
    zh: '北京',
    ko: '베이징',
  },
  'Australia/Sydney': {
    en: 'Sydney',
    zh: '悉尼',
    ko: '시드니',
  },
}
