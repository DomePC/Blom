import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="mx-8">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
