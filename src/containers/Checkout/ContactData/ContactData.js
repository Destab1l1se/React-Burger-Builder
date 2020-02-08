import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {

        this.setState({loading: true});

        const data = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Slava Kovalchuk',
                address: {
                    street: 'Teststreet',
                    zipCode: '123123',
                    country: 'Ukraine'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', data)
            .then(response => {

                this.setState({
                    loading: false,
                });
                this.props.history.push('/');

            })
            .catch(error => {
                this.setState({loading: false});
            });

        event.preventDefault();
    };

    render() {

        let form;

        if (this.state.loading) {
            form = <Spinner/>;
        } else {
            form = (
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="Your Mail"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            );
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;