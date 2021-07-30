<script lang="ts">
  export let id: string;
  export let levels: Object;

  let levelsArray = Object.entries(levels).sort((a, b) => {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
</script>


<section {id}>
  {#each levelsArray as level, index}
    <figure style={"animation-delay:" + index * 0.25 + "s"}>
      {#if level[1].secret}
        <img class="secret_icon" src="/img/secret.png" alt="secret" />
      {/if}
      {#if level[1].combat}
        <img
          class="difficulty_icon"
          src="/img/difficulty.png"
          alt="difficulty"
        />
      {/if}
      <img
        class={level[1].boss
          ? "boss_icon " + level[1].color
          : "level_icon " + level[1].color}
        src={`/img/level_icons/${level[1].icon}.png`}
        alt={level[1].icon}
      />
      <h1
        style={`filter: drop-shadow(0 0 8px var(--${level[1].color}-darker)); color: var(--${level[1].color})`}
      >
        {level[0]}
      </h1>
    </figure>
  {/each}
</section>

<style lang="scss">
  section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    &::before {
      content: "";
      position: absolute;
      bottom: 40px;
      left: 0;
      height: 14rem;
      background: #372d46;
      width: 4px;
      margin: 0 -0.5rem;
    }
    &::after {
      content: attr(id);
      color: #372d46;
      font-size: 1.5rem;
      position: absolute;
      left: 6px;
      bottom: calc(14rem + 16px);
    }
    &#A {
      margin-left: 2.5rem;
    }
    figure {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.2s ease-out;
      width: 4rem;
      animation: upDown 6s infinite;
      .secret_icon {
        position: absolute;
        bottom: 4.5rem;
        width: 42px;
        z-index: 10;
        filter: grayscale(1);
        transition: all 400ms cubic-bezier(0.125, 0.250, 0.100, 1.035);
      }
      .difficulty_icon {
        position: absolute;
        bottom: 10.5rem;
        opacity: 0;
        transition: all 400ms cubic-bezier(0.125, 0.250, 0.100, 1.035);
      }
      .level_icon,
      .boss_icon {
        width: 56px;
        transform: rotate(90deg);
        transition: all 400ms cubic-bezier(0.125, 0.250, 0.100, 1.035);
        &.boss_icon {
          width: 64px;
        }
        &.blue {
          filter: invert(1) invert(65%) sepia(40%) saturate(5396%)
            hue-rotate(159deg) brightness(101%) contrast(102%)
            drop-shadow(0 0 8px var(--blue-darker));
        }
        &.pink {
          filter: invert(1) invert(61%) sepia(59%) saturate(4618%)
            hue-rotate(260deg) brightness(106%) contrast(103%)
            drop-shadow(0 0 8px var(--pink-darker));
        }
        &.orange {
          filter: invert(1) invert(90%) sepia(14%) saturate(6503%)
            hue-rotate(332deg) brightness(101%) contrast(103%)
            drop-shadow(0 0 8px var(--orange-darker));
        }
      }
      h1 {
        font-size: 1.5rem;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
        opacity: 0;
        transition: all 0.2s;
      }
      &:hover {
        padding: 0 2.5rem;
        .secret_icon {
          filter: drop-shadow(0 0 8px #ffff0090) grayscale(0);
          width: 72px;
          top: -0.5rem;
        }
        .difficulty_icon {
          opacity: 100;
        }
        .level_icon,
        .boss_icon {
          width: 96px;
          transform: rotate(0);
          &.boss_icon {
            width: 104px;
          }
        }
        h1 {
          opacity: 100;
        }
      }
    }
  }
</style>
