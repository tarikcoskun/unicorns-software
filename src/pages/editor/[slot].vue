<script lang="ts" setup>
import { generateSave } from "~/lib/generateSave"
import { computed } from "@vue/reactivity"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

const store = useStore()
const slots = computed(() => store.state.slots)

const route = useRoute()
const activeSlot = computed(() => slots.value[Number(route.params.slot)])

if (!slots.value[Number(route.params.slot)]) location.href = "/"
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
          v-model="activeSlot.skillPoints" />
        <label for="skill-points">/244</label>
      </h1>
      <img src="/img/difficulty-point.png" alt="Skill points" />
    </div>
    <div class="point-container">
      <h1>
        <input
          id="exploration-points"
          min="0"
          max="46"
          type="number"
          maxlength="2"
          v-model="activeSlot.explorationPoints" />
        <label for="exploration-points">/46</label>
      </h1>
      <img src="/img/exploration-point.png" alt="Exploration points" />
    </div>

    <a class="button" @click.prevent="generateSave(Number(route.params.slot), { skillPoints: activeSlot.skillPoints, explorationPoints: activeSlot.explorationPoints })">GENERATE</a>
  </header>

  <!-- <main class="levels">
    <Chapter id="A" :levels="levels.ChapterA" />
    <Chapter id="B" :levels="levels.ChapterB" />
    <Chapter id="C" :levels="levels.ChapterC" />
    <Chapter id="D" :levels="levels.ChapterD" />
    <Chapter id="E" :levels="levels.ChapterE" />
    <Chapter id="Other" :levels="levels.OtherLevels" />
  </main> -->
</template>
