import Image from "next/image";
import React from "react";

function BuyMeACoffeeButton() {
  return (
    <a  href="https://www.buymeacoffee.com/youchen" target="_blank">
      <Image
        width={200}
        height={50}
        src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
        alt="Buy Me A Coffee"
        style={{ height: "50px", width: "200px" }}
      />
    </a>
  );
}

export default BuyMeACoffeeButton;
