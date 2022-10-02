import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newCar, clearErros } from '../actions/carActions'
import { NEW_CAR_RESET } from '../constants/carConstants'

const NewCar = ({ history }) => {

    const [name, setName] = useState('');
    const [model, setModel] = useState(0);
    const [make, setMake] = useState('');
    const [category, setCategory] = useState('');
    const [resgistrationNumber, setResgistrationNumber] = useState('');
    const [color, setColor] = useState('');


    const categories = [
        'Car',
        'jeep',
        'SUV',
        'Hatchback',
        'Bus'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newCar);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErros())
        }

        if (success) {
            history.push('/admin/cars');
            alert.success('Car created successfully');
            dispatch({ type: NEW_CAR_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();        
        dispatch(newCar({'name':name,'model':model,'resgistrationNumber':resgistrationNumber,'make':make,'color':color}))
    }

  
    return (
        <Fragment>
            <MetaData title={'New Car'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Car</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="model_field">model</label>
                                    <input
                                        type="number"
                                        id="model_field"
                                        className="form-control"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="Registration_field">Registration #</label>
                                    <input
                                        type="text"
                                        id="Registration_field"
                                        className="form-control"
                                        value={resgistrationNumber}
                                        onChange={(e) =>  setResgistrationNumber(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Make_field">Make</label>
                                    <textarea className="form-control" id="Make_field" rows="8" value={make} onChange={(e) => setMake(e.target.value)}></textarea>
                                </div>
                                
                                  
                                <div className="form-group">
                                    <label htmlFor="color_field">Color</label>
                                    <input
                                        type="text"
                                        id="color_field"
                                        className="form-control"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category_field">Category</label>
                                    <select className="form-control" id="category_field" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        {categories.map(category => (
                                            <option key={category} value={category} >{category}</option>
                                        ))}

                                    </select>
                                </div>
                         
                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                  //  disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default NewCar
