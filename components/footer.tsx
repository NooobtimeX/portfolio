import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    {
      component: <FaGithub style={{ fontSize: "2rem" }} />,
      link: "https://github.com/NooobtimeX",
    },
    {
      component: <FaYoutube style={{ fontSize: "2rem" }} />,
      link: "https://www.youtube.com/@nooobtimex2003",
    },
    { component: <FaFacebook style={{ fontSize: "2rem" }} />, link: "#" },
    { component: <FaLinkedin style={{ fontSize: "2rem" }} />, link: "#" },
    { component: <FaTwitter style={{ fontSize: "2rem" }} />, link: "#" },
  ];

  return (
    <footer className="footer bg-neutral text-neutral-content p-10 my-4">
      <aside>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
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
