import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Script from "next/script";
import Head from "next/head";

const tagId = process.env.TAG_ID;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(tagId);

  return (
    <html lang="en">
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id={tagId}"
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${tagId}', {
            page_path: window.location.pathname,
          });`,
        }}
      />
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
