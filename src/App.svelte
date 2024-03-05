<script lang="ts">
  import { onMount } from "svelte";
  import { pauseContent, unpauseContent } from "./App.anims";
  import Break from "./lib/components/Break.svelte";
  import NavBar from "./lib/components/NavBar.svelte";
  import PauseMenu from "./lib/components/PauseMenu.svelte";
  import Section from "./lib/components/Section.svelte";
  import Inventory from "./lib/components/Inventory.svelte";
  import portfolioModals from "./assets/portfolioModals";
  import Modal from "./lib/components/Modal.svelte";

  let pauseMenu: PauseMenu;
  let contentDiv: HTMLDivElement;
  let modal: Modal;

  const navbarItems = [
    { name: "Início", href: "#" },
    { name: "Portifólio", href: "#portfolio" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  function openPauseMenu() {
    pauseContent(contentDiv);
    pauseMenu.toggle();
  }

  function closePauseMenuHandler() {
    unpauseContent(contentDiv);
  }

  function inventoryClickHandler(event: CustomEvent<{ index: number }>) {
    const index = event.detail.index;
    const modalItem = portfolioModals[index];

    pauseContent(contentDiv);
    modal.openWith(modalItem);
  }
  function closeModalHandler() {
    unpauseContent(contentDiv);
  }

  onMount(() => {
    openPauseMenu();
  });
</script>

<NavBar items={navbarItems} on:menuclick={openPauseMenu} />
<PauseMenu
  bind:this={pauseMenu}
  on:close={closePauseMenuHandler}
  items={navbarItems}
/>
<Modal bind:this={modal} on:close={closeModalHandler} />
<div id="content" bind:this={contentDiv}>
  <Section bgimg="/assets/img/bg.jpg">
    <img
      slot="image"
      class="round"
      width="240px"
      src="https://avatars.githubusercontent.com/u/48167880"
      alt="logo"
      style="margin-bottom: 36px;"
    />

    <h1>Jonas de Melo</h1>
    <Break />

    <h3>Full Stack - Web Developer - Game Developer</h3>
  </Section>

  <Section id="portfolio" bg="black">
    <h2>Portfólio</h2>

    <Break />

    <h4>Minhas ideologias e experiências</h4>

    <Inventory items={portfolioModals} on:click={inventoryClickHandler} />
  </Section>

  <Section id="about" bg="black2">
    <h2>Sobre</h2>

    <Break />

    <p>
      Meu nome é Jonas de Melo Cavalcante Filho, tenho 21 anos, moro na região
      nordeste do Brasil, no estado do Ceará, na cidade Juazeiro do Norte.
      Quando muito novo, por volta de 11 anos, eu tinha o objetivo de criar um
      jogo de computador. Foi então que, dedicado, pesquisei como criar meu
      próprio jogo. Durante esse período, eu estava aprendendo a criar jogos
      baseados em texto utilizando scripts que eram executados pelo programa
      cmd, que está presente em qualquer máquina com o sistema operacional
      Windows. Após me divertir com minhas pequenas criações, aos 14 anos eu
      decidi baixar a game engine Unity, com o intúito de criar jogos com
      gráficos e mais longos. Porém, a linguagem de programação C# me cativou.
      Eu queria aprender mais. Foi então que conhecí a linguagem Python e
      comecei a criar programas desktop com interface gráfica. A partir daí, eu
      queria aprender mais e mais. Então, me aventurei em uma jornada de
      aprender mais linguagens, mais tecnologias e criar projetos cada vez
      maiores.
    </p>

    <p>
      Este site/repositório é um espaço pessoal com objetivo de mostrar meus
      projetos e mostrar quem sou eu. Eu acredito que estudar programação deve
      ser simples e divertido. Usar a imaginação e a criatividade para programar
      é a melhor maneira de aprender. Esse site usa elementos do jogo Red Dead
      Redemption 2, que é um dos meus jogos favoritos, para mostrar que é
      possível criar projetos criativos e divertidos usando a programação.
    </p>

    <p>
      Quero também aproveitar este espaço para agradeçer aos meus professores,
      meus colegas e minha família por ter sempre me apoiado durante a minha
      evolução profissional. Prometo dar o meu melhor a fim de contribuir na
      evolução da tecnologia, utilizando meu conhecimento e experiência de forma
      ética nos campos em que trabalho.
    </p>
  </Section>

  <Section id="contact" bg="black">
    <h2 class="White Dead Hapna">Contato</h2>

    <Break />

    <h3 class="Medium White Hapna">
      Me mande um <a
        class="external-link"
        href="mailto:djjjonas02@gmail.com"
        target="_blank"
        >email
        <i class="fa fa-external-link"></i></a
      >
    </h3>
    <h3 class="Medium White Hapna">
      Me mande uma mensagem pelo <a
        class="external-link"
        href="https://www.linkedin.com/in/jonas-de-melo-9775a2259/"
        target="_blank">LinkedIn <i class="fa fa-external-link"></i></a
      >
    </h3>

    <p class="note">
      Não possuo redes sociais como Instagram, Facebook ou X/Twitter. Apenas
      Linkedin, Whatsapp e Telegram.<br />
      Infelizmente, redes sociais prendem a minha atenção e gastam meu tempo, por
      isso, não as possuo.
    </p>
  </Section>
</div>

<style lang="less">
  @import "lib/variables/variables.less";
  #content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: @white;
  }
  h1 {
    @media screen and (max-width: 485px) {
      font-size: 3.6rem;
    }
  }
  h2 {
    @media screen and (max-width: 485px) {
      font-size: 3rem;
    }
  }
  h3 {
    @media screen and (max-width: 485px) {
      font-size: 1.1rem;
    }
  }
  h4 {
    @media screen and (max-width: 485px) {
      font-size: 1.3rem;
    }
  }
  p {
    width: 485px;
    font-size: 1rem;
    text-align: justify;
    @media screen and (max-width: 485px) {
      width: 95%;
    }
  }
  .note {
    width: 485px;
    font-size: 0.8rem;
    color: @grey;
    @media screen and (max-width: 485px) {
      width: 95%;
    }
  }
</style>
