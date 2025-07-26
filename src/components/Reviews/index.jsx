export default function Reviews() {
  return (
    <section className="s-reviews">
      <div className="container">
        <img className="d-large img-puzzle" src="img/puzzle.png" />
        <img className="d-large img-puzzle2" src="img/puzzle2.png" />
        <img className="d-large img-puzzle3" src="img/puzzle3.png" />
        <div className="b-title text-center text-uppercase">
          <div> Veniselle </div> Il tuo alleato nella cura quotidiana delle gambe
        </div>
        <div className="b-puzzle">
          <picture className="img-sad">
            <source media="(min-width: 991px)" srcSet="img/puzzle_sad.png" />
            <img src="img/puzzle_sad_m.png" />
          </picture>
          <picture className="img-glad">
            <source media="(min-width: 991px)" srcSet="img/puzzle_glad.png" />
            <img src="img/puzzle_glad_m.png" />
          </picture>
          <picture className="puzzle-prod">
            <source media="(min-width: 991px)" srcSet="img/puzzle_prod.png" />
            <img src="img/puzzle_prod_m.png" />
          </picture>
          <img className="d-large img-prod" src="img/prod.png" />
        </div>
        <div className="b-reviews">
          <div className="b-review">
            <img className="img-ava" src="img/ava.jpg" />
            <div className="rev-note m-pink text-uppercase"><span> Adora i tacchi </span><br/><span> alti </span></div>
            <div className="rev-text">
              <img className="img-responsive" src="img/review.jpg" />
              <div className="rev-inner">
                <div className="m-pink"> Viola, 24 anni </div>
                <p> Adoro indossare i tacchi alti e Veniselle mi offre il comfort di cui ho bisogno per brillare tutto il giorno!</p>
              </div>
            </div>
          </div>
          <div className="b-review">
            <img className="img-ava" src="img/ava2.jpg" />
            <div className="rev-note m-pink text-uppercase">
              <span> Mamma di un bimbo </span><span> ultravivace </span></div>
            <div className="rev-text">
              <img className="img-responsive" src="img/review2.jpg" />
              <div className="rev-inner">
                <div className="m-pink"> Francesca, 31 anni </div>
                <p> Dopo aver giocato con mio figlio al parco, Veniselle mi aiuta a recuperare le energie! </p>
              </div>
            </div>
          </div>
          <div className="b-review">
            <img className="img-ava" src="img/ava3.jpg" />
            <div className="rev-note m-pink text-uppercase"><span> Hair sylist </span><span> di successo </span></div>
            <div className="rev-text">
              <img className="img-responsive" src="img/review3.jpg" />
              <div className="rev-inner">
                <div className="m-pink"> Cristina, 28 anni </div>
                <p> Come parrucchiera, passo tutta la giornata in piedi. Veniselle è il mio segreto per avere gambe toniche! </p>
              </div>
            </div>
          </div>
          <div className="b-review">
            <img className="img-ava" src="img/ava4.jpg" />
            <div className="rev-note m-pink text-uppercase"><span> Pensionata </span><span> attiva </span></div>
            <div className="rev-text">
              <img className="img-responsive" src="img/review4.jpg" />
              <div className="rev-inner">
                <div className="m-pink"> Simona, 67 anni </div>
                <p> Attiva e piena di vita! Veniselle fa parte della mia routine di cura personale. </p>
              </div>
            </div>
          </div>
          <div className='text-center disclaimer'>
            <h1>Veniselle è un prodotto cosmetico. I risultati variano da persona a persona. Non sostituisce una visita medica. In caso di problemi venosi, consultare un flebologo.</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
