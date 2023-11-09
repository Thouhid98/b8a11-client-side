import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";



const Featuredblogs = () => {
    const fblogs = useLoaderData()
    console.log(fblogs);

    const columns = [

        {
            name: 'Serial Number',
            cell: (row, index) => (
              index + 1
            ),
        },

        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Profile Picture',
            cell: (row) => <img src={row.ownerpic} alt={row.name} width="50" height="50" />,
          },
    ];


    return (
        <div>

            <div>
                <DataTable
                    title="Featured Table"
                    columns={columns}
                    data={fblogs}
                    className="m-8 p-4"
                />
            </div>


        </div>
    );
};

export default Featuredblogs;