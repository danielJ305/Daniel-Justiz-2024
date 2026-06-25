const siteUrl = "https://danieljustiz.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/my-process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
