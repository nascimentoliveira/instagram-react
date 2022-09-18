import React from 'react';

function Curtidas(props) {
  return (
    <div className="curtidas">
      <img src={props.curtidas.usuario.img} alt={props.curtidas.usuario.nickname} />
      <div className="texto">
        Curtido por <strong>{props.curtidas.usuario.nickname}</strong> e <strong>outras {props.curtidas.quantidade[0].toLocaleString('pt-BR')} pessoas</strong>
      </div>
    </div>
  );
}

function BotaoCurtir(props) {
  if (props.curtidas.curtir[0]) {
    return (
      <ion-icon
        onClick={() => {
          props.curtidas.curtir[1](!props.curtidas.curtir[0]);
          props.curtidas.quantidade[1](props.curtidas.quantidade[0] - 1);
        }}
        style={{ "color": "red" }}
        name="heart-sharp">
      </ion-icon>);
  } else {
    return (
      <ion-icon
        onClick={() => {
          props.curtidas.curtir[1](!props.curtidas.curtir[0]);
          props.curtidas.quantidade[1](props.curtidas.quantidade[0] + 1);
        }}
        name="heart-outline">
      </ion-icon>);
  }
}

function BotaoSalvar(props) {
  if (props.salvar[0]) {
    return <ion-icon onClick={() => props.salvar[1](!props.salvar[0])} name="bookmark-sharp"></ion-icon>;
  } else {
    return <ion-icon onClick={() => props.salvar[1](!props.salvar[0])} name="bookmark-outline"></ion-icon>;
  }
}

function AcoesSuperior() {
  return (
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}

function AcoesInferior(props) {
  return (
    <div className="acoes">
      <div>
        <BotaoCurtir curtidas={props.curtidas} />
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <BotaoSalvar salvar={props.salvar} />
      </div>
    </div>
  );
}

function Fundo(props) {
  return (
    <div className="fundo">
      <AcoesInferior curtidas={props.curtidas} salvar={props.salvar} />
      <Curtidas curtidas={props.curtidas} />
    </div>
  );
}

function Conteudo(props) {
  return (
    <div className="conteudo">
      <img
        onClick={() => {
          if (!props.curtidas.curtir[0]) {
            props.curtidas.curtir[1](true);
            props.curtidas.quantidade[1](props.curtidas.quantidade[0] + 1);
          }
        }}
        src={props.conteudo.img}
        alt={props.conteudo.img.slice(11, -4)} />
    </div>
  );
}

function Usuario(props) {
  return (
    <div className="usuario">
      <img src={props.usuario.img} alt={props.usuario.nickname} />
      {props.usuario.nickname}
    </div>
  );
}

function Topo(props) {
  return (
    <div className="topo">
      <Usuario usuario={props.usuario} />
      <AcoesSuperior />
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <Topo usuario={props.post.usuario} />
      <Conteudo conteudo={props.post.conteudo} curtidas={props.post.curtidas} />
      <Fundo curtidas={props.post.curtidas} salvar={props.post.salvar} />
    </div>
  );
}

export default function Posts(props) {
  const posts = [
    {
      usuario: { nickname: "meowed", img: "assets/img/meowed.svg" },
      conteudo: { img: "assets/img/gato-telefone.svg" },
      curtidas: { usuario: { nickname: "respondeai", img: "assets/img/respondeai.svg" }, quantidade: React.useState(101523), curtir: React.useState(false) },
      salvar: React.useState(false)
    },
    {
      usuario: { nickname: "barked", img: "assets/img/barked.svg" },
      conteudo: { img: "assets/img/dog.svg" },
      curtidas: { usuario: { nickname: "adorable_animals", img: "assets/img/adorable_animals.svg" }, quantidade: React.useState(99159), curtir: React.useState(false) },
      salvar: React.useState(false)
    }
  ]

  return (
    <div className="posts">
      {posts.map((postagem, indice) => <Post post={postagem} key={indice} />)}
    </div>
  );
}