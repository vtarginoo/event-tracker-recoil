import React from "react";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useListaDeEventos from "../../state/hooks/useListaDeEventos";
import Evento from "../Evento";

const ListaDeEventos: React.FC = () => {
  const eventos = useListaDeEventos();
  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento
            evento={evento}
            key={evento.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
