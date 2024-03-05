<script lang="ts">
  export let href: string;
  export let target: string = "_blank";
</script>

<a {href} {target}>
  <slot />
  <i class="fa fa-external-link"></i>
</a>

<style lang="less">
  @import "../../lib/variables/variables.less";
  a {
    color: @grey;
    text-decoration: none;
  }
</style>
