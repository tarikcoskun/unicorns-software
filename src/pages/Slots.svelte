<script lang="ts">
	import PresetSlot from '../components/PresetSlot.svelte';
</script>

<main class="slots">
	<PresetSlot progress="69" timer="17:08" skillPoints="21" explorationPoints="45" />
	<PresetSlot progress="100" timer="34:26:22" skillPoints="244" explorationPoints="45" />
	<PresetSlot progress="37" timer="50:53" skillPoints="61" explorationPoints="45" />
</main>

<style lang="scss">
	.slots {
		background-image: radial-gradient(circle, #2c0017, #230219, #190218, #050017, #000019);
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 4rem;
		place-items: end;
		padding: 0 5rem;
	}
</style>
