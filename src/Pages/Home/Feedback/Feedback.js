import React from 'react';
import bgImage from '../../../Assets/image-3.png'

const Feedback = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImage})` }} className='text-center mb-10 text-white py-14'>
                <div>
                    <p className=' text-3xl font-semibold my-2'>Give Feedback</p>
                    <p className='text-3xl'>& Stay connected with us</p>
                </div>
                <div className='lg:w-1/3 w-2/3 mt-5 mx-auto text-black'>
                    <form>
                        <input name='userName' type="text" placeholder="Your Name" className="input input-bordered w-full my-3" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <textarea name='message' className="textarea textarea-bordered w-full my-3 text-black" placeholder="Your Message"></textarea>
                        <button className='btn btn-primary' type="submit">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;