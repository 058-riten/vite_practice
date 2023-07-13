import React, { useReducer } from 'react'

const CheckOut = () => {
    const addressReducer = (state, event) => {

    }

    const [shippingAddress, setShippingAddress] = useReducer(addressReducer,{})

  return (
    <>
        <form action="" className='w-50 mx-auto shadow-lg my-5 p-5'>
            <label htmlFor="name">Name</label>
            <input type="text" className='form-control' id='name' name='name' onChange={setShippingAddress}/>

            <label htmlFor="street">Street</label>
            <input type="text" className='form-control' id='street' name='street' onChange={setShippingAddress}/>

            <label htmlFor="city">City</label>
            <input type="text" className='form-control' id='city' name='city' onChange={setShippingAddress}/>

            <label htmlFor="zipcode">Zipcode</label>
            <input type="text" className='form-control' id='zipcode' name='zipcode' onChange={setShippingAddress}/>

            <label htmlFor="country">Country</label>
            <input type="text" className='form-control' id='country' name='country' onChange={setShippingAddress}/>

            <label htmlFor="phone">Phone</label>
            <input type="text" className='form-control' id='phone' name='phone' onChange={setShippingAddress}/>

            <label htmlFor="email">Email</label>
            <input type="text" className='form-control' id='email' name='email' onChange={setShippingAddress}/>
        </form>

        <button className='btn btn-warning' ></button>
    </>
  )
}

export default CheckOut