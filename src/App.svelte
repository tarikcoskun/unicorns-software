<script lang="ts">
  import Chapter from "./Chapter.svelte";
  import ChapterA from "./levels/chapter-a";
  import ChapterB from "./levels/chapter-b";
  import ChapterC from "./levels/chapter-c";
  import ChapterD from "./levels/chapter-d";
  import ChapterE from "./levels/chapter-e";

  let edgeSize = 200;
  let timer = null;

  function scrollOnEdges(event) {
    let viewportX = event.clientX;
    let viewportWidth = document.documentElement.clientWidth;
    let edgeLeft = edgeSize;
    let edgeRight = viewportWidth - edgeSize;
    let isInLeftEdge = viewportX < edgeLeft;
    let isInRightEdge = viewportX > edgeRight;

    if (!(isInLeftEdge || isInRightEdge)) {
      clearTimeout(timer);
      return;
    }

    let documentWidth = Math.max(
      document.body.scrollWidth,
      document.body.offsetWidth,
      document.body.clientWidth,
      document.documentElement.scrollWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );

    let maxScrollX = documentWidth - viewportWidth;

    (function checkForWindowScroll() {
      clearTimeout(timer);

      if (adjustWindowScroll()) {
        timer = setTimeout(checkForWindowScroll, 30);
      }
    })();

    function adjustWindowScroll() {
      let currentScrollX = window.pageXOffset;
      let canScrollLeft = currentScrollX > 0;
      let canScrollRight = currentScrollX < maxScrollX;
      let nextScrollX = currentScrollX;
      let maxStep = 50;
      if (isInLeftEdge && canScrollLeft) {
        let intensity = (edgeLeft - viewportX) / edgeSize;

        nextScrollX = nextScrollX - maxStep * intensity;
      } else if (isInRightEdge && canScrollRight) {
        let intensity = (viewportX - edgeRight) / edgeSize;

        nextScrollX = nextScrollX + maxStep * intensity;
      }
      nextScrollX = Math.max(0, Math.min(maxScrollX, nextScrollX));

      if (nextScrollX !== currentScrollX) {
        window.scrollTo(nextScrollX, 0);
        return true;
      } else {
        return false;
      }
    }
  }
</script>

<main class="points">
  <div>
    <h1>244/244</h1>
    <img src="/img/skill_point.png" alt="skill_point" />
  </div>
  <div>
    <h1>45/45</h1>
    <img src="/img/exploration_point.png" alt="exploration_point" />
  </div>
</main>

<main class="levels">
  <Chapter id="A" levels={ChapterA} />
  <Chapter id="B" levels={ChapterB} />
  <Chapter id="C" levels={ChapterC} />
  <Chapter id="D" levels={ChapterD} />
  <Chapter id="E" levels={ChapterE} />
</main>

<style lang="scss">
  .points {
    position: fixed;
    left: 50%;
    top: 1rem;
    transform: translateX(-50%);
    display: flex;
    gap: 5rem;
    align-items: center;
    div {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 1.25rem;
        margin-top: 0.25rem;
        filter: drop-shadow(0 0 8px #8c82d8);
      }
      img {
        filter: drop-shadow(0 0 8px #8c82d8);
      }
    }
  }

  .levels {
    height: 100%;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    max-width: 100%;
    margin-left: auto;
    scroll-snap-type: x mandatory;
  }
</style>
