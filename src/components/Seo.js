import React from "react";
import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, url, image, author = "WebNSoftware" }) {
  const siteName = "WebNSoftware";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* canonical */}
      {url && <link rel="canonical" href={url} />}

      {/* basic structured data (Organization) */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://webnsoftware.com/",
        "@type": "Organization",
        "name": siteName,
        "url": url,
        "logo": image || `${url}/favicon.ico`,
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+917569100563",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English","Hindi","Telugu"]
        }],
        "sameAs": [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://wa.me/917569100563"
        ]
      })}</script>
    </Helmet>
  );
}
