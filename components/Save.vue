<script lang="ts">
import type { Save } from "@/types/SaveFile"

import Vue, { PropType } from "vue"
import parseTime from "@/lib/parseTime"
import readSaveContent from "@/lib/readSaveContent"

export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "slot"
    },
    save: {
      type: <PropType<Save>>Object,
      required: false,
      default: {
        room: 143,
        gameTimer: 0,
        skillPoints: 0,
        explorationPoints: 0,
        progressPercentage: 0
      }
    }
  },

  methods: {
    parseTime,
    uploadSave(event: Event, index: number) {
      const fileReader = new FileReader()
      const files = (event.target as HTMLInputElement).files

      if (files && files[0].name.endsWith(".sav"))
        fileReader.onload = () => this.$store.commit("saveSlots/updateSlot", {
          index: index,
          value: readSaveContent(<string>fileReader.result)
        })
      else alert("Please upload a valid save file")
      if (files) fileReader.readAsText(files[0])
    },

    deleteSave(index: number) {
      if (confirm("Are you sure you want to delete this save slot?\nDeleting this save file will replace it with an empty save slot")) this.$store.commit("saveSlots/deleteSlot", index)
    }
  }
})
</script>

<template>
  <NuxtLink :to="`/editor/${index}`" v-if="type === 'save'">
    <h1 class="progress">{{ save.progressPercentage }}%</h1>
    <figure class="progress">
      <img class="outline" src="@/assets/img/shelly-outline.png" />
      <img class="filler" src="@/assets/img/shelly-filler.png" :style="`height: ${save.progressPercentage}%`" />
    </figure>

    <h2 class="timer">{{ parseTime(save.gameTimer) }}</h2>

    <footer class="points">
      <aside>
        <img src="@/assets/img/difficulty-point.png" />
        <h3>{{ save.skillPoints }}/244</h3>
      </aside>

      <aside>
        <img src="@/assets/img/exploration-point.png" />
        <h3>{{ save.explorationPoints.length }}/46</h3>
      </aside>
    </footer>
  </NuxtLink>

  <label :for="`save-${index}`" v-else>
    <input type="file" accept=".sav" :id="`save-${index}`" @change="uploadSave($event, index)" />
    <img class="upload" src="@/assets/img/new-game.png" />
  </label>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

a, label {
  z-index: 1;
  width: 288px;
  height: 440px;
  padding: 24px;
  cursor: pointer;
  transition: 250ms;
  background: black;
  position: relative;
  border: 3.5px solid #483239;
  box-shadow: 0 0 12px 8px #00000050;
  @include overlay(96px, 100%, 100%);
  @include flex(center, center, column, 36px);

  h1.progress { font-size: 48px }
  h2.timer { font-size: 24px }

  figure.progress {
    width: 100%;
    height: 188px;
    transition: 250ms;
    position: relative;

    img {
      left: 50%;
      bottom: 0;
      width: 230px;
      object-fit: cover;
      transition: 250ms;
      position: absolute;
      object-position: bottom;
      transform: translateX(-50%);

      &.filler { filter: brightness(0) saturate(100%) invert(38%) sepia(16%) saturate(409%) hue-rotate(277deg) brightness(93%) contrast(87%) }

      &.outline { filter: invert(40%) sepia(4%) saturate(1343%) hue-rotate(279deg) brightness(96%) contrast(89%) }
    }
  }

  footer.points {
    position: relative;
    @include grid(2);

    aside {
      @include flex(center, center, column, 16px);

      img { filter: brightness(0) saturate(100%) invert(38%) sepia(16%) saturate(409%) hue-rotate(277deg) brightness(93%) contrast(87%) }
    }
  }

  input { display: none }

  img.upload {
    animation: growShrink 3s ease-out infinite;
    filter: brightness(0) saturate(100%) invert(38%) sepia(16%) saturate(409%) hue-rotate(277deg) brightness(93%) contrast(87%);
  }

  &:hover {
    border-color: white;
    box-shadow: 0 0 12px 8px #4a0026;
    @include no-overlay;

    img.upload { @include no-overlay }
    footer.points aside { @include no-overlay }
    figure.progress img {
      @include no-overlay;

      &.filler { filter: invert(49%) sepia(43%) saturate(5410%) hue-rotate(181deg) brightness(102%) contrast(104%) }
    }
  }
}

@keyframes growShrink {
  0% { width: 120px }
  50% { width: 180px }
  100% { width: 120px }
}
</style>