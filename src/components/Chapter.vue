<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  levels: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="chapter" :id="id">
    <figure class="level" v-for="level in Object.entries(levels)">
      <header class="upper">
        <img
          src="/img/exploration-point.png"
          alt="Exploration point"
          :style="`filter: var(--${level[1].color}-filter)`"
        />
      </header>
      <img
        class="level-icon"
        :alt="level[1].icon"
        :src="`/img/level-icons/${level[1].icon}.png`"
        :style="`filter: var(--${level[1].color}-filter)`"
      />
      <img
        class="level-icon level-icon-ghost"
        :alt="level[1].icon"
        :src="`/img/level-icons/${level[1].icon}.png`"
        :style="`filter: var(--${level[1].color}-ghost-filter)`"
      />
      <h1
        :style="`filter: drop-shadow(0 0 8px var(--${level[1].color}-darker)); color: var(--${level[1].color})`"
      >
        {{ level[0] }}
      </h1>
    </figure>
  </section>
</template>
