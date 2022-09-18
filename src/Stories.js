function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.img} alt={props.usuario}/>
      </div>
      <div className="usuario">
        {props.usuario}
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
    { img: "assets/img/9gag.svg", usuario: "9gag" },
    { img: "assets/img/meowed.svg", usuario: "meowed" },
    { img: "assets/img/barked.svg", usuario: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
  ];

  return (
    <div className="stories">
      {stories.map((story, indice) => <Story img={story.img} usuario={story.usuario} key={indice}/>)}
      <Setinha />
    </div>
  );
}