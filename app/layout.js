import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  const navList = ["Home", "About", "Contact", "Cart"];

  return (
    <html lang="en">
      <body>
        <Navbar list={navList} />
        <main>{children}</main>
      </body>
    </html>
  );
}