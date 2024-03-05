<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sfx } from "../../assets/sfx";

  const dispatch = createEventDispatcher();

  let thisButton: HTMLButtonElement;
  let events = {
    click() {
      sfx.click.play();
      dispatch("click");
    },
  };

  export let icon = "window-close";
  export function element() {
    return thisButton;
  }
</script>

<button bind:this={thisButton} on:click={events.click}
  ><slot /> <i class="fa fa-{icon}"></i>
</button>

<style lang="less">
  @import "../../lib/variables/variables.less";
  button {
    background: none;
    height: 45px;
    position: absolute;
    padding-left: 8px;
    padding-right: 8px;
    bottom: 40px;
    right: 30px;
    font-family: Lino;
    font-size: 20pt;
    color: @white;
    margin: 0 20px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    z-index: 200;
    text-shadow:
      black 1px 1px 1px,
      black -1px 1px 1px,
      black 1px -1px 1px,
      black -1px -1px 1px;
    i {
      font-size: 22pt;
      margin-left: 5px;
    }
  }

  button:hover,
  button:focus {
    background-color: rgba(@white, 0.2);
  }

  button:active {
    background-color: rgba(@white, 0.5);
  }
</style>
