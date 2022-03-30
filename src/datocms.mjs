const pagesQuery = `query PagesQuery {
  allPages {
    id
    slug
    title
    modularContent {
      ... on MastheadRecord {
        id
        title
        showScrollButton
        expandedMasthead
        content
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
    }
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
}`

export async function fetchPages () {
  return await fetch('https://graphql.datocms.com', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.DATOCMS_KEY}`,
    },
    body: JSON.stringify({
      query: pagesQuery
    })
  }).then(res => res.json())
}
