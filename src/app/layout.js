import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Veniselle | scopri il piacere di gambe più leggere",
  description:
    "Crema efficace contro vene varicose e angiomi stellari. Ripristina la leggerezza delle gambe in 3 settimane. Sicuro e naturale!",
  openGraph: {
    title: "Veniselle - Soluzione definitiva per vene varicose e gambe pesanti",
    description:
      "Elimina vene varicose, angiomi stellari e quella fastidiosa sensazione di pesantezza alle gambe con la potente formula naturale di Veniselle.",
    images: [
      {
        url: "URL_IMMAGINE_VENISELLE_IT", // Inserisci URL reale del prodotto
        width: 1200,
        height: 630,
      },
    ],
    url: "https://veniselle.vercel.app/", // Usa il tuo dominio
    type: "website",
    locale: "it_IT",
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

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16760579148"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16760579148');
    `,
          }}
        ></script>
      </head>
      <body className={`${montserrat.variable} `} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
