import {Switch, Route} from 'react-router-dom';


import Home from '../pages/Home/Home';
import AddContact from '../pages/Add Contact/AddContact';
import EditContact from '../pages/Edit Contact/EditContact';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/add" exact >
                <AddContact />
            </Route>
            <Route path="/edit/:id" exact >
                <EditContact />
            </Route>
            <Route path="/delete" exact >
                <h2>Delete Component</h2>
            </Route>
        </Switch>
    );
}