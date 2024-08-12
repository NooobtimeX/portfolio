export default function Header() {
  const menuItems = [
    { href: "/", label: "About me" },
    { href: "/#skill", label: "Skill" },
    { href: "/#project", label: "Project" },
  ];

  const renderMenuItems = () => {
    const items = [];
    for (let i = 0; i < menuItems.length; i++) {
      items.push(
        <li key={i}>
          <a href={menuItems[i].href}>{menuItems[i].label}</a>
        </li>,
      );
    }
    return items;
  };

  return (
    <nav className="navbar sticky top-0 z-50">
      <div className="flex w-full items-center justify-between">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact menu dropdown-content mt-3 w-52 rounded-box p-2 shadow"
          >
            {renderMenuItems()}
          </ul>
        </div>
        <a href="/" className="mx-4 text-xl font-bold normal-case">
          Portfolio
        </a>
        <div className="mx-4 hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{renderMenuItems()}</ul>
        </div>
      </div>
    </nav>
  );
}
