<script lang="ts" setup>
import { PropType } from "vue";
import { initialSave, ISave } from "@/utils";
import { uploadSave } from "~/lib/uploadSave";
import { deleteSave } from "~/lib/deleteSave";
import { readableTime } from "~/lib/readableTime";

defineProps({
  index: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "slot",
  },
  slot: {
    type: Object as PropType<ISave>,
    required: false,
    default: initialSave,
  },
});
</script>

<template>
  <label class="slot" :for="`save-${index}`">
    <figure class="slot-background">
      <div class="slot-content" v-if="type === 'save'">
        <h1 className="progress-percentage">{{ slot?.progressPercentage }}%</h1>
        <div class="progress-shelly">
          <img
            src="/img/shelly-outline.png"
            :alt="String(slot?.progressPercentage)"
            draggable="false"
          />
          <img
            class="shelly-filler"
            src="/img/shelly-filler.png"
            :style="`height: ${slot?.progressPercentage}%`"
            draggable="false"
          />
        </div>
        <h2 class="timer">{{ readableTime(slot?.gameTimer) }}</h2>

        <footer class="points">
          <div>
            <img
              src="/img/difficulty-point.png"
              :alt="String(slot?.skillPoints)"
            />
            <h3>{{ slot?.skillPoints }}/244</h3>
          </div>
          <div>
            <img
              src="/img/exploration-point.png"
              :alt="String(slot?.explorationPoints)"
            />
            <h3>{{ slot?.explorationPoints }}/46</h3>
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
        <img class="new-game" src="/img/new-game.png" alt="New game" />
      </div>

      <footer class="actions">
        <img
          v-if="type === 'save'"
          src="/img/delete.png"
          class="delete-save"
          alt="Delete save"
          @click="deleteSave(index)"
        />
        <h3 class="upload-save" v-else>Upload Save</h3>
      </footer>
    </figure>
  </label>
</template>
