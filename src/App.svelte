<script>
  export var chapterA = [
    "A01-hall-secret-color=blue",
    "A01.1-hall-color=blue",
    "A02-hall-secret-color=blue",
    "A02.1-hat_selection-color=pink",
    "A03-hall-secret-color=blue",
    "A03.1-diana-color=pink",
    "A04-hall-color=blue",
    "A05-skill_test-color=blue",
    "A06-difficulty_decision-color=blue",
    "A07-stars-color=blue",
    "A08-stars-color=blue",
    "A09-stars-color=blue",
    "A10-stars-secret-color=blue",
    "A10.1-stars-color=blue",
    "A10.2-stars-color=blue",
    "A11-stars-color=blue",
    "A12-reward-color=blue",
    "A13-spikes-difficulty_point-color=orange",
    "A14-spikes-difficulty_point-secret-color=orange",
    "A14.1-secret_presentation-color=pink",
    "A15-spikes-difficulty_point-color=orange",
    "A16-conveyor_bells-difficulty_point-color=orange",
    "A17-conveyor_bells-difficulty_point-color=orange",
    "A18-action-difficulty_point-color=orange",
    "A19-action-difficulty_point-color=orange",
    "A20-demolition_boss-difficulty_point-color=orange",
    "A21-reward-exploration_point-color=blue",
  ];
  export var chapterB = [
    "B01",
    "B02",
    "B03",
    "B03.1",
    "B04",
    "B04.1",
    "B04.2",
    "B04.3",
    "B04.4",
    "B05",
    "B06",
    "B07",
    "B08",
    "B09",
    "B10",
    "B11",
    "B12",
    "B13",
    "B14",
    "B15",
    "B16",
    "B17",
    "B18",
    "B19",
  ];
  export var chapterC = [
    "C01",
    "C01.1",
    "C02",
    "C03",
    "C04",
    "C05",
    "C06",
    "C07",
    "C08",
    "C09",
    "C10",
    "C11",
    "C12",
    "C13",
    "C13.1",
    "C14",
    "C15",
    "C16",
    "C17",
    "C18",
    "C19",
    "C20",
    "C21",
    "C22",
  ];
  export var chapterD = [
    "D01",
    "D02",
    "D03",
    "D03.1",
    "D04",
    "D05",
    "D05.1",
    "D05.2",
    "D06",
    "D06.1",
    "D06.2",
    "D06.3",
    "D06.4",
    "D06.5",
    "D07",
    "D08",
    "D09",
    "D10",
    "D10.1",
    "D11",
    "D12",
    "D13",
    "D14",
    "D15",
    "D16",
    "D17",
    "D18",
    "D19",
    "D20",
  ];
  export var chapterE = [
    "E01",
    "E02",
    "E03",
    "E03.1",
    "E04",
    "E05",
    "E06",
    "E07",
    "E08",
    "E09",
    "E10",
    "E11",
    "E12",
    "E13",
    "E14",
    "E15",
    "E15.1",
    "E15.2",
    "E16",
    "E17",
    "E18",
    "E19",
    "E19.1",
  ];
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
    {#each chapterA as level, index}
      <figure style={"animation-delay:" + index * 0.25 + "s"}>
        {#if level.split("-").includes("secret")}
          <img class="secret_icon" src="/img/secret.png" alt="secret" />
        {/if}
        {#if level.split("-").includes("color=orange")}
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
  </section>
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
    padding-top: 4rem;
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
        .level_icon {
          width: 56px;
          transform: rotate(90deg);
          transition: all 0.2s;
          &.demolition_boss {
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
          .level_icon {
            width: 96px;
            transform: rotate(0);
            &.demolition_boss {
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
