import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



import { useTable, useFilters, usePagination, useGlobalFilter, useAsyncDebounce } from "react-table";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
      align: "center"

    },
  },
}));


function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)
  const classes = useStyles();
  return (
    <span className={classes.root} 
    noValidate 
    autoComplete="off">
      {/* Search Anything:{' '} */}
      <TextField
        id="filled-basic" 
        label="Search Anything" 
        variant="filled"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          width:'30em',
          fontSize: '1.1rem',
          border: '0',
          fontFamily: 'Century',
          background: '#cbcbcb'
        }}
      />
    </span>
  )
}

const Table = ({columns, data}) => {

    

    const {
  
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      // setFilter,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state,
      state: { pageIndex, pageSize },
      preGlobalFilteredRows,
      setGlobalFilter
    } = useTable({ columns, data, initialState: { pageIndex: 0 } },useFilters,useGlobalFilter,usePagination,);

    // const [filterInput, setFilterInput] = useState("");



    // const handleFilterChange = (e) => {
    //     const value = e.target.value || undefined;
    //     setFilter("PRN", value);
    //     setFilterInput(value)
    // }
return(
        
    <>
      <div style={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
        <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
      </div>

        {/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
        /> */}
    <BTable striped bordered hover size="sm" {...getTableProps()}>
    <div className="pagination" style={{background: '#cbcbcb'}}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
    </div>
    <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th key={column.index} {...column.getHeaderProps}>{column.render('Header')}</th>
                ))}
                </tr> 
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
        page.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
            // Apply the row props
            <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                // Apply the cell props
                return (
                    <td key={cell.index} {...cell.getCellProps()}>
                    {// Render the cell contents
                    cell.render('Cell')}
                    </td>
                )
                })}
            </tr>
            )
        })}
        </tbody>
    </table>

    
    </BTable>
    </>
)
}

export default Table;