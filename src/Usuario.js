import React from 'react';

function EditarNomeUsuario(props) {
  let novoNome = "";
  return (
    <ion-icon
      onClick={() => {
        novoNome = prompt("Insira abaixo o link da nova imagem:")
        if (novoNome !== null && novoNome.trim().length > 0) {
          props.setUsuario({
            nickname: props.usuario.nickname,
            nome: novoNome,
            img: props.usuario.img
          });
        } else {
          alert("Não foi possivel alterar o nome. Tente novamente!");
        }
      }}
      name="pencil">
    </ion-icon>
  );
}

function ImagemUsuario(props) {
  let novaImagem = "";
  return (
    <img
      onClick={() => {
        novaImagem = prompt("Insira abaixo o link da nova imagem:")
        if (novaImagem !== null && novaImagem.trim().length > 0) {
          props.setUsuario({
            nickname: props.usuario.nickname,
            nome: props.usuario.nome,
            img: novaImagem
          });
        } else {
          alert("Não foi possivel alterar imagem. Tente novamente!");
        }
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