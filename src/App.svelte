<script lang="ts">
	import { Router, Route } from "svelte-routing";
  import Slots from "./pages/Slots.svelte";
  import Levels from "./pages/Levels.svelte";
  export let url = "";
</script>

<Router url="{url}">
  <Route path="levels" component="{Levels}" />
  <Route path="/"><Slots /></Route>
</Router>