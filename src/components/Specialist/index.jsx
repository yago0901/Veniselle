export default function Specialist({scrollToForm}) {
  return (
    <section className="s-specialist">
      <div className="container">
        <img className="img-spec" src="img/spec.png" />
        <div className="spec-text">
          <div className="b-title text-uppercase"> L’opinione dell’esperta su </div>
          <div className="largest-title text-uppercase"> Veniselle </div>
          <div className="b-white2">
            <div className="m-pink">
              <b> Bianca Gracco </b>
            </div>
            <p>
              <b> Naturopata, studiosa di cosmetica naturale </b>
            </p>
            <p>
              {" "}
              Quello che mi piace di Veniselle è che un tubo contiene le giuste proporzioni di tutti i componenti
              stimolanti del sistema venoso noti alla scienza. Questa formula può aiutare a migliorare il comfort delle gambe al primo e al secondo stadio e contribuire a migliorare il comfort e la leggerezza delle gambe, creando le condizioni per tornare ad avere
              una vita normale. Formulato con ingredienti selezionati per supportare il benessere delle gambe e nella favorisce una circolazione sana.{" "}
            </p>
            <a className="btn" onClick={scrollToForm}>Acquista ora</a>
          </div>
        </div>
      </div>
    </section>
  );
}
