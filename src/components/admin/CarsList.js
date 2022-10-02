import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCar, clearErros } from '../actions/carActions'
import { DELETE_CAR_RESET } from '../constants/carConstants'
import { getCars } from '../actions/carActions'

const CarsList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, cars } = useSelector(state => state.cars);
    const {  isDeleted } = useSelector(state => state.car)
    console.log(isDeleted,'delete car')

    useEffect(() => {
        dispatch(getCars());

        if (error) {
            alert.error(error);
            dispatch(clearErros())
        }



        if (isDeleted) {
            alert.success('Car deleted successfully');
            history.push('/admin/cars');
            dispatch({ type: DELETE_CAR_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

    const deleteCarHandler = (id) => {
        dispatch(deleteCar(id))
        console.log('delete clicked');
    }


    const setCar = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Make',
                    field: 'make',
                    sort: 'asc'
                },
                {
                    label: 'Color',
                    field: 'color',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        cars.forEach(car => {
            data.rows.push({
                id: car._id,
                name: car.name,
                make: car.make,
                color:car.color,
                actions: <Fragment>
                    <Link to={`/admin/car/${car._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteCarHandler(car._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    

    return (
        <Fragment>
            <MetaData title={'All Vehicles'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Vehicles</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setCar()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default CarsList
