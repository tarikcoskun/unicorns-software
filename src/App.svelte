<script lang="ts">
  var chapter_a = Object.entries({
    A01: {
      icon: "hall",
      color: "blue",
      secret: true,
    },
    "A01.1": {
      icon: "hall",
      color: "blue",
      exploration: true,
    },
    A02: {
      icon: "hall",
      color: "blue",
      secret: true,
    },
    "A02.1": {
      icon: "hat_selection",
      color: "pink",
    },
    A03: {
      icon: "hall",
      color: "blue",
      secret: true,
      exploration: true,
    },
    "A03.1": {
      icon: "diana",
      color: "pink",
    },
    A04: {
      icon: "hall",
      color: "blue",
    },
    A05: {
      icon: "skill_test",
      color: "blue",
    },
    A06: {
      icon: "difficulty_decision",
      color: "blue",
    },
    A07: {
      icon: "stars",
      color: "blue",
    },
    A08: {
      icon: "stars",
      color: "blue",
    },
    A09: {
      icon: "stars",
      color: "blue",
    },
    A10: {
      icon: "stars",
      color: "blue",
      secret: true,
    },
    "A10.1": {
      icon: "stars",
      color: "blue",
      exploration: true,
    },
    "A10.2": {
      icon: "stars",
      color: "blue",
      exploration: true,
    },
    A11: {
      icon: "stars",
      color: "blue",
    },
    A12: {
      icon: "reward",
      color: "blue",
    },
    A13: {
      icon: "spikes",
      color: "orange",
      combat: true,
    },
    A14: {
      icon: "spikes",
      color: "orange",
      combat: true,
      secret: true,
    },
    "A14.1": {
      icon: "secret_presentation",
      color: "pink",
    },
    A15: {
      icon: "spikes",
      color: "orange",
      combat: true,
    },
    A16: {
      icon: "conveyor_belts",
      color: "orange",
      combat: true,
    },
    A17: {
      icon: "conveyor_belts",
      color: "orange",
      combat: true,
    },
    A18: {
      icon: "action",
      color: "orange",
      combat: true,
    },
    A19: {
      icon: "action",
      color: "orange",
      combat: true,
    },
    A20: {
      icon: "demolition_boss",
      color: "orange",
      combat: true,
      boss: true,
    },
    A21: {
      icon: "reward",
      color: "blue",
      exploration: true,
    },
  }).sort((a, b) => {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
</script>

<main class="points">
  <div>
    <h1>244/244</h1>
    <img src="/img/skill_point.png" alt="skill_point" />
  </div>
  <div>
    <h1>45/45</h1>
    <img src="/img/exploration_point.png" alt="exploration_point" />
  </div>
</main>

<main class="levels">
  <section id="A" style="margin-left: 2.5rem">
    {#each chapter_a as level, index}
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
          class={level[1].boss ? "boss_icon" : "level_icon"}
          src={`/img/level_icons/${level[1].icon}.png`}
          style={`filter: drop-shadow(0 0 8px var(--${level[1].color}-darker))`}
          alt="level"
        />
        <h1
          style={`filter: drop-shadow(0 0 8px var(--${level[1].color}-darker)); color: var(--${level[1].color})`}
        >
          {level[0]}
        </h1>
      </figure>
    {/each}
  </section>
  <!-- <section id="B">
    {#each levels.chapterB as level, index}
      <figure style={"animation-delay:" + index * 0.25 + "s"}>
        {#if level.includes("secret")}
          <img class="secret_icon" src="/img/secret.png" alt="secret" />
        {/if}
        {#if level.includes("color=orange")}
          <img
            class="difficulty_icon"
            src="/img/difficulty.png"
            alt="difficulty"
          />
        {/if}
        <img
          class={"level_icon " + level.split("-")[1]}
          src={`/img/level_icons/${level.split("-")[1]}.png`}
          style={`filter: drop-shadow(0 0 8px var(--${level
            .split("color=")
            .pop()}-darker))`}
          alt="level"
        />
        <h1
          style={`filter: drop-shadow(0 0 8px var(--${level
            .split("color=")
            .pop()}-darker)); color: var(--${level.split("color=").pop()})`}
        >
          {level.split("-")[0]}
        </h1>
      </figure>
    {/each}
  </section> -->
</main>

<style lang="scss">
  .points {
    position: fixed;
    left: 50%;
    top: 1rem;
    transform: translateX(-50%);
    display: flex;
    gap: 5rem;
    align-items: center;
    div {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 1.25rem;
        margin-top: 0.25rem;
        filter: drop-shadow(0 0 8px #8c82d8);
      }
      img {
        filter: drop-shadow(0 0 8px #8c82d8);
      }
    }
  }

  .levels {
    height: 100%;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    max-width: 100%;
    margin-left: auto;
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
          transition: all 0.2s;
        }
        .difficulty_icon {
          position: absolute;
          bottom: 10.5rem;
          opacity: 0;
          transition: all 0.2s;
        }
        .level_icon,
        .boss_icon {
          width: 56px;
          transform: rotate(90deg);
          transition: all 0.2s;
          &.boss_icon {
            width: 64px;
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
  }
</style>
