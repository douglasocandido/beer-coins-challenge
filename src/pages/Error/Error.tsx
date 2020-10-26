import React from 'react';
import {
    Image,
    Button
} from 'react-bootstrap';
import contentImage from '../../assets/images/404.svg'
import './style.scss'

export default function Error() {
  return (
    <div className="justify-content-center error-container">
      <h1>Não foi possível encontrar essa página.</h1>
      <Image className='error-image' src={contentImage} />
      <p><Button className='regular-button error-container' variant="warning" href="/">Voltar</Button></p>
    </div>
  )
}