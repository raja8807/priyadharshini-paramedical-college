import CustomContainer from "@/components/ui/custom-container/custom_container";
import styles from "./header.module.scss";
import { HouseFill, List } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavItemButton = (props) => {
  const { isActive, name, onClick = () => {} } = props;

  return (
    <div
      className={`${styles.nav_item} ${isActive && styles.active}`}
      onClick={onClick}
    >
      <HouseFill />
      <p>{name}</p>
    </div>
  );
};

const Header = () => {
  const nav_items = [
    {
      // id:'home',
      name: "Home",
      href: "/",
    },
    {
      // id:'home',
      name: "Courses",
      href: "/courses",
    },

    {
      // id:'home',
      name: "Addmission",
      href: "/addmission",
    },
    {
      // id:'home',
      name: "Contact",
      href: "/contact",
    },
    {
      // id:'home',
      name: "Login",
      href: "/auth/login",
    },
  ];

  const router = useRouter();
  const [expanded, setExpanded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled && styles.scrolled}`}>
      <div className={styles.header_top}>
        <CustomContainer>
          <h1>Priyadarhini Paramedical College</h1>
          <h1>Directorate Of Medical Education and Research</h1>
        </CustomContainer>
      </div>

      <div className={styles.header_bottom}>
        <CustomContainer className={styles.wrapper}>
          <nav className={expanded ? styles.expanded : styles.nav}>
            {nav_items.map((item) => {
              return (
                <NavItemButton
                  key={item.id}
                  name={item.name}
                  isActive={router.pathname === item.href}
                  onClick={() => {
                    if (router.pathname !== item.href) {
                      router.push(item.href);
                      setExpanded(!expanded);
                    }
                  }}
                />
              );
            })}
          </nav>
          <List
            onClick={() => {
              setExpanded((prev) => !prev);
            }}
          />
        </CustomContainer>
      </div>
    </header>
  );
};

export default Header;
