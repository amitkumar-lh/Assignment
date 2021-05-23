import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridSortDirection,
} from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import './data.css'

export default function Table({ data, max }: any) {
  const history = useHistory();

  const getFullName = (params: any) => {
    return(
      <>
      <span className="padding-right">{params.row.firstname || ""} {params.row.lastname || ""}</span>
      <span ><Avatar alt="Remy Sharp" src={params?.row?.avatarUrl} /></span>
      </>
    )
    
  };

  const columns: GridColDef[] = [
    {
      field: "firstname",
      headerName: "Name",
      width: 350,
      renderCell: getFullName,
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "hasPremium", headerName: "Premium", width: 180 },
    {
      field: max ? "maxAmount" : "minAmount",
      headerName: "Max/Min Bid",
      width: 300,
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
