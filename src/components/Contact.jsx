import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>Contact us</h1>

            </div>
            <div className='container contact-div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                         <div className='col-12'>
                             <button className='btn btn-outline-primary' type='submit'>
                                 Submit form
                             </button>
                         </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact