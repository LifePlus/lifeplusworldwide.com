const pagesQuery = locale => `query PagesQuery {
  allPages(locale: ${locale}, fallbackLocales: [en]) {
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
          responsiveImage (
            imgixParams: {
              fm: png
              w: 600
            }
          ) {
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
            responsiveImage (
              imgixParams: {
                fit: crop
                crop: focalpoint
                h: 414
                w: 736
              }
            ) {
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
            responsiveImage (
              imgixParams: {
                w: 300
              }
            ) {
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
          responsiveImage (imgixParams: {
            w: 220
          }) {
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
          responsiveImage (imgixParams: { h: 260 }) {
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
            responsiveImage (
              imgixParams: {
                fit: crop
                crop: focalpoint
                h: 230
                w: 263
              }
            ) {
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
        center{
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
    }
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
  _site {
    faviconMetaTags {
      tag
      attributes
    }
  }
}`

const menuQuery = `query MenuQuery {
  allMenuItems(
    filter: {
      parent: {
        exists: false
      }
    }
    orderBy: position_ASC
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

const itemsQuery = `query AllMenuQuery {
  allMenuItems {
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

export function fetchPages (locale = 'en') {
  return makeRequest(pagesQuery(locale))
}

let menuCache = null
export async function fetchMenu () {
  if (menuCache) {
    return menuCache
  }

  menuCache = await makeRequest(menuQuery)
  return menuCache
}

let menuItemsCache = null
export async function fetchMenuItems () {
  if (menuItemsCache) {
    return menuItemsCache
  }

  menuItemsCache = await makeRequest(itemsQuery)
  return menuItemsCache
}

export let locales = []
export async function fetchLocales () {
  if (locales.length) {
    return locales
  }

  const { data: { _site } } = await makeRequest(`query {
    _site {
      locales # -> ["en", "it", "fr"]
    }
  }`)
  locales = _site.locales
  return locales
}

export let currentLocale = null
export function setCurrentLocale (locale) {
  currentLocale = locale
}

export function slugBuilder (slug, locale) {
  locale = locale ?? currentLocale
  const prefix = locale === 'en' ? '' : `/${locale}`
  const path = prefix + '/' + (slug === 'home' ? '' : slug)

  if (path === '/') {
    return undefined
  }

  return path
}