import Usuario from './Usuario';

function Seguir() {
  return <div class="seguir">Seguir</div>
}

function TituloSugestao() {
  return (
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  );
}

function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Copyright() {
  return (
    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <Usuario usuario={props.usuario}/>
      <Seguir />
    </div>
  );
}

function Sugestoes(props) {
  return (
    <div class="sugestoes">
      <TituloSugestao />
      {props.usuarios.map(sugestao => <Sugestao usuario={sugestao} />)}
    </div>
  );
}

export default function SideBar() {
  const usuarios = [
    { nickname: "catanacomics", nome: "Catana", img: "assets/img/catanacomics.svg", esteUsuario: true },
    { nickname: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg", esteUsuario: false, razao: "Segue você" },
    { nickname: "chibirdart", img: "assets/img/chibirdart.svg", esteUsuario: false, razao: "Segue você" }, 
    { nickname: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg", esteUsuario: false, razao: "Novo no Instagram" },
    { nickname: "adorable_animals", img: "assets/img/adorable_animals.svg", esteUsuario: false, razao: "Segue você" },
    { nickname: "smallcutecats", img: "assets/img/smallcutecats.svg", esteUsuario: false, razao: "Segue você" }
  ];

  return (
    <div class="sidebar">
      <Usuario usuario={usuarios.filter(usuario => usuario.esteUsuario)[0]}/>
      <Sugestoes usuarios={usuarios.filter(usuario => !usuario.esteUsuario)}/>
      <Links />
      <Copyright />
    </div>
  );
}