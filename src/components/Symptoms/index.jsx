export default function Symptoms() {
  return (
    <section className="s-symptoms">
      <div className="container">
        <div className="b-title text-uppercase text-center">
          <div> Sintomi delle vene varicose </div>
        </div>
        <div className="b-stages">
          <div className="b-stage" >
            <img src="/img/stage.png" />
            <div className="text-uppercase"> primo stadio </div> Malessere, stanchezza, sensazione di gambe pesanti la sera,
            angiomi stellari sulla pelle
          </div>
          <div className="b-stage">
            <img src="/img/stage2.png" />
            <div className="text-uppercase"> secondo stadio </div> vene ingrossate, noduli sulle gambe
          </div>
          <div className="b-stage" >
            <img src="/img/stage3.png" />
            <div className="text-uppercase"> terzo stadio </div> indurimento delle varici, sviluppo di nuove varici,
            infiammazione e tendenza al sanguinamento, stinchi e caviglie gonfie. Al terzo stadio, l’intervento
            chirurgico è inevitabile.
          </div>
        </div>
      </div>
      <div className="transparent-title text-uppercase d-large"> Veniselle </div>
    </section>
  );
}
