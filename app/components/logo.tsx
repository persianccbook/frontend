"use client";
import useThemeStore from "../../store/themeStore";
import darkLogo from "../../public/logo-dark.svg";
import lightLogo from "../../public/logo-light.svg";
import Image from "next/image";

const Logo = () => {
  const { mode } = useThemeStore();

  if (mode === "dark")
  return <Image src={darkLogo} alt="logo" width={50}/>;
  else
  return <Image src={lightLogo} alt="logo" width={50}/>;

};

export default Logo;
