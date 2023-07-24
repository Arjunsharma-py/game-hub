import bullsEye from "../assets/bulls-eye.png";
import thumbsup from "../assets/thumbs-up.svg";
import meh from "../assets/meh.ico";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsup, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={2} />;
};

export default Emoji;
