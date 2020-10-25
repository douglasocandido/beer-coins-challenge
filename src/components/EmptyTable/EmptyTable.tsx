import React from "react";
import { Image } from 'react-bootstrap';
import emptyImage from '../../assets/images/empty.svg';

import './style.scss';

const EmptyTable = () => {
    return (
        <div className='justify-content-center empty-table-container'>
            <Image className='empty-image' src={emptyImage} />
            <span className='empty-table-text'>AINDA NÃO HÁ LANÇAMENTOS NA SUA CONTA</span>
        </div>
    )
};

export default EmptyTable; 