export type FooterLink = {
  path: string
  label: string
  icon?: string
  target?: string
}

export type FooterColumn = {
  title: string
  populate?: "sameKeywords" | "children" | "siblings"
  textLines?: Array<string>
  links?: Array<FooterLink> 
}

export type Footer = Array<FooterColumn>

export const footer: Footer = [
  {
    title: "How it works",
    links: [
      {
        label: "Artificial Intelligence",
        path: "/how/ai",
      },
      {
        label: "History of WordPress",
        path: "/how/wordpress-history/",
      },
      {
        label: "Terms & Conditions",
        path: "/terms",
      },
    ],
  },
  {
    title: "5 Goldlabel Ws",
    links: [
      {
        label: "Who?",
        path: "/5ws/who",
      },
      {
        label: "What?",
        path: "/5ws/what",
      },
      {
        label: "When?",
        path: "/5ws/when",
      },
      {
        label: "Where?",
        path: "/5ws/where",
      },
      {
        label: "Why?",
        path: "/5ws/why",
      },
    ],
  },

  {
    title: "Company",
    textLines: [
      "Goldlabel Apps Ltd",
      "321-323 High Road",
      "Chadwell Heath",
      "Essex RM6 6AX",
      "UK Ltd Co. 15460545"
    ],
  },
  {
    title: "More Like This",
    populate: "sameKeywords",
    links: [
    ],
  },
]
