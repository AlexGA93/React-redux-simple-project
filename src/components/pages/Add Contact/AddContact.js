import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    // create initial state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");


    // access to redux state
    const contacts = useSelector((state) => state);
    // dispatch action method
    const dispatch = useDispatch(); // It'll be called when state is updated
    /*
    The useHistory hook helps us to access the history object, 
    which is used to navigate programmatically to other routes 
    using push and replace methods.
    */
    const history = useHistory();

    console.log(contacts);
    // console.log(contacts[contacts.length - 1]);

    // implementing validations
    const handleSubmit = (e) => {
        e.preventDefault();


        // check if there's any field without information
        if (!name || !email || !age) {
            return toast.warning("Please fill all the fields!")
        }

        // contact registered?
        const checkContactEmailExists = contacts.filter((contact) =>
            contact.email === email ? contact : null
        );

        // const checkEmail = contacts.find(contact => contact.email === email && email);
        if (checkContactEmailExists.length > 0) {
            return toast.error("This email already exists!!");
        }
        const checkContactAgeExists = contacts.filter((contact) =>
            contact.age === age ? contact : null
        );
        if (checkContactAgeExists.length > 0) {
            return toast.error("This phone number already exists!!");
        }

        // extract form data to dispatch it as a new contact
        const data = {
            id: contacts[contacts.length - 1].id,
            name,
            email,
            age
        }

        // when form data are extracted, we're going to dispatch it in a new action
        dispatch({
            type: "ADD_CONTACT", // must be the same type as that we want to access in our reducer
            payload: data // we add the new data through a payload.
        });

        // notify with toast
        toast.success("Student Added Successfully!");

        // when action is dispatched and toast shows itself, we want to redirect to home
        history.push("/");
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">Add Student</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type='text' placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type='email' placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type='number' placeholder="Age" className="form-control" value={age} onChange={e => setAge(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type='submit' value="Add Student" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
