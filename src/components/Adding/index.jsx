export default function Adding() {
  return (
    <section className="s-adding">
      <div className="container">
        <div className="b-subtitle text-center m-pink">
          <b> Altri ingredienti coadiuvanti </b>
        </div>
        <div className="adding-components">
          <div className="add-comp">
            <img src="img/comp6.jpg" />
            <div> Mentolo </div> Dona una sensazione rinfrescante di immediato sollievo e benessere
          </div>
          <div className="add-comp">
            <img src="img/comp7.jpg" />
            <div> Caffeina </div> Aiuta l'aspetto della pelle, rendendola più sana
          </div>
          <div className="add-comp">
            <img src="img/comp8.jpg" />
            <div> Pantenolo </div> Contribuisce alla morbidezza e all'idratazione della pelle
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
        <div className="b-note2"> Formula arricchita che aiuta a mantenere la pelle dall'aspetto sano</div>
      </div>
    </section>
  );
}
