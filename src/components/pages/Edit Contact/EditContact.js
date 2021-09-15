import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';

function EditContact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");


    // extract id from url params
    const { id } = useParams();
    // extract contacts from state
    const contacts = useSelector(state => state);

    // if we want to extract a specific contact by it's id
    // we choose the state contact which it's id is the same that id's in url params
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    // dispatch action method
    const dispatch = useDispatch(); // It'll be called when state is updated
    /*
    The useHistory hook helps us to access the history object, 
    which is used to navigate programmatically to other routes 
    using push and replace methods.
    */
    const history = useHistory();

    // if when page charge there'is a current contact, we will update the component state with this
    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setAge(currentContact.age);
        }
    }, [currentContact])

    // handleSubmit method
    // implementing validations
    const handleSubmit = (e) => {
        e.preventDefault();

        // check email
        const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);

        const checkName = contacts.find((contact) => contact.id !== parseInt(id) && contact.name !== name);


        // check if there's any field without information
        if (!name || !email || !age) {
            return toast.warning("Please fill all the fields!")
        }

        if (checkEmail) {
            return toast.error("This Email already exists");
        }

        if (checkName) {
            return toast.error("This User already exists")
        }

        // extract form data to dispatch it as a new contact
        const data = {
            id: parseInt(id),
            name,
            email,
            age
        }

        // when form data are extracted, we're going to dispatch it in a new action
        dispatch({
            type: "UPDATE_CONTACT", // must be the same type as that we want to access in our reducer
            payload: data // we add the new data through a payload.
        });

        // notify with toast
        toast.success("Student Added Successfully!");

        // when action is dispatched and toast shows itself, we want to redirect to home
        history.push("/");
    }

    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <h1 className="display-3 text-center">Edit Student {id}</h1>
                        <div className="row">
                            <div className="col-md-6 shadow mx-auto p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type='text' placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type='email' placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type='number' placeholder="Phone Number" className="form-control" value={age} onChange={e => setAge(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type='submit' value="Update Student" className="btn btn-dark" />
                                        <Link to='/' value="Add Student" className="btn btn-danger ml-3" >Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className="display-3 my-5 text-center">
                        Student contact with id {id} not exists
                    </h1>
                )
            }
        </div>
    )
}

export default EditContact;
