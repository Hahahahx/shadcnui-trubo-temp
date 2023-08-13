export interface SiteConfig {
  name: string
  url: string
  ogImage: string
  description: string
  links: [
    {
      link: string
      name: string
    },
  ]
}
