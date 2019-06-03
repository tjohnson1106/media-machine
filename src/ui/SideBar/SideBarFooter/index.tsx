import React from "react";
import "./SideBarFooter.scss";

export function SideBarFooter() {
  return (
    <>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Creator's Advertise</div>
        <div>Developers +Site</div>
        <div>Lega</div>
      </div>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new Features</div>
      </div>

      <div className="footer-block">
        <div>All prices include VAT</div>
        <div className="footer-block">
          <div>For fair use educational purposes under fair use.</div>
        </div>
      </div>
    </>
  );
}
