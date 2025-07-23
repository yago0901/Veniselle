export default function Actions() {
  return (
    <section className="s-actions">
      <div className="container">
        <div className="b-title text-center text-uppercase">
          <div> Veniselle </div> ti rimette in piedi nel giro di tre settimane!
        </div>
        <div className="b-white">
          <div className="b-title m-pink">
            <div className="text-uppercase"> Il segreto di Veniselle cream </div> estratti vegetali vasoprotettori
          </div>
          <p>
            {" "}
            I componenti attivi di Veniselle penetrano immediatamente nella pelle e apportano ai vasi sanguigni grandi
            quantità di escina, esculina e vitamina PP. Queste sostanze rafforzano le pareti delle vene, ripristinano un
            sano flusso sanguigno e ridonano una sensazione di leggerezza alle gambe.{" "}
          </p>
        </div>
        <img className="img-chestnut" src="img/chestnut.png" />
        <div className="left-action">
          <div className="b-subtitle text-uppercase"> Gli effetti di Veniselle </div>
          <ul className="list-actions">
            <li data-unshow="1"> Rafforza le pareti dei vasi sanguigni, ne aumenta l’elasticità e la permeabilità </li>
            <li data-unshow="1"> Riduce la congestione venosa, la dimensione delle varici e degli angiomi stellari </li>
            <li data-unshow="1"> Combatte il gonfiore </li>
            <li data-unshow="1"> Allevia dolore e affaticamento </li>
          </ul>
        </div>
        <div className="before-after">
          <div className="b-subtitle text-uppercase"> Prima e dopo Veniselle </div>
          <div className="b-flex">
            <div className="text-center text-uppercase">
              <img className="img-responsive" src="img/before.jpg" />
              <span> Prima</span>
            </div>
            <div className="text-center text-uppercase">
              <img className="img-responsive" src="img/after.jpg" />
              <span> Dopo 3-4 settimane di uso di Veniselle </span>
            </div>
          </div>
        </div>
        <div className="b-note text-center">
          {" "}
          *Efficace al primo e al secondo stadio delle affezioni da varici Al terzo stadio, si consiglia di impiegare
          Veniselle come trattamento coadiuvante{" "}
        </div>
      </div>
    </section>
  );
}
