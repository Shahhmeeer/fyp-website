import Link from "next/link";

export default function Header() {
  const navItems = ["Home", "Cart", "Add New Product", "Profile", "Support"];
  const navLinks = ["/home", "/cart", "/newProduct", "/profile", "/support"];
  return (
    <header className="sticky top-0 backdrop-blur-xl" style={{ height: "7dvh", backgroundColor: "rgba(0, 94, 0, 0.75)" }}>
      <div className="header-content flex justify-between items-center h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-green-100">PlantE</h1>
        </div>
        {/* Actions */}
        <div>
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link href={navLinks[index]} className="hover:bg-green-50 text-green-100 hover:text-black p-2 rounded-sm">
                    {navItem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
