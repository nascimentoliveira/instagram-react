function Seguir() {
  return <div className="seguir">Seguir</div>
}

function Usuario(props) {
  return (
    <div className="usuario">
      <img src={props.usuario.img} alt={props.usuario.nickname} />
      <div className="texto">
        <div className="nome">{props.usuario.nickname}</div>
        <div className="razao">{props.usuario.relacao}</div>
      </div>
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <Usuario usuario={props.usuario} />
      <Seguir />
    </div>
  );
}

function TituloSugestao() {
  return (
    <div className="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  );
}

export default function Sugestoes() {
  const outrosUsuarios = [
    { nickname: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg", relacao: "Segue você" },
    { nickname: "chibirdart", img: "assets/img/chibirdart.svg", relacao: "Segue você" },
    { nickname: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg", relacao: "Novo no Instagram" },
    { nickname: "adorable_animals", img: "assets/img/adorable_animals.svg", relacao: "Segue você" },
    { nickname: "smallcutecats", img: "assets/img/smallcutecats.svg", relacao: "Segue você" }
  ];

  return (
    <div className="sugestoes">
      <TituloSugestao />
      {outrosUsuarios.map((sugestao, indice) => <Sugestao usuario={sugestao} key={indice} />)}
    </div>
  );
}