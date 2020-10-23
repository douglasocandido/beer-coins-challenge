import React from 'react';
import {
    Image,
    Button
} from 'react-bootstrap';
import contentImage from '../assets/images/404.svg'

export default function Error() {
  return (
    <div className="justify-content-center" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Não foi possível encontrar essa página.</h1>
      <Image style={{ maxWidth: '350px', marginTop: '100px' }} src={contentImage} />
      <p><Button style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#FF8832', borderColor: '#FF8832', marginTop: '100px', width: '100px' }} variant="warning" href="/">Voltar</Button></p>
    </div>
  )
}