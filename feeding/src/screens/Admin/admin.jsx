import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import StudentList from './StudentList'


function Admin() {
    return <Admin dataProvider={restProvider(`${process.env.REACT_APP_API_URL}`)}>
        <Resource name='students' List={StudentList} />
    </Admin>
}

export default Admin