import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pest Reject | Libera la tua casa da insetti e roditori senza veleni",
  description:
    "Soluzione ecologica a ultrasuoni per eliminare scarafaggi, zanzare, topi e altri parassiti. Sicuro per bambini e animali domestici - basta collegare e dimenticare!",
  openGraph: {
    title: "Pest Reject: Repellente ad Ultrasuoni per Insetti e Topi",
    description:
      "Addio a scarafaggi, formiche e roditori con la tecnologia a ultrasuoni. Senza prodotti chimici, senza odori, efficace in 24 ore!",
    images: [
      {
        url: "URL_IMMAGINE_PEST_REJECT_IT", // Inserisci URL reale
        width: 1200,
        height: 630,
      },
    ],
    url: "https://pestreject.it", // Usa il tuo dominio .it
    type: "website",
    locale: "it_IT", // Impostato per l'Italia
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Veniselle</title>
        <link rel="shortcut icon" href="/img/fav.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.variable} `} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
