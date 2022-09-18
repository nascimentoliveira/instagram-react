function EsteUsuario(props) {
  return (
    <div class="usuario">
      <img src={props.usuario.img} alt={props.usuario.nickname}/>
      <div class="texto">
        <strong>{props.usuario.nickname}</strong>
        <span>
          {props.usuario.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

function OutroUsuario(props) {
  return (
    <div class="usuario">
      <img src={props.usuario.img} alt={props.usuario.nickname} />
      <div class="texto">
        <div class="nome">{props.usuario.nickname}</div>
        <div class="razao">{props.usuario.razao}</div>
      </div>
    </div>
  );
}

export default function Usuario(props) {
  return (props.usuario.esteUsuario ?
    <EsteUsuario usuario={props.usuario} /> :
    <OutroUsuario usuario={props.usuario} />);
}