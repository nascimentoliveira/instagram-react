import React from 'react';

function EditarNomeUsuario(props) {
  return (
    <ion-icon
      onClick={() => {
        props.setUsuario({
          nickname: props.usuario.nickname,
          nome: prompt("Insira abaixo o novo nome:"),
          img: props.usuario.img
        });
      }}
      name="pencil">
    </ion-icon>
  );
}

function ImagemUsuario(props) {
  return (
    <img
      onClick={() => {
        props.setUsuario({
          nickname: props.usuario.nickname,
          nome: props.usuario.nome,
          img: prompt("Insira abaixo o link da nova imagem:")
        });
      }}
      src={props.usuario.img}
      alt={props.usuario.nickname}
    />
  );
}

export default function Usuario() {
  let [usuario, setUsuario] = React.useState({
    nickname: "catanacomics",
    nome: "Catana",
    img: "assets/img/catanacomics.svg"
  });

  return (
    <div className="usuario">
      <ImagemUsuario usuario={usuario} setUsuario={setUsuario} />
      <div className="texto">
        <strong>{usuario.nickname}</strong>
        <span>
          {usuario.nome}
          <EditarNomeUsuario usuario={usuario} setUsuario={setUsuario} />
        </span>
      </div>
    </div>
  );
}