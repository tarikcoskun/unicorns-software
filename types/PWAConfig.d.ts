import { IconOptions } from "./PWA/icon"
import { MetaOptions } from "./PWA/meta"
import { ManifestOptions } from "./PWA/manifest"

interface PWAOptions {
  meta?: Partial<MetaOptions>
  icon?: Partial<IconOptions>
  manifest?: Partial<ManifestOptions>
}

export { IconOptions, MetaOptions, ManifestOptions, PWAOptions }