function Curtidas(props) {
  return (
    <div class="curtidas">
      <img src={props.curtidas.usuario.img} alt={props.curtidas.usuario.nickname}/>
      <div class="texto">
        Curtido por <strong>{props.curtidas.usuario.nickname}</strong> e <strong>outras {props.curtidas.quantidade} pessoas</strong>
      </div>
    </div>
  );
}

function Acoes(props) {
  return (props.flag === "superior" ? (
    <div class="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>)
    :
    (<div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>)
  );
}

function Fundo(props) {
  return (
    <div class="fundo">
      <Acoes flag="inferior" />
      <Curtidas curtidas={props.curtidas} />
    </div>
  );
}

function Conteudo(props) {
  return (
    <div class="conteudo">
      <img src={props.conteudo.img} alt={props.conteudo.img.slice(11, -4)}/>
    </div>
  );
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.usuario.img} alt={props.usuario.nickname} />
      {props.usuario.nickname}
    </div>
  );
}

function Topo(props) {
  return (
    <div class="topo">
      <Usuario usuario={props.usuario} />
      <Acoes flag="superior" />
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <Topo usuario={props.post.usuario} />
      <Conteudo conteudo={props.post.conteudo} />
      <Fundo curtidas={props.post.curtidas} />
    </div>
  );
}

export default function Posts(props) {
  const posts = [
    {
      usuario: { nickname: "meowed", img: "assets/img/meowed.svg" },
      conteudo: { img: "assets/img/gato-telefone.svg" },
      curtidas: { usuario: { nickname: "respondeai", img: "assets/img/respondeai.svg" }, quantidade: "101.523" }
    },
    {
      usuario: { nickname: "barked", img: "assets/img/barked.svg" },
      conteudo: { img: "assets/img/dog.svg" },
      curtidas: { usuario: { nickname: "adorable_animals", img: "assets/img/adorable_animals.svg" }, quantidade: "99.159" }
    }
  ]

  return (
    <div class="posts">
      {posts.map(p => <Post post={p} />)}
    </div>
  );
}