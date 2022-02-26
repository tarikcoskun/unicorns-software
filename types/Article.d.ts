interface Props {
  id?: string
  href?: string
  className?: string[]
}

interface Child {
  tag?: string
  type?: string
  props?: Props
  value?: string
  children?: Child[]
}

interface Body {
  type?: string
  children?: Child[]
}

export interface Toc {
  id?: string
  text?: string
  depth?: number
}

export interface Info {
  image: string
  details: {
    [key: string]: string
  }
}

export interface Article {
  toc?: Toc[]
  dir?: string
  body?: Body
  slug?: string
  path?: string
  tags?: string[]
  title?: string
  header?: string
  related?: string[]
  createdAt?: Date
  updatedAt?: Date
  extension?: string
  description?: string
}