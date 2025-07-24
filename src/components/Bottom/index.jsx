"use client";
import { useState } from "react";

export default function Bottom() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (formData.name.length < 4) {
      alert("Nazwa musi składać się z co najmniej 4 liter");
      return;
    }

    const formattedPhone = formatPolishPhone(formData.phone);

    if (!formattedPhone) {
      alert("Nieprawidłowy numer telefonu, wymagane 9 cyfr.");
      return;
    }

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formData.name, phone: formData.phone }),
      });

      const data = await res.json();

      setResponseMessage(data.message || data.error);

      if (res.ok) {
        alert("Pedido enviado com sucesso!");
        setFormData({ name: "", phone: "" });
      } else {
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      alert("Błąd wysyłania zamówienia. Spróbuj ponownie.");
    }
  };

  return (
    <section className="s-bottom">
      <section className="bottom-white">
        <div className="container">
          <picture className="legs-bottom">
            <source media="(min-width: 991px)" srcSet="img/legs_bottom.png" />
            <img src="img/legs_bottom_m.png" />
          </picture>
          <div className="main-title text-uppercase m-pink"> Veniselle </div>
          <div className="main-subtitle text-uppercase">
            {" "}
            la migliore amica <br className="d-mobile" /> delle tue gambe!{" "}
          </div>
        </div>
      </section>
      <section className="bottom-pink">
        <div className="container">
          <img className="prod-bottom" src="img/prod.png" />
          <div className="bottom-center">
            <div className="b-title">
              <div> Goditi la tua vita appieno: </div>
            </div>
            <div className="top-list">
              <div>
                <span>
                  <img src="img/icon.png" />
                </span>
                <span> per gambe più leggere e confortevoli </span>
              </div>
              <div>
                <span>
                  <img src="img/icon2.png" />
                </span>
                <span> per una pelle più uniforme </span>
              </div>
              <div>
                <span>
                  <img src="img/icon3.png" />
                </span>
                <span> senza dolore, affaticamento e sensazione di pesantezza nelle gambe </span>
              </div>
            </div>
          </div>
          <div className="b-order">
            <div className="order-title text-uppercase">
              <b> Offerta speciale: SCONTO DEL 50% </b> FINO ALLA FINE DELLA SETTIMANA{" "}
            </div>
            <div className="b-prices text-center">
              <div className="old-price"> 98 EUR </div>
              <div className="new-price"> 49 EUR* </div>
            </div>
            <div className="b-form">
              <form onSubmit={handleSubmit}>
                <select className="input-field" id="country_code_selector">
                  <option value="IT"> Italia </option>
                </select>
                <input
                  className="input-field"
                  name="name"
                  placeholder="Nome"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input-field only_number"
                  name="phone"
                  placeholder="Numero di telefono"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <button className="btn js_submit" type="submit"> Acquista con lo sconto </button>
                <div className="b-note3">
                  {" "}
                  *Si prega di notare che la tariffa locale dell'Iva puo' variare a seconda del paese in cui si ordinano
                  i nostri prodotti.{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
