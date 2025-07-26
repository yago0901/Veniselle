export default function Specialist({ scrollToForm }) {
  return (
    <section className="s-specialist">
      <div className="container">
        <img className="img-spec" src="img/spec.png" />
        <div className="spec-text">
          <div className="b-title text-uppercase"> L'opinione dell'esperta su </div>
          <div className="largest-title text-uppercase"> Veniselle </div>
          <div className="b-white2">
            <div className="m-pink">
              <b> Bianca Gracco </b>
            </div>
            <p>
              <b> Consulente di benessere, studiosa di cosmetica naturale </b>
            </p>
            <p>
              {" "}
              "In qualità di esperta di cosmetici naturali, apprezzo particolarmente la formulazione equilibrata di
              Veniselle. I suoi ingredienti accuratamente selezionati offrono: <br />
              ✔ Una piacevole sensazione di freschezza <br />
              ✔ Idratazione profonda per la pelle <br />
              ✔ Comforto e ottima sensazione <br />
              Lo consiglio come parte della routine quotidiana di cura per chi desidera gambe dall'aspetto sano e
              una sensazione di freschezza."{" "}
            </p>
            <a className="btn" onClick={scrollToForm}>
              Acquista ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
