<script lang="ts">
	export let progress: any;
	export let timer: any;
	export let skillPoints: any;
	export let explorationPoints: any;
</script>

<div class="slot">
	<div class="container">
		<h1>{progress}%</h1>
		<div class="shelly_progress">
			<img style="height: 100%" src="/img/shelly_outline.png" alt="shelly" />
			<img
				style={`height: ${progress}%`}
				class="shelly_filler"
				src="/img/shelly_filler.png"
				alt="shelly"
			/>
		</div>
		<h2>{timer}</h2>
	</div>
	<footer>
		<div>
			<img src="/img/skill_point.png" alt="skill_point" title="Skill points" />
			<p>{skillPoints}/244</p>
		</div>
		<div>
			<img
				class="exploration_point"
				src="/img/exploration_point.png"
				alt="exploration_point"
				title="Exploration points"
			/>
			<p>{explorationPoints}/45</p>
		</div>
	</footer>
</div>

<style lang="scss">
	.slot {
		height: 70vh;
		width: 100%;
		background: #000000;
		border: 4px solid #663a5d;
		box-shadow: 0 0 12px 8px #00000050;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 10vh;
		transition: 0.4s cubic-bezier(0.125, 0.25, 0.1, 1.035);
		.container {
			transition: 0.4s cubic-bezier(0.125, 0.25, 0.1, 1.035);
			filter: brightness(0.3);
			margin: 2rem;
			display: flex;
			text-align: center;
			flex-direction: column;
			justify-content: center;
			h1 {
				font-size: 2.625rem;
			}
			h2 {
				font-size: 1.25rem;
			}
			.shelly_progress {
				margin: 1.5rem 1rem;
				position: relative;
				height: 187px;
				img {
					object-fit: cover;
					object-position: bottom;
					width: 100%;
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}
		footer {
			filter: brightness(0.3);
			margin-bottom: 2rem;
			display: grid;
			grid-template-columns: repeat(2, minmax(100px, 1fr));
			div {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;
				p {
					font-size: 1.125rem;
				}
			}
		}
		&:hover {
			transform: translateY(-10vh);
			border-color: #fff;
			box-shadow: 0 0 12px 8px #66005d;
			.container,
			footer {
				filter: brightness(1);
			}
			h1,
			h2,
			p,
			img {
				filter: drop-shadow(0 0 6px #e2a6cfcc);
			}
		}
	}
</style>
