import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridSortDirection,
} from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";

export default function Table({ data, max }: any) {
  const history = useHistory();

  const getFullName = (params: GridValueGetterParams) => {
    return `${params.row.firstname || ""} ${params.row.lastname || ""}`;
  };

  const columns: GridColDef[] = [
    {
      field: "firstname",
      headerName: "Name",
      width: 130,
      valueGetter: getFullName,
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "hasPremium", headerName: "Premium", width: 130 },
    {
      field: max ? "maxAmount" : "minAmount",
      headerName: "Max/Min Bid",
      width: 160,
    },
  ];

  const sortModel = [
    {
      field: max ? "maxAmount" : "minAmount",
      sort: "asc" as GridSortDirection,
    },
  ];

  const cellClick = (params: any) => {
    history.push({
      pathname: `${params?.value}`,
      state: { detail: params.row.bids },
    });
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        loading={!data.length ? true : false}
        sortModel={sortModel}
        onCellClick={cellClick}
      />
    </div>
  );
}
