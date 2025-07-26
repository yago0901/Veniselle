export default function Symptoms() {
  return (
    <section className="s-symptoms">
      <div className="container">
        <div className="b-title text-uppercase text-center">
          <div>Sensazioni comuni alle gambe durante il giorno</div>
          <p>Quando le tue gambe hanno bisogno di cure:</p>
        </div>
        <div className="b-stages">
          <div className="b-stage">
            <img src="/img/stage.png" />
            <div className="text-uppercase"></div>
            <p className="text-white">
               Al risveglio dopo una notte agitata
            </p>
          </div>
          <div className="b-stage">
            <img src="/img/stage2.png" />
            <div className="text-uppercase"> </div>
            <p className="text-white">A metà giornata, quando la routine pesa</p>
          </div>
          <div className="b-stage">
            <img src="/img/stage3.png" />
            <div className="text-uppercase"></div>
            <p className="text-white">
              Alla fine del pomeriggio, è ora di rilassarsi
            </p>
          </div>
        </div>
      </div>
      <div className="transparent-title text-uppercase d-large"> Veniselle </div>
    </section>
  );
}
