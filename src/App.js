import NavBar from './NavBar';
import Corpo from './Corpo';

function BotoesMobile() {
  return (
    <div className="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <NavBar />
      <Corpo />
      <BotoesMobile />
    </div>
  );
}