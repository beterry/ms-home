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
                    <div />
                    {products.map((product, index) => 
                        <Product
                            name={product.name}
                            productsAvailable={product.productsAvailable}
                            link=''
                            image={product.image}
                            key={index}
                        />
                    )}
                    <div />
            </SliderWrapper>
        </section>
    )
}

const SliderWrapper = styled.div`
    display: grid;
    gap: 2.5%;
    grid-template-columns: 2.5% repeat(8, 20%) 2.5%;
    overflow-x: auto;
    padding-bottom: 2rem; 
    @media screen and (max-width: 67.5rem){
        grid-template-columns: 2.5% repeat(8, 25%) 2.5%;
    }
    @media screen and (max-width: 53rem){
        grid-template-columns: 2.5% repeat(8, 35%) 2.5%;
    }
    @media screen and (max-width: 40rem){
        grid-template-columns: 2.5% repeat(8, 50%) 2.5%;
    }
    @media screen and (min-width: 112.5rem){
        grid-template-columns: calc((100% - 100rem) * .4) repeat(8, 15%) calc((100% - 100rem) * .4);
        gap: calc((100% - 100rem) * .1);
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