export default function Actions({ scrollToForm }) {
  return (
    <section className="s-actions">
      <div className="container">
        <div className="b-title text-center text-uppercase">
          <div> Veniselle </div> può aiutare a ritrovare il benessere delle gambe in poche settimane
        </div>
        <div className="b-white">
          <div className="b-title m-pink">
            <div className="text-uppercase"> Il segreto di Veniselle cream </div> estratti vegetali vasoprotettori
          </div>
          <p>
            {" "}
            I componenti attivi di Veniselle penetrano immediatamente nella pelle e apportano ai vasi sanguigni grandi
            quantità di escina, esculina e vitamina PP. Queste sostanze rafforzano le pareti delle vene, ripristinano un
            sano flusso sanguigno e contribuiscono a una sensazione di benessere.{" "}
          </p>
        </div>
        <img className="img-chestnut" src="img/chestnut.png" />
        <div className="left-action">
          <div className="b-subtitle text-uppercase"> Gli effetti di Veniselle </div>
          <ul className="list-actions">
            <li data-unshow="1"> Rafforza le pareti dei vasi sanguigni, ne aumenta l’elasticità e la permeabilità </li>
            <li data-unshow="1"> Aiuta a migliorare l'aspetto della pelle e la circolazione </li>
            <li data-unshow="1"> Combatte il gonfiore </li>
            <li data-unshow="1"> Allevia dolore e affaticamento </li>
          </ul>
        </div>
        <div className="before-after">
          <div className="b-subtitle text-uppercase"> Prima e dopo Veniselle </div>
          <div className="b-flex">
            <div className="text-center text-uppercase">
              <img className="img-responsive" src="img/after.jpg" />
              <span> Dopo 3-4 settimane di uso di Veniselle </span>
            </div>
          </div>
        </div>
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
