import React from 'react'
import { Helmet } from 'react-helmet-async'

const ZapiHelmet = () => {
  return (
    <Helmet>
    {/* Primary Meta Tags */}
    <title>Zapi.ai - The marketplace for AI APIs</title>
    <meta name="title" content="Zapi.ai - The marketplace for AI APIs" />
    <meta name="description" content="Z-API allows you to harness the power of AI on your applications without stress. Use powerful AI APIs developed by machine learning engineers all over the world." />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://zapi.ai/" />
    <meta property="og:title" content="Zapi.ai - The marketplace for AI APIs" />
    <meta property="og:description" content="Z-API allows you to harness the power of AI on your applications without stress. Use powerful AI APIs developed by machine learning engineers all over the world." />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://zapi.ai/" />
    <meta property="twitter:title" content="Zapi.ai - The marketplace for AI APIs" />
    <meta property="twitter:description" content="Z-API allows you to harness the power of AI on your applications without stress. Use powerful AI APIs developed by machine learning engineers all over the world." />
    <meta property="twitter:image" content="" />
    </Helmet>
  )
}

export default ZapiHelmet