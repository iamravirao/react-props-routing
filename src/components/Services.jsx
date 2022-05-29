import React from 'react';
import { NavLink } from 'react-router-dom';
import cardData from '../data';

const Services = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>

                            {
                                cardData.map((data, id) => {
                                    return (
                                        <div className='col-md-4 col-10 mx-auto' key={id}>
                                            <div className="card">
                                                <img src={data.imgSrc} className="card-img-top" alt={data.title} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{data.title}</h5>
                                                    <p className="card-text"> {data.desc} </p>
                                                    <NavLink to="" className="btn btn-primary">connect with us</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services