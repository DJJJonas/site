<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sfx } from "../../assets/sfx";
  import Break from "./Break.svelte";
  import IconKeyButton from "./IconKeyButton.svelte";

  const dispatch = createEventDispatcher();

  interface ModalInfo {
    title: string;
    src: string;
    description: string;
  }

  let info: ModalInfo = {
    title: "This is a title",
    src: "video_games",
    description: "",
  };
  let container: HTMLDivElement;
  let modal: HTMLDivElement;
  export function isActive() {
    return container.style.display !== "none";
  }

  export function open() {
    container.style.display = "flex";
    sfx.openBag.play();
  }

  export function close() {
    sfx.closeBag.play();
    modal
      .animate(
        /**
         *     from {
      clip-path: inset(0 0 100% 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
        */
        [{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 100% 0)" }],
        {
          duration: 160,
          easing: "ease-in",
        }
      )
      .finished.then(() => {
        container.style.display = "none";
        dispatch("close");
      });
  }

  export function openWith(modalInfo: ModalInfo) {
    info = modalInfo;
    open();
  }
</script>

<div class="container" bind:this={container}>
  <div class="modal" bind:this={modal}>
    <h1 class="modalTitle">{info.title}</h1>

    <Break color="#7c7c7c" />

    <img class="modalImg" src="assets/img/{info.src}.png" alt="modal" />

    <p class="modalDescription">{@html info.description}</p>

    <IconKeyButton on:click={close}>Fechar</IconKeyButton>
  </div>
</div>

<style lang="less">
  @import "../../lib/variables/variables.less";
  .container {
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    .modal {
      animation: intro 0.15s ease-out;
      background-color: @black;
      color: @white;
      max-width: 750px;
      min-width: 75px;
      width: 80%;

      padding: 32px;
      border-radius: 5px;
      border-style: solid;
      border-color: #4d0406;
      border-width: 2px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .modalTitle {
        font-family: "Catalogue";
        text-align: center;
        width: 485px;
      }

      .modalImg {
        margin: 0;
        padding: 0;
        border-radius: 16px;
        width: 485px;
      }

      .modalDescription {
        font-size: medium;
        width: 485px;
        text-align: justify;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        .modalTitle {
          font-size: 3rem;
        }

        .modalImg {
          width: 100%;
        }

        .modalDescription {
          width: 100%;
        }
      }
    }
  }

  @keyframes intro {
    from {
      clip-path: inset(0 0 100% 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
</style>
