export default function Layout() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Post className="place-items-center justify-items-center" />
      </div>
      <Footer />
    </div>
  );
}
