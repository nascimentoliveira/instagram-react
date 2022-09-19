import React from 'react';

function Curtidas(props) {
  const quantidade = props.curtidas.quantidade[0];
  return (
    <div className="curtidas">
      <img src={props.curtidas.usuario.img} alt={props.curtidas.usuario.nickname} />
      <div className="texto">
        Curtido por <strong>{props.curtidas.usuario.nickname}</strong> e <strong>outras {quantidade.toLocaleString('pt-BR')} pessoas</strong>
      </div>
    </div>
  );
}

function BotaoSalvar(props) {
  let [salvar, setSalvar] = props.salvo;
  return (salvar ?
    <ion-icon
      onClick={() => setSalvar(!salvar)}
      name="bookmark-sharp"
      style={{ "color": "#262626", "animation": "animacaoAcao .5s ease 0s 1 normal both" }}
    >
    </ion-icon> :
    <ion-icon
      onClick={() => setSalvar(!salvar)}
      name="bookmark-outline"
    >
    </ion-icon>);
}

function Botaocutido(props) {
  let [cutido, setcutido] = props.curtidas.cutido;
  let [quantidade, setQuantidade] = props.curtidas.quantidade;
  if (cutido) {
    return (
      <ion-icon
        onClick={() => {
          setcutido(!cutido);
          setQuantidade(quantidade - 1);
        }}
        style={{ "color": "#ED4956", "animation": "animacaoAcao .5s ease 0s 1 normal forwards" }}
        name="heart-sharp">
      </ion-icon>);
  } else {
    return (
      <ion-icon
        onClick={() => {
          setcutido(!cutido);
          setQuantidade(quantidade + 1);
        }}
        name="heart-outline">
      </ion-icon>);
  }
}

function AcoesInferior(props) {
  return (
    <div className="acoes">
      <div>
        <Botaocutido curtidas={props.curtidas} />
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <BotaoSalvar salvo={props.salvo} />
      </div>
    </div>
  );
}

function Fundo(props) {
  return (
    <div className="fundo">
      <AcoesInferior curtidas={props.curtidas} salvo={props.salvo} />
      <Curtidas curtidas={props.curtidas} />
    </div>
  );
}

function CutidoIcone(props) {
  if (props.estado) {
    return <ion-icon name="heart-sharp"></ion-icon>
  } else {
    return null;
  }
}

function Conteudo(props) {
  let [cutido, setcutido] = props.curtidas.cutido;
  let [quantidade, setQuantidade] = props.curtidas.quantidade;
  let [clicado, setClicado] = React.useState(false)

  return (
    <div className="conteudo">
      <img
        onDoubleClick={() => {
          setClicado(true)
          setTimeout(() => setClicado(false), 1000);
          if (!cutido) {
            setcutido(true);
            setQuantidade(quantidade + 1);
          }
        }}
        src={props.conteudo.img}
        alt={props.conteudo.img.slice(11, -4)} />
      <CutidoIcone estado={clicado} />
    </div>
  );
}

function AcoesSuperior() {
  return (
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
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
      <Fundo curtidas={props.post.curtidas} salvo={props.post.salvo} />
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      usuario: { nickname: "meowed", img: "assets/img/meowed.svg" },
      conteudo: { img: "assets/img/gato-telefone.svg" },
      curtidas: { usuario: { nickname: "respondeai", img: "assets/img/respondeai.svg" }, quantidade: React.useState(101523), cutido: React.useState(false) },
      salvo: React.useState(false)
    },
    {
      usuario: { nickname: "barked", img: "assets/img/barked.svg" },
      conteudo: { img: "assets/img/dog.svg" },
      curtidas: { usuario: { nickname: "adorable_animals", img: "assets/img/adorable_animals.svg" }, quantidade: React.useState(99159), cutido: React.useState(false) },
      salvo: React.useState(false)
    }
  ];

  return (
    <div className="posts">
      {posts.map((post, indice) => <Post post={post} key={indice} />)}
    </div>
  );
}