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
    uploadSave(event: Event) {
      const fileReader = new FileReader()
      const [file] = <FileList>(<HTMLInputElement>event.target).files

      this.fileName = file.name
      if (file && file.name.endsWith(".sav"))
        fileReader.onload = () => this.save = readSaveContent(<string>fileReader.result)
      else alert("Please upload a valid save file")
      if (file) fileReader.readAsText(file)
    }
  },

  computed: {
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
        <h1>Save File</h1>

        <div>
          <figure>
            <label>Upload</label>
            <label for="upload" class="button">Upload Save</label>
            <input type="file" accept=".sav" id="upload" @change="uploadSave" />
          </figure>
          <figure>
            <label>Download</label>
            <button @click="generateSave(fileName, save)">Generate Save</button>
          </figure>
          <figure>
            <label>Exploration Points</label>
            <p>{{ save["Collected Exploration Points"].length }}</p>
          </figure>
          <figure>
            <label>Skill Points</label>
            <p>{{ skillPoints.normal }}</p>
          </figure>
          <figure>
            <label>Skill Points Underwater</label>
            <p>{{ skillPoints.underwater }}</p>
          </figure>
        </div>
      </section>

      <section>
        <h1>Numerics</h1>

        <div>
          <figure>
            <label>Deaths</label>
            <input type="number" v-model="save['Deaths']" />
          </figure>
          <figure>
            <label>Anger Game Level</label>
            <input type="number" v-model="save['Anger Game Level']" />
          </figure>
          <figure>
            <label>Anger Game XP</label>
            <input type="number" v-model="save['Anger Game XP']" />
          </figure>
          <figure>
            <label>Timer Game</label>
            <input type="number" v-model="save['Timer Game']" />
          </figure>
          <figure>
            <label>Timer Chapter</label>
            <input type="number" v-model="save['Timer Chapter']" />
          </figure>
          <figure>
            <label>Timer Level</label>
            <input type="number" v-model="save['Timer Level']" />
          </figure>
        </div>
      </section>

      <section>
        <h1>Select Boxes</h1>

        <div>
          <figure>
            <label>Room</label>
            <select v-model="save['Room']">
              <option :value="key" v-for="[key, value] in sortedLevels" :key="key">{{ value.name }}</option>
            </select>
          </figure>
          <figure>
            <label>Hat</label>
            <select v-model="save['Hat']">
              <option value="-1">None</option>
              <option value="0">Fedora</option>
              <option value="1">Lil' Shelly</option>
              <option value="2">Unicorn Horn</option>
              <option value="3">Human rider</option>
              <option value="4">Christmas hat</option>
              <option value="5">Lil' Squid</option>
              <option value="6">Poop</option>
            </select>
          </figure>
          <figure>
            <label>Difficulty</label>
            <select v-model="save['Difficulty']">
              <option value="3">Easy</option>
              <option value="2">Very Easy</option>
              <option value="1">Extremely Easy</option>
              <option value="0">Infinitely Easy</option>
            </select>
          </figure>
        </div>
      </section>

      <section>
        <h1>Toggles</h1>

        <div>
          <figure>
            <label>Exploration Mode</label>
            <input type="checkbox" :checked="save['Exploration Mode']" @change="save['Exploration Mode'] = ($event.target.checked === true ? 1 : 0)" />
          </figure>
          <figure>
            <label>Training Mode</label>
            <input type="checkbox" :checked="save['Training Mode']" @change="save['Training Mode'] = ($event.target.checked === true ? 1 : 0)" />
          </figure>
          <figure>
            <label>Heart Fixed</label>
            <input type="checkbox" :checked="save['Heart Fixed']" @change="save['Heart Fixed'] = ($event.target.checked === true ? 1 : 0)" />
          </figure>
          <figure>
            <label>Final Credits Reached</label>
            <input type="checkbox" :checked="save['Final Credits Reached']" @change="save['Final Credits Reached'] = ($event.target.checked === true ? 1 : 0)" />
          </figure>
          <figure>
            <label>Pump Inverted</label>
            <input type="checkbox" :checked="save['Pump Inverted']" @change="save['Pump Inverted'] = ($event.target.checked === true ? 1 : 0)" />
          </figure>
          <figure>
            <label>Speedrun Is Legit</label>
            <input type="checkbox" :checked="save['Speedrun Is Still Legit']" @change="save['Speedrun Is Still Legit'] = ($event.target.checked === true ? 1 : 0)" />
          </figure>
        </div>
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
  max-width: 800px;
  padding: 64px 0;
  @include flex($dir: column, $gap: 48px);

  section {
    padding-bottom: 48px;
    @include flex($dir: column, $gap: 32px);

    h1 { color: white; font-size: 20px }
    div {
      @include grid(2, $gap: 24px 16px);

      figure {
        @include flex($dir: column, $gap: 12px);
        p { color: white }
      }
    }

    &:not(:last-child) { border-bottom: 2px solid #090909 }
  }
}
</style>