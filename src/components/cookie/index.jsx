"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleResponse = () => {
    setShowBanner(false);
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="cookieOverlay"></div>
      <div className="cookieBar">
        <div className="cookieContent">
          <p>
            Utilizziamo i cookie per migliorare la vostra esperienza. Alcuni cookie sono essenziali, altri ci aiutano ad
            analizzare il traffico. Oltre ad accettare di fornirci i vostri dati attraverso il modulo, potete scegliere
            quali cookie accettare.
            <Link href="https://gdpr.eu/cookies/" className="cookiePolicyLink">
              Scopri di più nella nostra Politica dei Cookie
            </Link>
          </p>
          <div className="cookieButtons">
            <button onClick={handleReject} className="cookieReject">
              Rifiuta i non essenziali
            </button>
            <button onClick={handleAccept} className="cookieAccept">
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
