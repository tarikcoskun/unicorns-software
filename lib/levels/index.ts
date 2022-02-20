import ChapterA from "./chapter-a"
import ChapterB from "./chapter-b"
import ChapterC from "./chapter-c"
import ChapterD from "./chapter-d"
import ChapterE from "./chapter-e"
import OtherLevels from "./other-levels"

export { ChapterA, ChapterB, ChapterC, ChapterD, ChapterE, OtherLevels }
export default { ...ChapterA, ...ChapterB, ...ChapterC, ...ChapterD, ...ChapterE, ...OtherLevels }