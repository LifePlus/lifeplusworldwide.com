const pagesQuery = `query PagesQuery {
  allPages {
    id
    slug
    title
    modularContent {
      ... on MastheadRecord {
        id
        _modelApiKey
        title
        showScrollButton
        expandedMasthead
        content
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
      ... on CardBlockRecord {
        id
        _modelApiKey
        title
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
          image {
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
          illustration {
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
        }
      }
      ... on CenteredContentRecord {
        id
        _modelApiKey
        actionUrl
        callToAction
        content
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
      }
      ... on QuoteCarouselRecord {
        id
        _modelApiKey
        illustrationSide
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
        quotes {
          id
          author
          quote
        }
      }
    }
    _seoMetaTags {
      attributes
      content
      tag
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
    children {
      id
      label
      position
      page {
        slug
      }
    }
    page {
      slug
    }
  }
}`

const makeRequest = async query => {
  return await fetch('https://graphql.datocms.com', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.DATOCMS_KEY}`,
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
}

export function fetchPages () {
  return makeRequest(pagesQuery)
}

let menuCache = null
export async function fetchMenu () {
  if (menuCache) {
    return menuCache
  }

  menuCache = await makeRequest(menuQuery)
  return menuCache
}

export function slugBuilder (slug) {
  return '/' + (slug === 'home' ? '' : slug)
}