<script lang="ts">
import Vue, { PropType } from "vue"

interface Error {
  title: string
  message: string
  statusCode: number
}

export default Vue.extend({
  props: {
    error: {
      type: <PropType<Error>>Object
    }
  },

  data: () => ({
    errors: <{ [key: number]: { title: string; whatToDo: string[] } }>{
      404: {
        title: "PAGE_NOT_FOUND",
        whatToDo: ["The page you are looking for doesn't exist"]
      },
      500: {
        title: "INTERNAL_SERVER_ERROR",
        whatToDo: ["This is an error caused by a developer's mistake", "Please report this error to the website maintainers"]
      }
    }
  }),

  computed: {
    getError(): Error {
      const statusCode = Number(this.error.statusCode)
      console.log(statusCode)

      return {
        statusCode: statusCode,
        message: this.error.message,
        title: this.errors[statusCode].title
      }
    }
  }
})
</script>

<template>
  <main class="error">
    <figure class="status">
      <h1>AN ERROR OCCURED</h1>
      <p>Error code: {{ getError.statusCode }}. {{ getError.message }}</p>
    </figure>
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/mixins.scss";

main.error {
  background: radial-gradient(circle, #310000, #140000, #000000);

  figure.status {
    margin: 0;
    height: 100vh;
    text-align: center;
    flex-direction: column;
    @include flex(center, center, column, 32px);

    h1, p { filter: drop-shadow(0 0 12px #f53342) }

    h1 { font-size: 36px }
    p {
      color: #ff5499;
      font-size: 24px;
    }
  }
}
</style>