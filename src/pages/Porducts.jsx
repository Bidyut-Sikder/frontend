import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import { deleteProductByID, getAllProductList, getProductListByBrand, getProductListByCategory, getProductListBySearch } from '../apiRequest/ApiRequest';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { setTotal } from '../redux/state-slice/product-slice';





const Products = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState(0)
    const [refresh, setRefresh] = useState(1)



    let allProduct = useSelector(state => state.product['allProduct'])
    let total = useSelector(state => state.product['total'])

 

    useEffect(() => {
        (async () => {
            await getAllProductList()

        })()
    }, [refresh])

    //option data
    const ProductByCategory = (e) => {

        getProductListByCategory(e.target.value)
    }


    const ProductByBrand = (e) => {

        getProductListByBrand(e.target.value)
    }

    //input onchange
    const searchOnChange = (e) => {
        setSearchValue(e.target.value)

        if ((e.target.value).length === 0) {
            getAllProductList()
        }
    }

    //search Button
    const searchData = () => {
        getProductListBySearch(searchValue)


    }



    const handleDelete = (id) => {
        const res = deleteProductByID(id)
        if (res) {

            toast.success('delete successfully.')
           // dispatch(setTotal(parseInt(total) - 1))
           setRefresh(refresh+1)
        } else {
            toast.success('somthing went wrong.')

        }
    }



    return (
        <Fragment>
            <Toaster />
            <div className="container my-5">




                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-2">
                                            <h5>Product List</h5>
                                        </div>
                                        <div className="col-2">
                                            <Link to="/create" className='btn btn-outline-primary'>Add </Link>
                                        </div>
                                        <div className="col-2">
                                            <select onChange={ProductByCategory} className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                                <option value="0">Sort by Category</option>
                                                <option value="shirt">Shirt</option>
                                                <option value="pants">Pants</option>
                                                <option value="shoe">Shoe</option>
                                                <option value="phone"> Phone</option>
                                                <option value="scarf">Scarf</option>
                                                <option value="walet">Walet</option>
                                            </select>
                                        </div>

                                        <div className="col-2">
                                            <select onChange={ProductByBrand} className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                                <option value="0">Sort by Brand</option>
                                                <option value="apple">Apple</option>
                                                <option value="gucci">Gucci</option>
                                                <option value="rebook">Rebook</option>
                                                <option value="woodland">Woodland</option>
                                                <option value="delux">Delux</option>
                                                <option value="intex">Intel</option>

                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <form onSubmit={(e) => { e.preventDefault(); getProductListBySearch(searchValue) }}>
                                                <div className="input-group mb-3">

                                                    <input onChange={searchOnChange} type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <button onClick={searchData} className="btn  btn-outline-primary btn-sm mb-0" type="button">Search</button>


                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive data-table">
                                                <table className="table ">
                                                    <thead className="sticky-tops bg-white">
                                                        <tr>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Stock</th>
                                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Edit/Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            allProduct.map((item, i) =>
                                                                <tr key={i}>

                                                                    <td>
                                                                        <div className="d-flex px-2 py-2">
                                                                            <div>
                                                                                <img style={{ width: '50px', height: '50px' }} src={item.image} className="avatar me-3" />
                                                                            </div>
                                                                            <div className="d-flex flex-column justify-content-center">
                                                                                <h6 className="mb-0  text-xs">{item.name}</h6>
                                                                                <p className="text-xs  text-secondary mb-0">{item.category}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                                                        <p className="text-xs  text-secondary mb-0">{item.price} Taka </p>
                                                                    </td >
                                                                    <td>
                                                                        <button type="button" className="btn btn-primary">
                                                                            <p className="badge badge-light">{item.stock}</p>
                                                                        </button>
                                                                    </td>
                                                                    <td>
                                                                        <Link to={`/edit/${item._id}`} className='btn btn-primary'>Edit</Link>
                                                                        <button to={`/edit/${item._id}`} onClick={() => handleDelete(item._id)} className='mx-1 btn btn-primary'>Del</button>
                                                                        {/* <span className="text-secondary text-xs font-weight-bold">{item.product_code}</span> */}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <nav aria-label="Page navigation example">
                                                {/* <ReactPaginate
                                                    previousLabel="<"
                                                    nextLabel=">"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount={total / perPageValue}
                                                    marginPagesDisplayed={5}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageClick}
                                                    containerClassName="pagination justify-content-center"
                                                    activeClassName="active"
                                                /> */}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ Fragment>
    );
};

export default Products;
