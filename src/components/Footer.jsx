import React from "react";
import { useMediaQuery } from "react-responsive";

import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <footer>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </footer>
  );
}

export default Footer;
