<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
  import Slots from "./pages/Slots.svelte";
  import Levels from "./pages/Levels.svelte";
  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <div>
      <Link to="/">Slots</Link>
      <Link to="levels">Levels</Link>
    </div>
  </nav>
  <div id="app">
    <Route path="levels" component="{Levels}" />
    <Route path="/"><Slots /></Route>
  </div>
</Router>
<p id="version">Beta_1.0</p>

<style lang="scss">
  nav {
    position: absolute;
    top: 0;
    left: 0;
    background: #ffffff40;
    color: #000;
    padding: 0.5rem;
  }
  #version {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    color: #403852;
  }
  #app {
    height: 100%;
  }
  @media only screen and (min-width: 1500px) {
    #app {
      zoom: 1.1;
    }
  }
  @media only screen and (min-width: 1600px) {
    #app {
      zoom: 1.2;
    }
  }
  @media only screen and (min-width: 1900px) {
    #app {
      zoom: 1.4;
    }
  }
  @media only screen and (min-width: 2200px) {
    #app {
      zoom: 1.8;
    }
  }
</style>