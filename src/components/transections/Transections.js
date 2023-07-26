import { DataGrid } from '@mui/x-data-grid';
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux'
import React, {useMemo} from 'react'
import { CSVLink } from 'react-csv';

const Transections = () => {
  const columns = useMemo(()=> [
    { field: 'description', headerName: 'Description', width: 500 },
    {
      field: 'category',
      headerName: 'Category',
      width: 180,
      renderCell: (params) => {
        const categoryValue = params.value.toLowerCase();
        const textColor = categoryValue==="income"?"#04c470":categoryValue==="expense"?"red":"black"
  
        return (
          <span style={{ color: textColor }}>
            {categoryValue}
          </span>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      sortable: false,
      width: 130,
      valueGetter: (params) =>`${params.row.date.getDate()}/${params.row.date.getMonth()+1}/${params.row.date.getFullYear()}`
    },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 150 },
  ],[]);
  
  const rows = useSelector((state) => state.transection.value);

  const csvData = useMemo(() => {
    const csvColumns = columns.map((column) => ({ key: column.field, label: column.headerName }));
    const csvRows = rows.map((row) => columns.map((column) => row[column.field]));
    return [csvColumns.map((column) => column.label), ...csvRows];
  }, [columns, rows]);
  return (
    <div style={{width: '100%'}}>
      <Typography variant="h5" component="div" sx={{textAlign: "left" }} my={2} color={"#888"}>
          Transactions 
        </Typography>
        <div style={{display:"flex", flexDirection:"row-reverse", padding:10}}>
        <CSVLink data={csvData} filename="data.csv">
        Download CSV
      </CSVLink>
      </div>
      <DataGrid
      sx={{minHeight: "28rem"}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,20]}
      />
    </div>
  );
}

export default Transections
