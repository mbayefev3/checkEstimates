import React from 'react'

import 'semantic-ui-css/semantic.min.css'

import { Dropdown } from 'semantic-ui-react'

import * as data from '../Data/data'


// { key: 'wf', value: 'wf', flag: 'wf', text: 'Wallis and Futuna' },
// currencies






const countries = data.countriesAndCode.map(country => {






    return {

        key: country.key,
        value: country.text,
        flag: country.flag,
        text: country.text

    }
})





const DropDownForSFlag = (props) => (
    <Dropdown
        fluid
        search
        selection
        options={countries}
        onAddItem={props.onHandleSubmit}
        onChange={props.onHandleSender}
        content="true"

    />
)
const DropDownForRFlag = (props) => (

    <Dropdown
        fluid
        search
        selection
        options={countries}
        onAddItem={props.onHandleSubmit}
        onChange={props.onHandleReceiver}
        content="true"
    />
)




const options = [
    { key: 1, text: 'moneyGram', value: 'moneyGram' },
    { key: 2, text: 'westernUnion', value: 'westernUnion' },
    { key: 3, text: 'Ria', value: 'Ria' },
]

const renderLabel = (label) => ({
    color: 'blue',
    content: ` ${label.text}`,
    icon: 'check',
})

const Services = (props) => (
    <Dropdown
        clearable
        multiple
        selection
        fluid
        options={options}
        placeholder='services'
        renderLabel={renderLabel}
        onAddItem={props.onHandleSubmit}
        onChange={props.onServices}
        content='true'
        disabled={props.senderCurrencyCode === 'USD' && props.receiverCurrencyCode === 'XOF' ? false : true}
    />

)



// function ExpenseModal() {
//     const [open, setOpen] = React.useState(false)

//     return (
//         <Modal
//             centered={false}
//             open={open}
//             onClose={() => setOpen(false)}
//             onOpen={() => setOpen(true)}
//             trigger={<Button>Show Modal</Button>}
//         >
//             <Modal.Header>Thank you!</Modal.Header>
//             <Modal.Content>
//                 <Modal.Description>
//                     Your subscription has been confirmed
//         </Modal.Description>
//             </Modal.Content>
//             <Modal.Actions>
//                 <Button onClick={() => setOpen(false)}>OK</Button>
//             </Modal.Actions>
//         </Modal>
//     )
// }






export { DropDownForSFlag, DropDownForRFlag, Services }