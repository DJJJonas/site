<script lang="ts">
    export let id = "";
  export let bg = "red";
  export let bgimg = "";
</script>

<section
  {id}
  class="bg{bg}"
  style={bgimg ? "background-image: url(" + bgimg + ");" : ""}
>
  <slot name="image" />

  <slot />
</section>

<style lang="less">
  @import "../../lib/variables/variables.less";

  section {
    width: 100%;
    margin: 0;
    display: flex;
    padding-top: 160px;
    padding-bottom: 128px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: 2000px;
    background-position: top;
  }
</style>
