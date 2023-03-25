import React, {useState} from 'react'(
import {Link} from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../componenet/Message'
import CheckoutSteps from '../componenet/CheckoutSteps'

const PlaceOrderScreen = ( ) => {
    const cart = useSelector((state) => state.cart)

    //Calculate Prices
    const addDecimals = (num) => {
        return (Math.round(num * 100)/100).toFixed(2)
    }
    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc,item) => acc + item.price * item.qty,0))
        cart.shippingPrice = addDecimals(cart.itemsPrice).toFixed(2)) 
        cart.totalPrice = (
            Number(cart.itemsPrice) +
            Number(cart.shippingPrice) +
            Number(cart.taxPrice) 
        ).toFixed(2)
        const placeOrderHandler = ( ) => {
            console.log('Order')
        }
        return
        <>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2> Shipping</h2>
                        <p>
                            <strong> Address</strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city},
                            {cart.shippingAddress.postalCode},
                            {cart.shippingAddress.country}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item> 
                        <h2> Payment Method </h2>
                        <strong> Method </strong>
                        {cart.paymentMethod}
                    </ListGroup.Item>

                    <ListGroup.Item>  
                        <h2> Order Item </h2>
                        {cart.cartItems.length === 0 ? (
                            scr = { item.image }
                            <Col>

                            

                            </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        
        </>
}