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
  <component :is="type === 'save' ? 'NuxtLink' : 'div'" :to="`/editor/${index}`">
    <label class="slot" :for="`save-${index}`">
      <figure class="slot-background">
        <div class="slot-content" v-if="type === 'save'">
          <h1 class="progress-percentage">{{ save.progressPercentage }}%</h1>
          <div class="progress-shelly">
            <img
              class="shelly-outline"
              src="@/assets/img/shelly-outline.png"
              :alt="String(save.progressPercentage)"
              draggable="false"
            />
            <img
              class="shelly-filler"
              src="@/assets/img/shelly-filler.png"
              :style="`height: ${save.progressPercentage}%`"
              draggable="false"
            />
          </div>
          <h2 class="timer">{{ parseTime(save.gameTimer) }}</h2>

          <footer class="points">
            <div>
              <img
                src="@/assets/img/difficulty-point.png"
                :alt="String(save.skillPoints)"
              />
              <h3>{{ save.skillPoints }}/244</h3>
            </div>
            <div>
              <img
                src="@/assets/img/exploration-point.png"
                :alt="String(save.explorationPoints)"
              />
              <h3>{{ save.explorationPoints }}/46</h3>
            </div>
          </footer>
        </div>

        <div class="slot-content upload-content" v-else>
          <input
            type="file"
            accept=".sav"
            :id="`save-${index}`"
            style="display: none"
            @change="uploadSave($event, index)"
          />
          <img class="new-game" src="@/assets/img/new-game.png" alt="New game" />
        </div>

        <footer class="actions">
          <img
            v-if="type === 'save'"
            src="@/assets/img/delete.png"
            class="delete-save"
            alt="Delete save"
            @click="deleteSave(index)"
          />
          <h3 class="upload-save" v-else>Upload Save</h3>
        </footer>
      </figure>
    </label>
  </component>
</template>

<style lang="scss" scoped>
$transition-easing: cubic-bezier(0.125, 0.25, 0.1, 1.035);

@mixin gray-overlay($offset, $width, $height) {
  * { color: #705c66; filter: none }
  &::after {
    content: "";
    width: $width;
    height: $height;
    transform: translate(-50%);
    transition: 0.3s $transition-easing;
    position: absolute; top: 0; left: 50%;
    box-shadow: inset $offset 0 48px #00000085, inset (-$offset) 0 48px #00000085;
  }
}

@mixin no-overlay {
  color: #ffffff;
  filter: none;
  &::after {
    box-shadow: none;
  }
}

a, div {
  z-index: 1;
  text-decoration: none;

  label.slot {
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

    figure.slot-background {
      width: 100%;
      height: 480px;
      cursor: pointer;
      overflow: hidden;
      user-select: none;
      position: relative;
      margin-bottom: 84px;
      background: #000000;
      border: 3.5px solid #483239;
      box-shadow: 0 0 12px 8px #00000050;
      transition: 0.3s $transition-easing;
      @include gray-overlay(120px, 100%, 100%);

      div.slot-content {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        transition: 0.3s $transition-easing;

        h1.progress-percentage { font-size: 48px }
        h2.timer { margin: 32px 0; font-size: 24px }

        div.progress-shelly {
          height: 188px;
          position: relative;
          transition: 0.1s $transition-easing;
          @include gray-overlay(48px, 75%, 100%);

          img {
            left: 50%;
            bottom: 0;
            width: 230px;
            object-fit: cover;
            position: absolute;
            object-position: bottom;
            transform: translateX(-50%);
            transition: 0.3s $transition-easing;

            &.shelly-filler {
              filter: brightness(0) saturate(100%) invert(38%) sepia(16%) saturate(409%) hue-rotate(277deg) brightness(93%) contrast(87%);
            }

            &.shelly-outline {
              filter: invert(40%) sepia(4%) saturate(1343%) hue-rotate(279deg) brightness(96%) contrast(89%);
            }
          }
        }

        footer.points {
          display: grid;
          position: relative;
          margin-bottom: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          div {
            @include gray-overlay(0, 100%, 100%);

            img {
              filter: brightness(0) saturate(100%) invert(38%) sepia(16%) saturate(409%) hue-rotate(277deg) brightness(93%) contrast(87%);
            }
          }
        }

        &.upload-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          img.new-game {
            animation: growShrink 3s ease-out infinite;
            transition: 0.4s cubic-bezier(0.125, 0.25, 0.1, 1.035);
            filter: brightness(0) saturate(100%) invert(38%) sepia(16%) saturate(409%) hue-rotate(277deg) brightness(93%) contrast(87%);
          }
        }
      }

      footer.actions {
        opacity: 0;
        width: 100%;
        height: 100%;
        display: flex;
        bottom: -180px;
        position: absolute;
        align-items: flex-end;
        justify-content: center;
        transition: 0.2s cubic-bezier(0.125, 0.25, 0.1, 1.035);

        img.delete-save {
          height: 90px;
          margin-bottom: 4.5rem;
          filter: drop-shadow(0 0 8px #4a0026);
        }

        h3.upload-save {
          width: 100%;
          text-align: center;
          font-size: 1.25rem;
          margin-bottom: 7.5rem;
          filter: drop-shadow(0 0 8px #c910b9);
        }
      }
    }

    &:hover {
      figure.slot-background {
        overflow: unset;
        border-color: #ffffff;
        transform: translateY(-7rem);
        box-shadow: 0 0 12px 8px #4a0026;
        @include no-overlay();

        div.slot-content {
          h1.progress-percentage, h2.timer, h3, img {
            @include no-overlay();
            filter: drop-shadow(0 0 6px #e2a6cf90);
          }

          div.progress-shelly {
            filter: drop-shadow(0 0 8px #2a4dc9);
            @include no-overlay();

            img {
              filter: none;

              &.shelly-filler {
                filter: invert(49%) sepia(43%) saturate(5410%) hue-rotate(181deg) brightness(102%) contrast(104%);
              }
            }
          }

          footer.points * { @include no-overlay }
          &.upload-content img.new-game { @include no-overlay }
        }

        footer.actions { @include no-overlay }
      }
    }
  }
}

@keyframes growShrink {
  0% { width: 120px; }
  50% { width: 180px; }
  100% { width: 120px; }
}
</style>