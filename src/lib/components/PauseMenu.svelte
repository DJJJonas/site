<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { sfx } from "../../assets/sfx";
  import IconKeyButton from "./IconKeyButton.svelte";

  const dispatch = createEventDispatcher();

  let active = true;
  let optionsDiv: HTMLDivElement;

  export let items: { name: string; href: string }[] = [];
  export function isActive() {
    return active;
  }

  export function toggle() {
    if (!active) {
      active = !active;
      sfx.openMenu.play();
      optionsDiv.animate(
        [
          { clipPath: "polygon(0 0, 252px 0, 252px 0, 0 0)" },
          { clipPath: "polygon(0 0, 252px 0, 534px 100vh, 0 100vh)" },
        ],
        100
      );
      // Disable scrollbar
      document.body.style.overflow = "hidden";
    } else {
      sfx.closeMenu.play();
      optionsDiv
        .animate(
          [
            { clipPath: "polygon(0 0, 252px 0, 534px 100vh, 0 100vh)" },
            { clipPath: "polygon(0 0, 252px 0, 252px 0, 0 0)" },
          ],
          100
        )
        .finished.then(() => {
          active = !active;
          dispatch("close");
        });
      // Enable scrollbar
      document.body.style.overflow = "auto";
    }
  }

  let hourDeg: number = 0;
  function getHourDeg() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return (
      (360 / 12) * hour +
      (360 / 12 / 60) * minute +
      (360 / 12 / 60 / 60) * second
    );
  }

  let minuteDeg: number = 0;
  function getMinuteDeg() {
    const date = new Date();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return (360 / 60) * minute + (360 / 60 / 60) * second;
  }

  let secondDeg: number = 0;
  function getSecondDeg() {
    const date = new Date();
    const second = date.getSeconds();
    return (360 / 60) * second;
  }

  onMount(() => {
    hourDeg = getHourDeg();
    minuteDeg = getMinuteDeg();
    secondDeg = getSecondDeg();
    setInterval(() => {
      hourDeg = getHourDeg();
      minuteDeg = getMinuteDeg();
      secondDeg = getSecondDeg();
    }, 1000);
  });
</script>

<div class="left-menu-container" style="display: {active ? 'flex' : 'none'};">
  <div bind:this={optionsDiv} class="options-container">
    <img src="/assets/img/rdr_clock.png" alt="clock" />
    <div class="second" style="transform: rotate({secondDeg - 10}deg);"></div>
    <div class="minute" style="transform: rotate({minuteDeg - 10}deg);"></div>
    <div class="hour" style="transform: rotate({hourDeg - 10}deg);"></div>
    <div class="items">
      {#each items as item}
        <a
          on:click={() => {
            sfx.click.play();
            toggle();
          }}
          href={item.href}>{item.name}</a
        >
      {/each}
    </div>
  </div>
  <IconKeyButton on:click={toggle}>Fechar</IconKeyButton>
</div>

<style lang="less">
  @import "../../lib/variables/variables.less";
  .left-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    .options-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to right, @red, rgb(@red, 0.8));
      height: 100vh;
      width: 100vw;
      clip-path: polygon(0 0, 252px 0, 534px 100vh, 0 100vh);
      z-index: 100;

      img {
        padding-left: 70px;
        margin-top: 40px;
        width: 140px;
      }

      .hour {
        background-color: @red;
        position: absolute;
        top: 116px;
        left: 138px;
        width: 2px;
        height: 44px;
        transform-origin: 100% 100%;
        transform: rotate(0deg);
      }

      .minute {
        background-color: #660307;
        position: absolute;
        top: 112px;
        left: 138px;
        width: 2px;
        height: 50px;
        transform-origin: 100% 100%;
        transform: rotate(0deg);
      }

      .second {
        background-color: @red;
        position: absolute;
        top: 176px;
        left: 139px;
        width: 2px;
        height: 18px;
        transform-origin: 100% 100%;
        transform: rotate(0deg);
      }

      .items {
        margin-left: 30px;
        margin-bottom: 80px;
        width: 326px;
        display: flex;
        flex-direction: column;
        align-items: center;
        rotate: -2deg;
        a {
          font-family: Redemption;
          font-size: 36pt;
          color: @black;
          margin: 0 20px;
          text-decoration: none;
        }
        a:hover {
          color: @white;
        }
      }

      @media screen and (max-height: 500px) {
        img,
        .hour,
        .minute,
        .second {
          display: none;
        }
        justify-content: center;
        // align-items: center;
        .items {
          margin: 0;
          padding: 0;
          // a {
          //   font-size: 20pt;
          // }
        }
      }
    }
  }
</style>
