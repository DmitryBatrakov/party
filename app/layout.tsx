import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import { Pacifico } from 'next/font/google';
import { Fira_Code } from 'next/font/google';
import { Playwrite_HU } from 'next/font/google';

export const metadata = {
  title: "Девишник Катюши",
  description: "Тёплые пожелания и воспоминания в честь девичника Кати. Загляни внутрь 💕",
   openGraph: {
    title: 'Девичник Катюши 💍',
    description: 'Тёплые пожелания и воспоминания в честь девичника Кати. Загляни внутрь 💕',
    url: 'https://party-production-58fb.up.railway.app/', 
    siteName: 'Девичник Катюши',
    locale: 'ru_RU',
    type: 'website',
  },
}


const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  weight: ['300', '400', '500', '700'],
});

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
});

const playwrite = Playwrite_HU({
  variable: '--font-playwrite',
  weight: '400',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${pacifico.variable} ${fira.variable} ${playwrite.variable} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
