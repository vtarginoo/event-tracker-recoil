import style from "./App.module.scss";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Calendario from "./components/Calendario";
import ListaDeEventos from "./components/ListaDeEventos";
import { RecoilRoot } from "recoil";
import DebugObserver from "./components/debugObserver";

function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos />
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
