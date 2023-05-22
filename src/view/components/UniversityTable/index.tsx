import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { IUniversity } from 'models/IUniversity';

const columns: GridColDef<IUniversity>[] = [
    { field: 'country', headerName: 'Country', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'alpha_two_code', headerName: 'Code', width: 200 },
    { field: 'state-province', headerName: 'State Province', width: 200 },
];

type Props = {
    items: IUniversity[],
    onRowDoubleClick: (gridRow: GridRowParams<IUniversity>) => void
}

export const UniversityTable = ({ items, onRowDoubleClick }: Props) => {
    return (
        <DataGrid
            rows={items}
            columns={columns}
            onRowDoubleClick={onRowDoubleClick}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[10, 15, 30]}
        />
    )
}
