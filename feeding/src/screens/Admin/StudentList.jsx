import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const StudentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='firstname' />
                <TextField source='lastname' />
                <TextField source='username' />
                <TextField source='password' />
                <TextField source='password2' />
                <TextField source='age' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />


            </Datagrid>
        </List>
    )
}

export default StudentList
