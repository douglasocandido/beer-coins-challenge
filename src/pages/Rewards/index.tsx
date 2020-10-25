import React, { useState, useEffect } from 'react';
import Presentation from '../../components/Presentation';
import NavbarComponent from '../../components/NavbarComponent';
import {
    Row,
    Col,
    Spinner
} from 'react-bootstrap';
import contentImage from '../../assets/images/rewards.svg';
import Card from "../../components/Card/Card";
import { IProduct } from '../../interfaces/Product';

import { TokenService } from '../../services/TokenService';
import AxiosHandler from '../../services/AxiosHandler';
import APIService from '../../services/APIService';

import './style.scss';

const imageUrl = 'https://emporiodacerveja.vtexassets.com/arquivos/ids/178169-800-auto?width=800&height=auto&aspect=true'

const tokenService = new TokenService(window.localStorage);
const apiUrl = process.env.REACT_APP_API_URL || 'https://beertech-banco-produto.herokuapp.com/beercoins';
const axiosHandler = new AxiosHandler(apiUrl, tokenService)
const apiServiceProducts = new APIService(axiosHandler)

export default function Rewards() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        setLoading(true);
        apiServiceProducts.getProducts().then((products: IProduct[]) => {
            setProducts(products)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <>
            <NavbarComponent />
            <Presentation isRewardsScreen={true} title="Beerwards" image={contentImage} />
            <Row className='client-container'>
            { loading ? <Spinner className="spinner-tables" animation='border' variant="secondary" size="sm" /> :
                products.map((product: IProduct) => (
                    <Col>
                        <Card title={product.name} price={product.price} description={product.description} imageUrl={product.imageName} />
                    </Col>
                ))
            }
            </Row>
        </>
    )
}