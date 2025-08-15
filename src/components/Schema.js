// src/components/Schema.js
import React from "react";

export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Truth or Dare World",
    "url": "https://t.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://truthordareworld.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
