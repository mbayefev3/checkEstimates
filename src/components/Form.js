import React from 'react'
import { Button, Divider, Label, Form, Input } from 'semantic-ui-react'

import { DropDownForSFlag, DropDownForRFlag, Services } from './DropDowns'
const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const DropDownForm = (props) => (
    <div>

        <Form size={sizes[4]} >
            <Form.Group widths='equal'>



                <Form.Field>
                    < DropDownForSFlag onHandleSender={props.onHandleSender} onHandleSubmit={props.onHandleSubmit} />
                    <Label pointing>Sender Country</Label>
                </Form.Field>
                <Divider />

                <Form.Field>
                    <DropDownForRFlag onHandleReceiver={props.onHandleReceiver} onHandleSubmit={props.onHandleSubmit} />

                    <Label pointing>Receiver Country</Label>
                </Form.Field>

                <Form.Field>
                    <Services onHandleSubmit={props.onHandleSubmit} onServices={props.onServices}
                        senderCurrencyCode={props.senderCurrencyCode}
                        receiverCurrencyCode={props.receiverCurrencyCode} services={props.services} />
                    <Label pointing>Choose services</Label>

                </Form.Field>





            </Form.Group>
            <Divider hidden />
        </Form>

    </div>
)
export default DropDownForm