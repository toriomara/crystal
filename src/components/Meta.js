import React from 'react'
import Head from 'next/head'

export const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name="keywords" content={keywords}/>
      <meta name="description" content={description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="Korund's homepage"/>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
      <title>{title} | Korund</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Корунд',
  keywords: 'теплоизоляция',
  description: 'Сверхтонкая теплоизоляция Корунд'
}