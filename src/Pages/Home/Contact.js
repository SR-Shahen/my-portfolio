import React from 'react';
import contact from '../../Assets/images/contact.png'

const Contact = () => {
    return (
        <div id='contact' class="hero bg-black">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <img className='lg:ml-32 h-3/5 lg:w-4/5' src={contact} alt="" />
                </div>
                <div class="lg:mr-32 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 class="text-3xl text-center font-bold">Contact ME!</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text lg:text-lg">Enter Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered my-3" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text lg:text-lg">Enter Your Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered py-3" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text lg:text-lg">Enter Your Message</span>
                            </label>
                            <textarea class="textarea textarea-bordered my-3" placeholder="Message"></textarea>
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;