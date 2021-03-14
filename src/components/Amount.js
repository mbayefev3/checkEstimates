import React from 'react'
import {
    Button, Divider, Label, Form, Input, Modal, Dimmer, Loader, Image, Segment
} from 'semantic-ui-react'


import './styles/style.css'

import { DropDownForSFlag, DropDownForRFlag } from './DropDowns'
const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']





const Loading = () => (
    <div>


        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src='/images/wireframe/short-paragraph.png' />
        </Segment>
    </div>
)


// senderCountry={this.state.senderCountry}

// receiverCountry={this.state.receiverCountry} 
// error={this.state.error} 
// amount={this.state.amount}


function ExpenseModal(props) {





    let EstMoneyGram = .95726
    let EstWesternUnion = 0.957
    let EstRia = 0.9861


    let serviceAmount = []


    if (props.services.length > 0) {


        for (let service of props.services) {


            if (service === 'moneyGram') {


                serviceAmount.push({
                    id: 1,
                    service: 'moneyGram',
                    amount: (props.amount * EstMoneyGram * props.apiData).toFixed(3)
                })
            } else if (service === 'westernUnion') {

                serviceAmount.push({
                    id: 2,

                    service: 'westernUnion',
                    amount: (props.amount * EstWesternUnion * props.apiData).toFixed(3)
                })
            } else if (service === 'Ria') {
                serviceAmount.push({
                    id: 3,
                    service: 'Ria',
                    amount: (props.amount * EstRia * props.apiData).toFixed(3)
                })
            }
        }
    }


    // '' * '' ===0

    // let servicesCal =[]


    const convertedAmount = (props.amount * props.apiData).toFixed(3)




    // if (props.senderCurrencyCode !== 'USD' && props.receiveCurrencyCode !== 'XOF') {

    //     serviceAmount = []

    // }

    const SummaryServicesAnswer = serviceAmount.map(service => {



        return <SummaryServices key={service.id} service={service.service} amount={service.amount} receiverCurrencyCode={props.receiverCurrencyCode} />
    })

    const summaryAnswer = serviceAmount.length === 0 && convertedAmount > 0 ? <ConvertedSummary amount={props.amount} apiData={props.apiData} receiverCurrencyCode={props.receiverCurrencyCode} /> : null



    const loading = props.apiData === '' ? <Loading /> : SummaryServicesAnswer

    const finalAnswer = summaryAnswer ? summaryAnswer : loading
    // console.log('amount', props.amount)
    // console.log('apidata', props.apiData)
    const answer = (props.receiverCountry !== '' &&
        props.senderCountry !== '' && props.error === ''

        ? false : true
    )

    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            centered={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button onClick={props.onClear} disabled={answer
            }> Send</Button >}
        >
            <Modal.Header>Thank you!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {
                        !answer && props.amount === '' ? <p>Please provide an amount</p> : finalAnswer
                    }

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>OK</Button>
            </Modal.Actions>
        </Modal >
    )
}



const ConvertedSummary = (props) => {

    const converted = (props.amount * props.apiData).toFixed(3)


    return (
        <div className='size'>
            {props.apiData === '' ? <Loading /> : <p>Estimates: {converted} {props.receiverCurrencyCode}</p>}

        </div>
    )
}

const SummaryServices = (props) => {


    return (

        <div className='size'>
            <p>Service:{props.service}</p>
            <p>Estimates:{props.amount} {props.receiverCurrencyCode}</p>
            <br />
        </div>
    )
}



const Amount = (props) => (
    <div>

        <Form size={sizes[4]} onSubmit={props.onHandleAmount} >
            <Form.Group widths='equal'>


                <Form.Field>
                    <Input labelPosition='right' type='number' placeholder='Amount' name='amount' />

                    <Label pointing>Amount</Label>
                </Form.Field>


                <Divider />


            </Form.Group>

            <ExpenseModal senderCountry={props.senderCountry}
                receiverCountry={props.receiverCountry}
                amount={props.amount}
                error={props.error}

                apiData={props.apiData}

                services={props.services}

                receiverCurrencyCode={props.receiverCurrencyCode} onClear={props.onClear} />

            <Divider hidden />
        </Form>

    </div>
)
export default Amount