import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef, GridRowParams, GridValueGetterParams } from '@mui/x-data-grid';
import { IUniversity } from 'models/IUniversity';
import ReactCountryFlag from "react-country-flag";

const columns: GridColDef<IUniversity>[] = [
    {
        field: 'alpha_two_code',
        headerName: 'Flag',
        width: 50,
        sortable: false,
        align: "center",
        filterable: false,
        renderCell: (params) => <ReactCountryFlag countryCode={params.row.alpha_two_code} svg />
    },
    { field: 'country', headerName: 'Country', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'state-province', headerName: 'State Province', width: 200 },
    {
        field: 'domains',
        headerName: 'Domain',
        width: 200,
        sortable: false,
        valueGetter: (params: GridValueGetterParams<IUniversity>) =>
            `${params.row.domains[0]}`,
    },
    {
        field: 'web_pages',
        headerName: 'Web Page',
        width: 200,
        sortable: false,
        valueGetter: (params: GridValueGetterParams<IUniversity>) =>
            `${params.row.web_pages[0]}`,
    },
];

type Props = {
    items: IUniversity[];
    isLoading: boolean;
    name: string;
    onNameChange: (name: string) => void;
    onRowDoubleClick?: (gridRow: GridRowParams<IUniversity>) => void;
}

export const UniversityTable = (props: Props) => {
    const { items, onRowDoubleClick, isLoading, name, onNameChange } = props
    return (
        <>
            <Box
                component="form"
                autoComplete="off"
                display="flex"
                justifyContent="center"
                marginBottom="30px"
                width="100%"
            >
                <TextField fullWidth label="Search" variant="outlined" value={name} onChange={({ target }) => onNameChange(target.value)} />
            </Box>
            <DataGrid
                loading={isLoading}
                rows={items}
                autoHeight
                columns={columns}
                onRowDoubleClick={onRowDoubleClick}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 15, 30]}
                disableRowSelectionOnClick
            />
        </>
    )
}
