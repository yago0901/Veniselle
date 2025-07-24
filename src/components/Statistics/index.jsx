export default function Statistics({scrollToForm}) {
  return (
    <section className="s-statistic">
      <section className="stat-white">
        <div className="container">
          <div className="b-title text-uppercase text-center">
            <div>Statistiche:</div> Molte donne cercano soluzioni per gambe più leggere
          </div>
          <div className="b-subtitle text-center m-pink">
            La vita è piena di grandi gioie e piccole grazie dal cielo:
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
              { img: "joy.jpg", text: "Un bel paio di scarpe nuove", unshow: 2 },
              { img: "joy2.jpg", text: "L'attesa di un miracolo", unshow: 3 },
              { img: "joy3.jpg", text: "Dei cibi gustosi", unshow: 2 },
              { img: "joy4.jpg", text: "Il sorriso di un bambino", unshow: 3 },
              { img: "joy5.jpg", text: "Un lavoro che si ama", unshow: 2 },
              { img: "joy6.jpg", text: "La conoscenza e la saggezza", unshow: 3 },
            ].map((joy, index) => (
              <div key={index} className={`b-joy joy-${index + 1} text-center`} >
                <img src={`/img/${joy.img}`} alt="Joy" />
                {joy.text}
              </div>
            ))}
          </div>
          <div className="large-title text-center text-uppercase">Ma, con le VENE VARICOSE,</div>
          <div className="b-title text-center text-uppercase">può influenzare il tuo benessere quotidiano</div>
          <div className="stat-content">
            <div className="stat-left">
              <img src="/img/photo.png" alt="Statistics" />
              <div className="b-title text-uppercase">
                <div className="m-white">
                  Molte donne cercano sollievo per gambe stanche e pesanti.
                </div>
                <a className="btn" onClick={scrollToForm}>Acquista ora</a>
              </div>
            </div>
            <div className="stat-right">
              <div className="b-subtitle text-uppercase">Le vene varicose non compaiono all'improvviso.</div>
              <div className="text-large">
                Si sviluppano gradualmente e la loro comparsa è influenzata dai seguenti fattori di rischio:
              </div>
              <div className="b-factors">
                {[
                  { img: "factor.jpg", text: "gravidanza e parto" },
                  {
                    img: "factor2.jpg",
                    text: "molto tempo in piedi",
                  },
                  { img: "factor3.jpg", text: "età" },
                  { img: "factor4.jpg", text: "scarpe strette e tacchi alti" },
                  { img: "factor5.jpg", text: "peso in eccesso" },
                  { img: "factor6.jpg", text: "predisposizione genetica" },
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
