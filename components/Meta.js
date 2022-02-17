import React from 'react'
import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name="keywords" content={keywords}/>
      <meta name="description" content={description}/>
      <title>{title} | Korund</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Корунд',
  keywords: 'теплоизоляция',
  description: 'Сверхтонкая теплоизоляция Корунд'
}

export default Meta
