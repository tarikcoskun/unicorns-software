<script lang="ts" setup>
import * as levels from "~/lib/levels";
import Chapter from "@/components/Chapter.vue";
</script>

<template>
  <header class="points">
    <div class="point-container">
      <h1>
        <input
          id="skill-points"
          min="0"
          max="244"
          type="number"
          maxlength="3"
        />
        <label for="skill-points">/244</label>
        <img src="/img/difficulty-point.png" alt="Skill points" />
      </h1>
    </div>
    <div class="point-container">
      <h1>
        <input
          id="exploration-points"
          min="0"
          max="46"
          type="number"
          maxlength="2"
        />
        <label for="exploration-points">/46</label>
        <img src="/img/exploration-point.png" alt="Exploration points" />
      </h1>
    </div>
  </header>

  <main class="levels">
    <Chapter id="A" :levels="levels.ChapterA" />
    <Chapter id="B" :levels="levels.ChapterB" />
    <Chapter id="C" :levels="levels.ChapterC" />
    <Chapter id="D" :levels="levels.ChapterD" />
    <Chapter id="E" :levels="levels.ChapterE" />
    <Chapter id="Other" :levels="levels.OtherLevels" />
  </main>
</template>
