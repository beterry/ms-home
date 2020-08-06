import React, { Component } from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import images
import opc from '../images/products/opc.jpg'

const SliderWrapper = styled.div`
    overflow-x: scroll;
    border-radius: .25rem;
`

const Slider = styled.div`
    width: 175%;
    max-width: 150rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;
`

const Product = styled.div`
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



export default class ProductGallery extends Component {
    render() {
        return (
            <SliderWrapper>
                <Slider>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                    <Product>
                        <ImageWrapper>
                            <img src={opc} alt=''/>
                        </ImageWrapper>
                        <h3>Direct Mail Postcards</h3>
                        <p>3 Products Available</p>
                    </Product>
                </Slider>
            </SliderWrapper>
        )
    }
}
