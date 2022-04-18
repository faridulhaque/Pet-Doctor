import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetail} = useParams();
    return (
        <div className='service-detail'>
            <h2 className='text-center'>Service Details NO: {serviceDetail}</h2>
        </div>
    );
};

export default ServiceDetail;