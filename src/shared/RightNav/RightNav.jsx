import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from "../Qzone/Qzone";
import bg from '../../assets/bg.png';

const RightNav = () => {
  return (
    <>
      <h3 className="mb-3">Log in with</h3>
      <Button variant="outline-primary" className="mb-2"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-secondary" className="mb-4"> <FaGithub></FaGithub> Login with Github</Button>

        <div>
        <h3 className="mb-4">Find Us on</h3>
        <ListGroup>
            <ListGroup.Item> <FaFacebook className="text-info me-2 fs-2"></FaFacebook> Facebook</ListGroup.Item>
            <ListGroup.Item> <FaTwitter className="text-primary me-2 fs-2"></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item> <FaInstagram className="text-danger me-2 fs-2"></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
        </div>
         <Qzone></Qzone>
         <div className="position-relative text-center my-4">
              <img src={bg} alt="" className=" h-100 w-100"/>
              <div className="  position-absolute top-50 start-50  end-0 translate-middle w-full translate-middle text-light">
                <h3>Create an Amazing Newspaper</h3>
                <p><small >Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small>
                </p> <br />
                <button className="p-2 bg-danger text-light">Lear More</button>
              </div>
         </div>
    </>
  );
};

export default RightNav;
