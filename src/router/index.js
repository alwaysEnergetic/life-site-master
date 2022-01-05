import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRouter from './Route';
import HomePage from '../layouts/Home';

const routes =[
    {
        path: '/',
        exact: true,
        component: HomePage
    },
]

export default function Routes(){
    return (
        <Switch>
            {routes.map(route=> (
                <CustomRouter {...route} key={route.path}/>
            ))}           
        </Switch>
    )
};