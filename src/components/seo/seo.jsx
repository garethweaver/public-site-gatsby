import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title, description, path, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const siteUrl = `${site.siteMetadata.url}${path || '/'}`
  const siteImage = `${site.siteMetadata.url}${site.siteMetadata.image}`

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={metaTitle}
      meta={[
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:image',
          content: siteImage,
        },
      ]}
    />
  )
}

export default SEO
