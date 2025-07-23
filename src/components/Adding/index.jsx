export default function Adding() {
  return (
    <section className="s-adding">
      <div className="container">
        <div className="b-subtitle text-center m-pink">
          <b> Altri ingredienti coadiuvanti </b>
        </div>
        <div className="adding-components">
          <div className="add-comp" >
            <img src="img/comp6.jpg" />
            <div> Mentolo </div> Rinfresca la pelle e dona una sensazione di benessere La sensazione di freschezza aiuta
            il corpo a sciogliere i grassi e a combattere il gonfiore
          </div>
          <div className="add-comp" >
            <img src="img/comp7.jpg" />
            <div> Caffeina </div> Stimola la circolazione cutanea, migliora l’elasticità della pelle
          </div>
          <div className="add-comp" >
            <img src="img/comp8.jpg" />
            <div> Pantenolo </div> Riduce l’infiammazione, favorisce l’assorbimento dei lividi e la cicatrizzazione dei
            tagli sulle gambe
          </div>
        </div>
        <div className="b-vitamins">
          <b>
            {" "}
            Vitamine A, C, E, K e vitamine del gruppo B; calcio; rame; ferro; cromo; magnesio; acidi organici, sali
            minerali{" "}
          </b>
          <img src="img/vitamins.png" />
        </div>
        <div className="b-note2"> Rafforzano e tonificano la pelle e i vasi sanguigni, decongestionandoli </div>
      </div>
    </section>
  );
}
