import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-lg-3">
      <h2 className="services-h2 mt-5">My Services</h2>
      <div className="services">
        {services.map((service) => (
          <div className="service-card mt-3" key={service.id}>
            <img className="service-img" src={service.img} alt="dogs" />
            <h4 className='mt-2 ms-2'>{service.service}</h4>
            <p className='service-p mt-2 ms-2'>{service.comment}</p>
            <Link to='/' className='btn btn-primary mt-2 ms-2 service-button'>Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
