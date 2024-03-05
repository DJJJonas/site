<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sfx } from "../../assets/sfx";

  const dispatch = createEventDispatcher();
  export let items: { src: string; title: string }[] = [];
</script>

<div class="items">
  {#each items as item, index}
    <button
      on:click={() => {
        sfx.click.play();
        dispatch("click", { index });
      }}
      name={item.title}
      style="background-image: url('assets/img/{item.src}.png');"
      ><label for={item.title}>{item.title}</label></button
    >
  {/each}
</div>

<style lang="less">
  @import "../../lib/variables/variables.less";
  .items {
    display: grid;
    margin-inline: 40px;
    max-width: fit-content;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px 16px;

    button {
      display: flex;
      width: 296px;
      height: 213px;
      text-align: center;
      box-shadow: 0 0 2px 2px #7c7c7c;
      border-style: none;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;

      label {
        cursor: inherit;
        font-family: "Hapna";
        font-size: 16pt;
        color: @white;
        align-self: flex-end;
        margin-bottom: 4px;
      }
    }

    button:hover,
    button:active {
      box-shadow: 0 0 2px 2px #bb070e;
    }

    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
</style>
