import React from 'react'
import styled from 'styled-components'

//import components
import Margins from '../layout/margins'
import Heading from '../components/section-heading'

//brand colors
import colors from '../styles/colors'

//import images
import postcard from '../images/products/product-postcards.jpg'
import magnet from '../images/products/product-postcard-magnets.jpg'
import plastic from '../images/products/product-plastic-postcards.jpg'
import scratch from '../images/products/product-scratch-off-postcards.jpg'
import menu from '../images/products/product-menus.jpg'
import letter from '../images/products/product-direct-mail-letters.jpg'
import brochure from '../images/products/product-brochures.jpg'
import door from '../images/products/product-door-hangers.jpg'

//product store
const products = [
    {
        name: 'Direct Mail Postcards',
        productsAvailable: 3,
        link: 'postcards',
        image: postcard
    },
    {
        name: 'Postcards Magnets',
        productsAvailable: 2,
        link: 'postcard-magnets',
        image: magnet
    },
    {
        name: 'Plastic Postcards',
        productsAvailable: 3,
        link: 'plastic-postcards',
        image: plastic
    },
    {
        name: 'Scratch-Off Postcards',
        productsAvailable: 2,
        link: 'scratch-off-postcards',
        image: scratch
    },
    {
        name: 'Restaurant Menu Mailers',
        productsAvailable: 3,
        link: 'menus',
        image: menu
    },
    {
        name: 'Direct Mail Letters',
        productsAvailable: 2,
        link: 'letters',
        image: letter
    },
    {
        name: 'Brochures',
        productsAvailable: 3,
        link: 'brochures',
        image: brochure
    },
    {
        name: 'Door Hangers',
        productsAvailable: 1,
        link: 'door-hangers',
        image: door
    },
]

function Product({name, productsAvailable, link, image}) {
    return (
        <ProductWrapper href={`https://www.themailshark.com/products/${link}/`}>
            <ImageWrapper>
                <img src={image} alt=''/>
            </ImageWrapper>
            <h3>{name}</h3>
            <p>{`${productsAvailable} Product${productsAvailable > 1 ? 's' : ''} Available`}</p>
        </ProductWrapper>
    )
}

export default function Products() {
    return (
        <section>
            <Margins>
                <Heading
                    title='Stand Out in the Mailbox'
                    subtitle='Our products'
                    link='https://www.themailshark.com/products/'
                    padding
                />
            </Margins>
            <SliderWrapper>
                    <div />
                    {products.map((product, index) => 
                        <Product
                            name={product.name}
                            productsAvailable={product.productsAvailable}
                            link={product.link}
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
        grid-template-columns: 2.5% repeat(8, 70%) 2.5%;
    }
    @media screen and (min-width: 112.5rem){
        grid-template-columns: calc((100% - 100rem) * .4) repeat(8, 15%) calc((100% - 100rem) * .4);
        gap: calc((100% - 100rem) * .1);
    }
`

const ProductWrapper = styled.a`
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