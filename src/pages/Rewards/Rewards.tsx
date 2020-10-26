import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Spinner,
    Button
} from 'react-bootstrap';
import contentImage from '../../assets/images/rewards.svg';
import { Card, Presentation, NavbarComponent } from "../../components";
import { IProduct } from '../../interfaces/Product';

import { TokenService } from '../../services/TokenService';
import AxiosHandler from '../../services/AxiosHandler';
import APIService from '../../services/APIService';

import './style.scss';


const tokenService = new TokenService(window.localStorage);
const apiUrl = process.env.REACT_APP_API_URL || 'https://beertech-banco-produto.herokuapp.com/beercoins';
const axiosHandler = new AxiosHandler(apiUrl, tokenService)
const apiServiceProducts = new APIService(axiosHandler)

export default function Rewards() {

    interface paginationProps {
        page: number,
        pageSize: number
    }

    const paginationInitialState = {
        page: 0,
        pageSize: 3
    }

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [pagination, setPagination] = useState<paginationProps>(paginationInitialState)

    useEffect(() => {
        setLoading(true);
        apiServiceProducts.getProducts(pagination).then((products: IProduct[]) => {
            setProducts(products)
        }).finally(() => setLoading(false))
    }, [pagination])

    const handleProductPagination = () => {
        let tempPagination = {
            ...pagination,
            pageSize: (pagination.pageSize + 3)
        }
        apiServiceProducts.getProducts((tempPagination)).then((products: IProduct[]) => {
            setProducts(products)
        }).finally(() => setLoading(false))
        setPagination(tempPagination)
    }

    return (
        <>
            <NavbarComponent />
            <Presentation isRewardsScreen={true} title="Beerwards" image={contentImage} />
            <Row className='client-container justify-content-center'>
                {loading ? <Spinner className="spinner-tables" animation='border' variant="secondary" size="sm" />
                    :
                    products.map((product: IProduct) => {
                        return (
                            <Col key={product.id} lg={4} xs={12} md={6} className='card-column'>
                                <Card title={product.name}
                                    productId={product.id}
                                    price={product.price}
                                    description={product.description}
                                    imageUrl={product.imageName}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className='justify-content-center'>
                {pagination.pageSize <= 6 &&
                    <Button className='regular-outline-button show-more-button' variant="outline-warning" onClick={handleProductPagination}>Ver mais</Button>
                }
            </Row>

        </>
    )
}