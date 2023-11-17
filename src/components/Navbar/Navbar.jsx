import Link from "next/link";

function Navbar() {
  return (
    <nav className="container mx-auto">
      <ul  className="flex gap-10 text-lg font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new">Nueva tarea</Link>
        </li>

      </ul>
    </nav>
  );
}
export default Navbar;
