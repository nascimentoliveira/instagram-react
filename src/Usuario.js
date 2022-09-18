function EsteUsuario(props) {
  return (
    <div className="usuario">
      <img src={props.usuario.img} alt={props.usuario.nickname}/>
      <div className="texto">
        <strong>{props.usuario.nickname}</strong>
        <span>
          {props.usuario.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default function Usuario(props) {
  let usuario = {
    nickname: "catanacomics",
    nome: "Catana",
    img: "assets/img/catanacomics.svg"
  }
  
  return <Usuario usuario={usuario} /> 
}