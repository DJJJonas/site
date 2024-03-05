<script type="ts">
  export let color = "white";
</script>

<div>
  <div style="background-color: {color};"></div>
  <i class="fa fa-star" style="color: {color};"></i>
  <div style="background-color: {color};"></div>
</div>

<style lang="less">
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    > i {
      margin: 16px;
      font-size: 2.2rem;
    }

    > div {
      width: 112px;
      height: 4px;
      border-radius: 2px;
      background-color: currentColor;
    }
  }
</style>
