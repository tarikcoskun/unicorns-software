<script lang="ts">
import Vue from "vue"
import { Article } from "@/types/Article"

export default Vue.extend({
  name: "WikiLayout",

  data: () => ({
    query: <string>"",
    articles: <Article[]>[]
  }),

  watch: {
    async query(query: string) {
      if (!query) return this.articles = []
      this.articles = <Article[]>await this.$content()
        .only(["title", "slug"])
        .sortBy("createdAt", "asc")
        .search("title", query)
        .fetch<Article[]>()
    }
  }
})
</script>

<template>
  <div id="wiki">
    <header class="navigation">
      <section>
        <aside class="brand">
          <img src="@/assets/logo.png" alt="Logo">
          <h1>Will You Snail? Wiki</h1>
        </aside>

        <aside class="search">
          <header @click="$refs.search.focus()">
            <MagIcon />
            <input type="text" placeholder="Search the wiki" v-model="query" ref="search" />
          </header>

          <div class="search-results" v-if="articles.length">
            <NuxtLink :to="`/wiki/${article.slug}`" v-for="article of articles" :key="article.slug" @click="query = ''">{{ article.title }}</NuxtLink>
          </div>
        </aside>

        <aside class="links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/wiki">Wiki</NuxtLink>
        </aside>
      </section>
    </header>

    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins.scss";

div#wiki {
  header.navigation {
    background: #282838;

    section {
      padding: 8px 0;
      @include flex(center, space-between);

      aside {
        &.brand {
          @include flex(center, $gap: 16px);

          img { width: 32px }
          h1 { font-weight: 500 }
        }

        &.search {
          width: 50%;
          position: relative;
          @include flex(center, $gap: 16px);

          header {
            width: 100%;
            cursor: text;
            padding: 12px 16px;
            border-radius: 6px;
            background: #343446;
            transition: 150ms background;
            @include flex(center);

            svg {
              width: 24px;
              path { fill: #787986 }
            }

            input {
              height: 100%;
              font-size: 16px;
              background: transparent;
              width: calc(100% - 108px);
              position: absolute; top: 0; left: 54px;
              &:focus { outline: none }
              &::placeholder { color: #787986; font-weight: 500 }
            }

            &:hover { background: #3a3a4b }
            &:focus-within {
              background: #4f4f64;
              svg path, input::placeholder { color: var(--fg); fill: var(--fg) }
            }
          }

          div.search-results {
            padding: 8px;
            display: none;
            cursor: default;
            list-style: none;
            border-radius: 4px;
            background: #343446;
            flex-direction: column;
            position: absolute; top: calc(100% + 8px); left: 0; right: 0;

            a {
              padding: 12px;
              cursor: pointer;
              border-radius: 4px;
              transition: 150ms background;
              &:hover { background: #3a3a4b }
            }
          }

          &:focus-within {
            div.search-results { display: flex }
          }
        }

        &.links {
          @include flex(center);

          a {
            padding: 8px 20px;
            border-radius: 6px;
            transition: 150ms background;
            &:hover { background: #343446 }
          }
        }
      }
    }
  }
}
</style>