import { IconOptions } from "./icon"
import { MetaOptions } from "./meta"
import { ManifestOptions } from "./manifest"

export interface PWAOptions {
  meta?: MetaOptions
  icon?: IconOptions
  manifest?: ManifestOptions

  _manifestMeta: any // vue-meta record
}