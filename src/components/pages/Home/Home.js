import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

    // we want to extract our data from our state to read contacts in the UI
    const contact = useSelector(state => state);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <h1>Welcome to React Redux Contact Book</h1>
                    {/* Render a dynamic table to show every contact saved in our state */}
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contact.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.age}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary">Edit</Link>
                                            <button type="button" className="btn btn-small btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
