import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
