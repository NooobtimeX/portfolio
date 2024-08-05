import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const iconStyle = { fontSize: "2rem" };

  const socialIcons = [
    {
      component: <FaGithub style={iconStyle} />,
      link: "https://github.com/NooobtimeX",
    },
    {
      component: <FaYoutube style={iconStyle} />,
      link: "https://www.youtube.com/@nooobtimex2003",
    },
    {
      component: <FaFacebook style={iconStyle} />,
      link: "https://www.facebook.com/xnooobtime",
    },
    {
      component: <FaLinkedin style={iconStyle} />,
      link: "https://www.linkedin.com/in/NooobtimeX",
    },
    { component: <FaTwitter style={iconStyle} />, link: "#" },
  ];

  return (
    <footer className="footer bg-neutral text-neutral-content p-10 my-4">
      <aside>
        <p>Wongsaphat Puangsorn</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.link}>
              {icon.component}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
}
