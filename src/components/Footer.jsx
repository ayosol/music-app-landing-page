import React from "react";
import CenterMenu from "./CenterMenu";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
} from "@material-ui/icons";

function Footer() {
    const btnSocialIcons = "rounded-full border-2 border-white p-2 mr-[5rem] mb-[2rem]";

  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[30rem] mt-[-20rem] relative z-[-1]">
      <CenterMenu />
      {/* Social Icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={btnSocialIcons}>
          <Facebook />
        </div>
        <div className={btnSocialIcons}>
          <Twitter />
        </div>
        <div className={btnSocialIcons}>
          <LinkedIn />
        </div>
        <div className={btnSocialIcons}>
          <Instagram />
        </div>
        <div className={btnSocialIcons}>
          <YouTube />
        </div>
      </div>

      {/* Details */}
      <div className="details">
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
      </div>
    </div>
  );
}

export default Footer;
