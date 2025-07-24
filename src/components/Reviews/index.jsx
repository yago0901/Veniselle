export default function Reviews() {
  return (
    <section className="s-reviews">
      <div className="container">
        <img className="d-large img-puzzle" src="img/puzzle.png" />
        <img className="d-large img-puzzle2" src="img/puzzle2.png" />
        <img className="d-large img-puzzle3" src="img/puzzle3.png" />
        <div className="b-title text-center text-uppercase">
          <div> Veniselle </div> , un tassello del puzzle per costruire una vita serena
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
                <p> Ora i miei ammiratori sono davvero pronti a gettare tutto ciò che hanno ai miei piedi! </p>
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
                <p> Posso passare tutto il giorno a correre nel parco con Diego senza che, alla sera, mi facciano male
                  le gambe! </p>
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
                <p> Con Veniselle, sono pronta a creare splendide acconciature per tutto il giorno e non mi sento mai
                  stanca! </p>
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
                <p> Niente più dolore alle gambe, la mia età non mi impedisce di praticare sport! </p>
              </div>
            </div>
          </div>
          <div className='text-center disclaimer'>
            <h1>Veniselle è un prodotto cosmetico. I risultati variano da persona a persona. Non sostituisce una consulenza medica. In caso di problemi venosi, consultare un flebologo.</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
