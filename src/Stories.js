function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.usuario.img} alt={props.usuario.nickname} />
      </div>
      <div className="usuario">
        {props.usuario.nickname}
      </div>
    </div >
  );
}

function Setinha() {
  return (
    <div className="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}

export default function Stories() {
  const stories = [
    { nickname: "9gag", img: "assets/img/9gag.svg" },
    { nickname: "meowed", img: "assets/img/meowed.svg" },
    { nickname: "barked", img: "assets/img/barked.svg" },
    { nickname: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
    { nickname: "wawawicomics", img: "assets/img/wawawicomics.svg" },
    { nickname: "respondeai", img: "assets/img/respondeai.svg" },
    { nickname: "filomoderna", img: "assets/img/filomoderna.svg" },
    { nickname: "memeriagourmet", img: "assets/img/memeriagourmet.svg" }
  ];

  return (
    <div className="stories">
      {stories.map((usuario, indice) => <Story usuario={usuario} key={indice} />)}
      <Setinha />
    </div>
  );
}