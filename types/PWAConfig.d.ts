import { IconOptions } from "./pwa/icon"
import { MetaOptions } from "./pwa/meta"
import { ManifestOptions } from "./pwa/manifest"

interface PWAOptions {
  meta?: Partial<MetaOptions>
  icon?: Partial<IconOptions>
  manifest?: Partial<ManifestOptions>
}

export { IconOptions, MetaOptions, ManifestOptions, PWAOptions }