import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'

const Home = () => {
  let items = useSelector(store => store.itemStore.items)

  let [search,setSearch] = useState('')

  let [filteredProduct, setFilteredProduct] = useState([])

  const dispatch = useDispatch()

  const loadData = () => {
    if (items.length == 0) {
      return fetch(`https://dummyjson.com/products`)
        .then(response => response.json())
        .then(data => dispatch({ type: "LOAD_DATA", payload: data.products }))
        .catch(error => console.log(error))
    }
    filterProduct()
  }

  useEffect(loadData, [search])

  const filterProduct = () => {
    if(search==''){
      setFilteredProduct(items)
    }
    else{
      setFilteredProduct(
        items.filter(item=>item.title.toLowerCase().match(search.toLowerCase()))
      )
    }
  }

  return (
    <>
      <div className='bg-secondary py-2'>
        <input type="search" className='form-control w-50 mx-auto' onKeyUp={e=>setSearch(e.target.value)}/>
      </div>
      <div className='container my-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4'>
          {
            filteredProduct.length > 0 && filteredProduct.map(item => {
              return <Card item={item} key={item.id}/>
            })
          }
        </div>
      </div>

    </>
  )
}

export default Home