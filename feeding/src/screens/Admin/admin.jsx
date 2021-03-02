import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import StudentList from './StudentList'


function Administrator() {
    return <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name='posts' List={StudentList} />
    </Admin>
}

export default Administrator