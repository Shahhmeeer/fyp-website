import Link from "next/link";

export default function Header() {
  const navItems = ["Home", "About Us", "Cart", "Profile"];
  const navLinks = ["/", "/about", "/cart", "/profile"];
  return (
    <header className="sticky top-0 bg-primary text-secondary" style={{ height: "7dvh" }}>
      <div className="header-content flex justify-between items-center h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-mono">PlantE</h1>
        </div>
        {/* Actions */}
        <div>
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link href={navLinks[index]} className="hover:underline">{navItem}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
