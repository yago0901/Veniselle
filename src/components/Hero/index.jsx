export default function Hero() {
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
            avrai il mondo <br className="d-mobile" /> ai tuoi piedi!
          </div>
        </div>
      </section>
      <section className="top-pink m-white">
        <div className="container">
          <img className="prod-top" src="/img/prod.png" alt="Product" />
          <div className="b-title">
            <div>Goditi la tua vita appieno:</div>
          </div>
          <div className="top-list">
            <div>
              <span><img src="/img/icon.png" alt="Icon" /></span>
              <span>senza vene varicose</span>
            </div>
            <div>
              <span><img src="/img/icon2.png" alt="Icon" /></span>
              <span>senza angiomi stellari</span>
            </div>
            <div>
              <span><img src="/img/icon3.png" alt="Icon" /></span>
              <span>senza dolore, affaticamento e sensazione di pesantezza nelle gambe</span>
            </div>
          </div>
          <a className="btn" href="#order">Acquista ora</a>
        </div>
      </section>
    </section>
  )
}