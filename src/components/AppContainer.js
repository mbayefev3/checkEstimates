import React from 'react'
import Header from './Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Amount from './Amount'
import ErrorC from './Error'
import Note from './Note'
import DropDownForm from './Form'

import { currency } from '../Data/data'

class AppContainer extends React.Component {

    state = {

        senderCountry: '',
        receiverCountry: '',
        senderCurrencyCode: '',
        receiverCurrencyCode: '',
        amount: '',
        error: '',
        services: '',
        apiData: '',
        stoped: '',
        serviceStop: ''
    }




    onHandleSender = (e, data) => {


        const senderCountry = data.value
        const findSenderCurrencyCode = currency.find(country => country.country === senderCountry)

        if (!findSenderCurrencyCode) {

            this.setState(() => {

                return {

                    error: 'Not supporting sender country at the moment',
                    senderCountry: ''
                }
            })
        }


        else {


            const senderCurrencyCode = findSenderCurrencyCode.currency_code

            this.setState(() => {

                return {

                    senderCountry,
                    senderCurrencyCode,
                    error: '',
                    stoped: '',
                    amount: ''
                }
            })

        }





    }

    onClear = () => {

        if ((this.state.senderCurrencyCode && this.state.senderCurrencyCode !== 'USD') ||
            (this.state.receiverCurrencyCode && this.state.receiverCurrencyCode !== 'XOF')) {

            console.log('click')
            this.setState(() => {

                return {

                    services: '',
                    serviceStop: 0
                }
            })
        }

    }


    onHandleReceiver = (e, data) => {


        const receiverCountry = data.value
        const findReceiverCountryCode = currency.find(country => country.country === receiverCountry)


        if (!findReceiverCountryCode) {

            this.setState(() => {

                return {

                    error: 'Not supporting receiving country at the moment',
                    receiverCountry: ''
                }
            })
        } else {
            const receiverCurrencyCode = findReceiverCountryCode.currency_code

            this.setState(() => {

                return {

                    receiverCountry,
                    receiverCurrencyCode,
                    error: '',
                    stoped: '',
                    amount: ''
                }
            })
        }

    }


    onHandleAmount = (e) => {

        e.preventDefault()
        const amount = e.target.elements.amount.value;

        // console.log(amount)
        // if (!amount) {

        this.setState(() => ({
            amount,
            error: ''
        }))
        //     this.setState(() => {

        //         return {

        //             amount: amount
        //         }
        //     })
        // }





    }



    onServices = (e, data) => {


        const services = data.value

        console.log('services', services)

        this.setState(() => {


            return {

                services
            }
        })


    }
    onHandleSubmit = (e, data) => {

        console.log(e)
        this.onHandleSender(data.value)
        this.onHandleReceiver(data.value)
        this.onServices(data.value)
    }




    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.senderCurrencyCode &&
            this.state.receiverCurrencyCode &&
            this.state.amount && this.state.error === ''
            && this.state.stoped !== undefined) {

            // 992b19978a484e1eb528da2cdf39cf08
            fetch(`https://api.currencyfreaks.com/latest?apikey=992b19978a484e1eb528da2cdf39cf08&base=${this.state.senderCurrencyCode}`).then(res => {

                res.json().then(data =>





                    this.setState(() => {




                        return {

                            apiData: data.rates[this.state.receiverCurrencyCode],
                            error: '',
                            stoped: undefined
                        }
                    }))


            })
        }

    }



    render() {





        // console.log(this.state.senderCountry)
        // console.log(this.state.senderCurrencyCode)
        // console.log(this.state.receiverCountry)
        // console.log(this.state.receiverCurrencyCode)
        // console.log(this.state.amount)
        console.log(this.state.services)

        console.log('api', this.state.apiData)
        return (
            <div>


                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg" style={{ backgroundColor: "yellow" }}>
                        <Header />
                        <Note />
                        <DropDownForm onHandleSubmit={this.onHandleSubmit}
                            onHandleReceiver={this.onHandleReceiver}
                            onHandleSender={this.onHandleSender}
                            onServices={this.onServices}

                            onClear={this.onClear}

                            senderCurrencyCode={this.state.senderCurrencyCode} receiverCurrencyCode={this.state.receiverCurrencyCode} services={this.state.services} />
                        <Amount
                            onHandleAmount={this.onHandleAmount}

                            senderCountry={this.state.senderCountry}

                            receiverCountry={this.state.receiverCountry}
                            error={this.state.error}
                            amount={this.state.amount}

                            apiData={this.state.apiData}

                            services={this.state.services}

                            receiverCurrencyCode={this.state.receiverCurrencyCode}

                            onClear={this.onClear}
                        />
                        <ErrorC error={this.state.error} />
                    </Container>
                </React.Fragment>
            </div>
        )
    }
}







export default AppContainer