import React,{Fragment, useEffect}from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getCars } from './actions/carActions'

function Home({history}) {

  const dispatch = useDispatch()

const {user,isAuthenticated}=useSelector(state => state.auth) 
const {carsCount}= useSelector(state => state.cars)

useEffect(() => {
  dispatch(getCars())
},[dispatch])

console.log('authentic user',carsCount)
  return (
    <Fragment>
      <MetaData title={'Cars-Hub'}/>
         { isAuthenticated ? (
          <>
          <h4 style={{marginTop: '40px'}}>{`welcome ${user.role} `}</h4>
  
          </>
          
         ):(
          <>
          <h2 style={{marginTop: '70px'}}>Total Registered Car :{carsCount}</h2>

          </>
                     
         ) }
         
            <section id="products" className="containerim mt-5">
              <img src="/images/sonata_car.jpg"  height={'100%'} width={'100%'}/>
            </section>
    </Fragment>
  )
}

export default Home