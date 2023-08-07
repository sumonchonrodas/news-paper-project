import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus voluptatibus libero, quibusdam voluptates ipsum officia sequi dolore optio debitis praesentium sapiente rerum ipsa porro nesciunt aspernatur, dolores fuga soluta!</p>
            <p>Go back to <Link to='/register'>register</Link></p>
        </div>
    );
};

export default Terms;