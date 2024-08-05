export default function Header() {
  const menuItems = [
    { href: "/", label: "About me" },
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
    <div className="navbar bg-base-100 sticky top-0 z-50 mb-2">
      <div className="flex justify-between items-center w-full">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {renderMenuItems()}
          </ul>
        </div>
        <a href="/" className="normal-case text-xl mx-4 font-bold">
          Portfolio
        </a>
        <div className="hidden lg:flex mx-4">
          <ul className="menu menu-horizontal p-0">{renderMenuItems()}</ul>
        </div>
      </div>
    </div>
  );
}
