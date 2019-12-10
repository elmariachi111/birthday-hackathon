import React, { useState } from 'react'
import { Box, Form, FormField, Heading, Button, Paragraph, ResponsiveContext } from 'grommet'
import { Like } from "grommet-icons"

import emailValidator from 'email-validator'

export default (props) => {
    const [submitted, setSubmitted] = useState({})

    const validate = (val) => {
        return emailValidator.validate(val) ? null : "that's not an email address :("
    }
    const doSubmit = ({ value }) => {
        console.log(value)
        setSubmitted(value)
    }

    const size = React.useContext(ResponsiveContext);

    return <Box width="large" align="center">

        {submitted.name
            ?
            <Box direction="column"
                background="dark-2"
                round="full"
                elevation="xlarge"
                width={size == "small" ? "90vw" : "medium"}
                basis={size == "small" ? "90vw" : "medium"}
                align="center"
                justify="center"
            >
                <Like size="xlarge" color="status-ok" />
                <Paragraph color="status-ok" textAlign="center">good to have you on board, {submitted.name}! <br />
                    We'll keep you posted.
                </Paragraph>
            </Box>

            :
            <div>
                <Heading level={2} size="xlarge" >
                    Okay, count me in!
                </Heading>
                <Form onSubmit={doSubmit}>
                    <FormField name="name" label="your name" required />
                    <FormField name="twitter" label="github || twitter handle" />
                    <FormField name="email" validate={validate} label="email address" />
                    <Button type="submit" primary label="Submit" />
                </Form>
            </div>
        }
    </Box>
}