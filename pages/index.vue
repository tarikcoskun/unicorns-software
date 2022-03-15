<script lang="ts">
import Vue from "vue"
import levels from "@/lib/levels"
import initialSave from "@/lib/initialSave"
import generateSave from "@/lib/generateSave"
import calculated from "@/lib/calculatedPoints"
import readSaveContent from "@/lib/readSaveContent"

export default Vue.extend({
  data: () => ({ save: initialSave, fileName: "SaavoGame23-2.sav" }),

  asyncData() {
    let sortedLevels: any[] = []
    for (const key in levels) sortedLevels.push([Number(key), levels[Number(key)]])

    sortedLevels.sort((a, b) => {
      let x = a[1].name.toLowerCase()
			let y = b[1].name.toLowerCase()
		  return x < y ? -1 : x > y ? 1 : 0
    })

    return { sortedLevels }
  },

  methods: {
    generateSave,
    reset() { this.save = initialSave },
    uploadSave(event: Event) {
      const fileReader = new FileReader()
      const [file] = <FileList>(<HTMLInputElement>event.target).files

      this.fileName = file.name
      fileReader.readAsText(file)
      if (file.name.endsWith(".sav")) fileReader.onload = () => this.save = readSaveContent(<string>fileReader.result)
      else alert("Please upload a valid save file")
    }
  },

  computed: {
    explorationPoints() {
      let explorationPoints = 0
      for (let index = 0; index < 46; index++) {
        if (!calculated.explorationPoints.includes(this.save["Collected Exploration Points"][index])) continue
        explorationPoints += 1
      }

      return explorationPoints
    },

    skillPoints() {
      let skillPoints = { normal: 0, underwater: 0 }
      for (let index = 0; index < 256; index++) {
        if (!calculated.difficultyPoints.includes(index)) continue
        skillPoints.normal += Number(this.save["Level Data: Beaten On Difficulty"][index]) + 1
        skillPoints.underwater += Number(this.save["Level Data: Beaten On Difficulty Underwater"][index]) + 1
      }

      return skillPoints
    }
  }
})
</script>

<template>
  <div>
    <header>
      <img src="@/assets/img/logo/Unicorn_Happy.png" alt="Unicorn" />
      <img src="@/assets/img/logo/Text.png" alt="Unicorn's Software" />
    </header>

    <main>
      <section>
        <fieldset>
          <legend>Save File</legend>

          <aside class="grid-3">
            <label for="upload" class="button">UPLOAD</label>
            <input type="file" accept=".sav" id="upload" @change="uploadSave" />
            <button @click="generateSave(fileName, save)">GENERATE</button>
            <button @click="reset">RESET</button>
          </aside>
          <aside class="grid">
            <div>
              <label>
                <aside><img src="@/assets/img/exploration-point.png"> Exploration points</aside>
                <aside>
                  <span>({{ explorationPoints }}/46)</span>
                  <span> > </span>
                </aside>
              </label>
            </div>
            <div>
              <label>
                <aside><img src="@/assets/img/skill-point.png"> Skill points</aside>
                <aside>
                  <span>({{ skillPoints.normal }}/244)</span>
                  <span> > </span>
                </aside>
              </label>
            </div>
          </aside>
        </fieldset>
      </section>

      <section>
        <fieldset>
          <legend>Numerics</legend>
          <aside class="grid-2">
            <div>
              <label>Deaths</label>
              <input type="number" v-model="save['Deaths']" />
            </div>
            <div>
              <label>Anger Game Level</label>
              <input type="number" v-model="save['Anger Game Level']" />
            </div>
            <div>
              <label>Anger Game XP</label>
              <input type="number" v-model="save['Anger Game XP']" />
            </div>
            <div>
              <label>Timer Game</label>
              <input type="number" v-model="save['Timer Game']" />
            </div>
            <div>
              <label>Timer Chapter</label>
              <input type="number" v-model="save['Timer Chapter']" />
            </div>
            <div>
              <label>Timer Level</label>
              <input type="number" v-model="save['Timer Level']" />
            </div>
          </aside>
        </fieldset>
      </section>

      <section>
        <fieldset>
          <legend>Select Boxes</legend>
          <aside class="grid-2">
            <div>
              <label>Room</label>
              <select v-model="save['Room']">
                <option :value="key" v-for="[key, value] in sortedLevels" :key="key">{{ value.name }}</option>
              </select>
            </div>
            <div>
              <label>Hat</label>
              <select v-model="save['Hat']">
                <option value="-1">None</option>
                <option value="0">Fedora</option>
                <option value="1">Lil' Shelly</option>
                <option value="2">Unicorn horn</option>
                <option value="3">Human rider</option>
                <option value="4">Christmas hat</option>
                <option value="5">Lil' Squid</option>
                <option value="6">Poop</option>
              </select>
            </div>
            <div>
              <label>Difficulty</label>
              <select v-model="save['Difficulty']">
                <option value="3">Easy</option>
                <option value="2">Very Easy</option>
                <option value="1">Extremely Easy</option>
                <option value="0">Infinitely Easy</option>
              </select>
            </div>
          </aside>
        </fieldset>
      </section>

      <section>
        <fieldset>
          <legend>Toggles</legend>
          <aside class="grid-2">
            <div>
              <label>Exploration Mode</label>
              <input type="checkbox" :checked="save['Exploration Mode']" @change="save['Exploration Mode'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
            <div>
              <label>Training Mode</label>
              <input type="checkbox" :checked="save['Training Mode']" @change="save['Training Mode'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
            <div>
              <label>Training Mode</label>
              <input type="checkbox" :checked="save['Training Mode']" @change="save['Training Mode'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
            <div>
              <label>Heart Fixed</label>
              <input type="checkbox" :checked="save['Heart Fixed']" @change="save['Heart Fixed'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
            <div>
              <label>Reached Credits</label>
              <input type="checkbox" :checked="save['Final Credits Reached']" @change="save['Final Credits Reached'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
            <div>
              <label>Pump Inverted</label>
              <input type="checkbox" :checked="save['Pump Inverted']" @change="save['Pump Inverted'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
            <div>
              <label>Speedrun Is Legit</label>
              <input type="checkbox" :checked="save['Speedrun Is Still Legit']" @change="save['Speedrun Is Still Legit'] = ($event.target.checked === true ? 1 : 0)" />
            </div>
          </aside>
        </fieldset>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";

header {
  padding: 24px 0;
  @include flex(center, center, $gap: 24px);

  img {
    &:first-child { height: 120px }
    &:last-child { height: 72px }
  }
}

main {
  margin: 0 auto;
  padding: 64px 0;
  max-width: 600px;
  @include flex($dir: column, $gap: 48px);

  section {
    fieldset {
      padding: 16px;
      border: 3px solid white;
      @include grid(1, $gap: 16px 8px);

      legend { font-size: 18px; padding: 0 6px }

      > aside {
        div {
          @include flex($dir: column, $gap: 12px);

          label {
            font-size: 14px;
            @include flex(center, space-between);

            aside {
              @include flex(center, $gap: 16px);
              img { width: 32px }
            }
          }
        }

        &.grid   { @include grid(1, $gap: 24px 8px) }
        &.grid-2 { @include grid(2, $gap: 24px 8px) }
        &.grid-3 { @include grid(3, $gap: 24px 8px) }
      }
    }
  }

  &:not(:last-child) { border-bottom: 2px solid #090909 }
}
</style>