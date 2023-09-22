import React from "react";
import bulleyes from "../assets/bullseye.png";
import thumsup from "../assets/thumbsup.png";
import smiling from "../assets/smiling.png";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: smiling, alt: "meh", boxSize: "25px" },
    4: { src: thumsup, alt: "recommended", boxSize: "25px" },
    5: { src: bulleyes, alt: "exceptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
