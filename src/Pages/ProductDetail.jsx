import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const ProductDetail = () => {
    let items = useSelector(store => store.itemStore.items)
    let [product, setProduct] = useState({})

    let [relatedProduct, setRelated] = useState([])

    let [quantity, setQuantity] = useState(1)

    let { id } = useParams()

    let dispatch = useDispatch()

    let navigate = useNavigate()

    useEffect(() => {
        let item = items.find(i => i.id == id)
        setProduct(item)
        let filteredItems = items.filter(i => (i.category == item.category && i.id != item.id))
        setRelated(filteredItems.slice(0, 4))
    }, [id])

    const add_to_cart = () => {
        let cart_item = {
            cart_id: Date.now() + "_" + Math.round(Math.random() * 1E9),
            ...product,
            quantity
        }

        Swal.fire({
            title: "Confirm",
            text: "This item will be added to your cart",
            icon: "question",
            showCancelButton: true
        })

        .then(result => {
            if (result.isConfirmed) {
                dispatch({ type: "ADD_TO_CART", payload: cart_item })
                toast.success("Your item has been added to cart.<a href='/cart'>Go to Cart</a>")

                Swal.fire({
                    title: "Congrats",
                    text: "Your item has been added to cart.",
                    icon: "success",
                    confirmButtonText: "Continue Shopping",
                    showCancelButton: true,
                    cancelButtonText: "Go to Cart",
                    cancelButtonColor: "#dd1111"
                })
                .then(result => {
                    if (result.isConfirmed) {
                        navigate('/')
                    }
                    else
                        navigate('/cart')
                })
            }
        })
    }

    return (
        <>
            <ToastContainer position='top-right' theme='colored' />
            <div className="container">
                <div className="alert alert-primary">
                </div>
                <h3 className='text-center'>{product.title}</h3>
                <div className="d-flex align-items-center bg-secondary">
                    <div className="w-50 p-3 text-center">
                        {product && product.images &&
                        <img src={product.images[0]} alt={product.title} height={'400px'} width={'100%'} />
                        }
                    </div>

                    <div className="w-50 p-3 text-center">
                        <h4>Description: </h4>
                        <h4>{product.description}</h4>
                        <h4>Price: ${product.price}</h4>
                        <h4>In Stock: {product.stock}</h4>
                        <h4>Quantity: </h4>
                        <input type="number" min={1} max={product.stock} value={quantity} className='form-control w-25' onChange={e => setQuantity(e.target.value)} />
                        <hr />
                    </div>
                </div>
                <button className='btn btn-warning mt-2 w-100' onClick={add_to_cart}>Add to Cart</button>

                <h3 className='mt-3 text-center'>Similar Products:</h3>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-4 pb-4'>
                    {
                        relatedProduct.length > 0 && relatedProduct.map(item => {
                            return <Card item={item} key={item.id} />
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default ProductDetail