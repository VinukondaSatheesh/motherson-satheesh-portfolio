import "./index.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const AddressPage = () => (
  <div id="address" className="addressPageContainer">
    <div>
      <Link to="https://www.linkedin.com/in/satheeshvinukonda/" target="blank">
        <FaLinkedin className="logo-image-details" />
      </Link>
      <Link to="/">
        {" "}
        <FaInstagramSquare className="logo-image-details1" />
      </Link>
      <Link to="/">
        {" "}
        <IoMdMail className="logo-image-details1" />
      </Link>
    </div>

    <p>Copyright © 2024. All rights reserved</p>
  </div>
);

export default AddressPage;
