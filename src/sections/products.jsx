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

                    {products.map((product, index) => 
                        <Product
                            name={product.name}
                            productsAvailable={product.productsAvailable}
                            link=''
                            image={product.image}
                            key={index}
                        />
                    )}

            </SliderWrapper>
        </section>
    )
}

const SliderWrapper = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: calc(5% - 2rem) repeat(8, 20%) calc(5% - 2rem);
    overflow-x: auto;
    padding-bottom: 2rem; 
    &::before, &::after{
        content: '';
    }
`

const ProductWrapper = styled.div`
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