import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetail} = useParams();
    return (
        <div className='service-detail'>
            <h2>Service Details is {serviceDetail}</h2>
        </div>
    );
};

export default ServiceDetail;