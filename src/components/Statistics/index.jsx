export default function Statistics({scrollToForm}) {
  return (
    <section className="s-statistic">
      <section className="stat-white">
        <div className="container">
          <div className="b-title text-uppercase text-center">
            <div>Statistiche:</div> 8 donne su 10 cercano maggiore comfort per le loro gambe nella vita quotidiana
          </div>
          <div className="b-subtitle text-center m-pink">
            La vita è fatta di momenti speciali:
          </div>
          <picture className="img-girl">
            <source media="(min-width: 991px)" srcSet="/img/girl.png" />
            <img src="/img/girl_m.png" alt="Girl" />
          </picture>
        </div>
      </section>
      <section className="stat-pink">
        <div className="container">
          <div className="b-joys">
            {[
              { img: "joy.jpg", text: "Indossare quel paio di scarpe che amiamo", unshow: 2 },
              { img: "joy2.jpg", text: "Gustare piatti deliziosi con chi amiamo", unshow: 3 },
              { img: "joy3.jpg", text: "Vedere il sorriso spontaneo di un bambino", unshow: 2 },
              { img: "joy4.jpg", text: "Realizzarsi con un lavoro che dia uno scopo", unshow: 3 },
              { img: "joy5.jpg", text: "Imparare cose nuove e crescere ogni giorno", unshow: 2 },
              { img: "joy6.jpg", text: "Credere nelle piccole magie della vita quotidiana", unshow: 3 },
            ].map((joy, index) => (
              <div key={index} className={`b-joy joy-${index + 1} text-center`} >
                <img src={`/img/${joy.img}`} alt="Joy" />
                {joy.text}
              </div>
            ))}
          </div>
          <div className="large-title text-center text-uppercase">Giorno dopo giorno,</div>
          <div className="b-title text-center text-uppercase">le tue gambe meritano cure speciali</div>
          <div className="stat-content">
            <div className="stat-left">
              <img src="/img/photo.png" alt="Statistics" />
              <div className="b-title text-uppercase">
                <div className="m-white">
                  La nostra routine può affaticare le gambe
                </div>
                <a className="btn" onClick={scrollToForm}>Acquista ora</a>
              </div>
            </div>
            <div className="stat-right">
              <div className="b-subtitle text-uppercase">Veniselle - Comfort quotidiano per gambe sempre in movimento</div>
              <div className="text-large">
                Scopri la sensazione rinfrescante per le gambe stanche. Con ingredienti naturali al 99%, Veniselle offre:
              </div>
              <div className="b-factors">
                {[
                  { img: "factor.jpg", text: "Particolare attenzione alle donne che desiderano una sensazione rinfrescante" },
                  { img: "factor2.jpg", text: "Gambe leggere dopo lunghe giornate"},
                  { img: "factor3.jpg", text: "Una vita attiva a qualsiasi età" },
                  { img: "factor4.jpg", text: "Textura che scivola delicatamente sulla pelle" },
                  { img: "factor5.jpg", text: "I tuoi piedi meritano un'attenzione speciale" },
                  { img: "factor6.jpg", text: "Idratazione delicata per mamme sempre in movimento" },
                ].map((factor, index) => (
                  <div key={index} className="b-factor">
                    <img src={`/img/${factor.img}`} alt="Factor" />
                    {factor.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
