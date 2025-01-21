import * as React from "react";
import { useEffect } from "react";
import BlossomValley_Cap from "./assets/Blossom Valley_Cap.jpeg";
import BlossomValley_ID from "./assets/Blossom Valley_ID card.jpeg";
import BlossomValley_Flage from "./assets/Blossom Valley_Flag.jpeg";
import BlossomValley_reverse from "./assets/Blossom Valley_reverse.jpg";
import BlossomValley_ink from "./assets/Blossom Valley_ink.jpg";
import BlossomValley_Tshirt1 from "./assets/Blossom Valley_T-shirt1.jpeg";
import BlossomValley_Tshirt2 from "./assets/Blossom Valley_T-shirt2.jpeg";
import BlossomValley_Mug from "./assets/Blossom Valley_Mug.jpeg";
import BlossomValley_Mediakit from "./assets/Blossom Valley_Media kit.jpeg";
function ImageComponent() {
  let imagePaths = [
    BlossomValley_ink,
    BlossomValley_Cap,
    BlossomValley_ID,
    BlossomValley_Flage,
    BlossomValley_reverse,
    BlossomValley_Tshirt1,
    BlossomValley_Tshirt2,
    BlossomValley_Mug,
    BlossomValley_Mediakit,
  ];
  const [imgPathIndex, SetIndex] = React.useState(0);
  useEffect(() => {
    setInterval(() => {
      SetIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 1000);
  });

  return (
    <div className="">
      <img src={imagePaths[imgPathIndex]} alt="" height="500px" />
    </div>
  );
}
export default ImageComponent;
