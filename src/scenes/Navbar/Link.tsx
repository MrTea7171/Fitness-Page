import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

enum SelectedPage{
  Home="home",
  Benefits="benefits",
  OurClasses="ourclasses",
  ContactUs="contactus"
}

type Props = {
  page: string;
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage)=>void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transistion duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={()=>setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
