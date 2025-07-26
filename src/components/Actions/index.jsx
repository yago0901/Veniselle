export default function Actions({ scrollToForm }) {
  return (
    <section className="s-actions">
      <div className="container">
        <div className="b-title text-center text-uppercase">
          <div> Veniselle </div> Comfort e leggerezza per le tue gambe
        </div>
        <div className="b-white">
          <div className="b-title m-pink">
            <div className="text-uppercase"> Il segreto di Veniselle: </div> Una formula unica con estratti vegetali
            naturali che garantiscono:
          </div>
          <p>
            {" "}
            ✔ Sensazione rinfrescante <br />
            ✔ Idratazione profonda per una pelle morbida <br />
            ✔ Sensazione di leggerezza che dura ores <br />
            Con ingredienti accuratamente selezionati: <br />
            🌿 Extrato de Castanha-da-Índia – ingrediente naturale <br />
            🌿 Mentol Natural – effetto rinfrescante <br />
            🌿 Cafeína – aiuta l'aspetto della pelle{" "}
          </p>
        </div>
        <img className="img-chestnut" src="img/chestnut.png" />
        <div className="b-note text-center">
          {" "}
          *Può essere utile per migliorare il comfort delle gambe, può essere utilizzato per supportare il benessere
          generale delle gambe{" "}
        </div>
        <div className="text-center">
          <a className="btn" onClick={scrollToForm}>
            Acquista ora
          </a>
        </div>
      </div>
    </section>
  );
}
