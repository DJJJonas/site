<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sfx } from "../../assets/sfx";

  const dispatch = createEventDispatcher();
  export let items: { name: string; href: string }[] = [];
</script>

<div class="container">
  <img src="https://avatars.githubusercontent.com/u/48167880" alt="logo" />

  <div class="links">
    {#each items as item}
      <a on:click={() => sfx.click.play()} href={item.href}>{item.name}</a>
    {/each}
  </div>

  <div class="links-menu">
    <button on:click={() => dispatch("menuclick")}
      ><i class="fa fa-bars"></i></button
    >
  </div>
</div>

<style lang="less">
  @import "../../lib/variables/variables.less";

  .container {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: @white;
    background-color: @black;
    height: 80px;
    width: 100vw;
    z-index: 1;

    img {
      margin-left: 10px;
      border-radius: 100%;
      width: 60px;
    }

    @media screen and (max-width: 768px) {
      img {
        margin-left: calc(50% - 30px);
      }
      .links {
        display: none;
      }
    }
  }

  .links {
    margin-right: 10px;

    a {
      font-size: 20pt;
      color: @white;
      margin: 0 20px;
      text-decoration: none;
    }

    a:hover,
    a:focus {
      color: @grey;
    }

    a:active {
      color: @red;
    }
  }

  .links-menu {
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: @white;

      i {
        font-size: 28pt;
        margin-right: 24px;
      }
    }

    button:hover {
      color: @grey;
    }

    button:active {
      color: @red;
    }
  }
</style>
