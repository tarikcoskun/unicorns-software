<script lang="ts" setup>
import { readSaveContent } from "~/lib/readSaveContent"
import { readableTime } from "~/lib/readableTime"
import { initialSave, ISave } from "@/utils"
import { useStore } from "vuex"
import { PropType } from "vue"

const store = useStore()

function uploadSave(event: Event, index: number) {
  const fileReader: FileReader = new FileReader()
  const files = (event.target as HTMLInputElement).files

  if (files && files[0].name.endsWith(".sav"))
    fileReader.onload = () => store.commit("updateSlot", {
      index: index,
      value: readSaveContent(fileReader.result as string)
    })
  else alert("Please upload a valid save file")
  if (files) fileReader.readAsText(files[0])
}

function deleteSave(index: number) {
  if (confirm("Are you sure you want to delete this save slot?\nDeleting this save file will replace it with an empty save slot")) store.commit("deleteSlot", index)
}

defineProps({
  index: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: "slot"
  },
  slot: {
    type: Object as PropType<Partial<ISave>>,
    required: false,
    default: initialSave
  }
})
</script>

<template>
  <component :is="type === 'save' ? 'router-link' : 'div'" :to="`/editor/${index}`">
    <label class="slot" :for="`save-${index}`">
      <figure class="slot-background">
        <div class="slot-content" v-if="type === 'save'">
          <h1 className="progress-percentage">{{ slot.progressPercentage }}%</h1>
          <div class="progress-shelly">
            <img
              class="shelly-outline"
              src="/img/shelly-outline.png"
              :alt="String(slot.progressPercentage)"
              draggable="false"
            />
            <img
              class="shelly-filler"
              src="/img/shelly-filler.png"
              :style="`height: ${slot.progressPercentage}%`"
              draggable="false"
            />
          </div>
          <h2 class="timer">{{ readableTime(slot.gameTimer as number) }}</h2>

          <footer class="points">
            <div>
              <img
                src="/img/difficulty-point.png"
                :alt="String(slot.skillPoints)"
              />
              <h3>{{ slot.skillPoints }}/244</h3>
            </div>
            <div>
              <img
                src="/img/exploration-point.png"
                :alt="String(slot.explorationPoints)"
              />
              <h3>{{ slot.explorationPoints }}/46</h3>
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
  </component>
</template>
