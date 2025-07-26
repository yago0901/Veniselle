export default function Hero({scrollToForm}) {
  return (
    <section className="s-top">
      <section className="top-white">
        <div className="container">
          <picture className="legs-top">
            <source media="(min-width: 991px)" srcSet="/img/legs_top.png" />
            <img src="/img/legs_top_m.png" alt="Legs top" />
          </picture>
          <div className="main-title m-pink text-uppercase">Veniselle</div>
          <div className="main-subtitle text-uppercase">
            Gambe leggere, <br className="d-mobile" /> vita più leggera!
          </div>
        </div>
      </section>
      <section className="top-pink m-white">
        <div className="container">
          <img className="prod-top" src="/img/prod.png" alt="Product" />
          <div className="b-title">
            <div>Scopri il comfort che le tue gambe meritano:</div>
          </div>
          <div className="top-list">
            <div>
              <span><img src="/img/icon.png" alt="Icon" /></span>
              <span>Sensazione rinfrescante e rivitalizzante</span>
            </div>
            <div>
              <span><img src="/img/icon2.png" alt="Icon" /></span>
              <span>Cura quotidiana per gambe stanche</span>
            </div>
            <div>
              <span><img src="/img/icon3.png" alt="Icon" /></span>
              <span>Texture morbida che scivola sulla pelle</span>
            </div>
          </div>
          <a className="btn" onClick={scrollToForm}>Acquista ora</a>
        </div>
      </section>
    </section>
  )
}