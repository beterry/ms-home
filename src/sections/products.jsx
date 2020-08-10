import React from 'react'
import styled from 'styled-components'

//import components
import Margins from '../layout/margins'
import Heading from '../components/section-heading'

//brand colors
import colors from '../styles/colors'

//import images
import opc from '../images/products/opc.jpg'

//product store
const products = [
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Magnet Postcards',
        productsAvailable: 2,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: opc
    },
]

function Product({name, productsAvailable, link, image}) {
    return (
        <ProductWrapper>
            <ImageWrapper>
                <img src={image} alt=''/>
            </ImageWrapper>
            <h3>{name}</h3>
            <p>{`${productsAvailable} Products Available`}</p>
        </ProductWrapper>
    )
}

export default function Products() {
    return (
        <section>
            <Margins>
                <Heading title='Stand Out in the Mailbox' subtitle='Our products' padding />
            </Margins>
            <SliderWrapper>
                <Slider>
                    {products.map((product, index) => 
                        <Product
                            name={product.name}
                            productsAvailable={product.productsAvailable}
                            link=''
                            image={product.image}
                            key={index}
                        />
                    )}
                </Slider>
            </SliderWrapper>
        </section>
    )
}

const SliderWrapper = styled.div`
    overflow-x: scroll;
    border-radius: .25rem;
`

const Slider = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;
    padding: 0 5%;
`

const ProductWrapper = styled.div`
    width: 15rem;
    text-align: center;
    p{
        color: ${colors.c[600]};
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 1rem;
    img{
        border-radius: .25rem;
        width: 100%;
    }
`