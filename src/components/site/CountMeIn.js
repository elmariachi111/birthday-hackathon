import React, { useState } from 'react'
import { Box, Form, FormField, Heading, Button, Paragraph, ResponsiveContext } from 'grommet'
import { Like } from "grommet-icons"
import styled from 'styled-components'
import _map from "lodash.map"

import emailValidator from 'email-validator'
const NETLIFY_FORM_NAME = `birthdayhack-submissions`
const HiddenField = styled.div`
  display: none;
  height: 0;
`

async function postSubmission(formName, submission) {
    const encoded = _map(
        {
            "form-name": formName,
            ...submission,
        },
        (val, key) => encodeURIComponent(key) + `=` + encodeURIComponent(val)
    ).join(`&`)

    return fetch(`/`, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encoded,
    })
}

export default (props) => {
    const [submitted, setSubmitted] = useState({})

    const validate = (val) => {
        return emailValidator.validate(val) ? null : "that's not an email address :("
    }
    const doSubmit = async ({ value }) => {
        try {
            const response = await postSubmission(NETLIFY_FORM_NAME, value)
            console.log(response)
            setSubmitted(value)
        } catch (e) {
            setSubmitted({})
            console.error(e)
        }

    }

    const size = React.useContext(ResponsiveContext);

    return <Box width="large" align="center">
        {submitted.name
            ?
            <Box direction="column"
                background="dark-2"
                round="full"
                elevation="xlarge"
                width={size === "small" ? "90vw" : "medium"}
                basis={size === "small" ? "90vw" : "medium"}
                align="center"
                justify="center"
            >
                <Like size="xlarge" color="status-ok" />
                <Paragraph color="status-ok" textAlign="center">good to have you on board, {submitted.name}! <br />
                    We'll keep you posted.
                </Paragraph>
            </Box>

            :
            <Box fill>
                <Heading level={2} size="xlarge" alignSelf="center" >
                    Okay, count me in!
                </Heading>
                <Form name={NETLIFY_FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="important-note-field"
                    onSubmit={doSubmit}>
                    <HiddenField>
                        <label>
                            Another field for you to fill:{` `}
                            <input
                                aria-label="dont fill this field if youre not a machine"
                                name="important-note-field"
                            />
                        </label>
                        <input
                            type="hidden"
                            name="form-name"
                            aria-label="a technical field thats filled automatically"
                            value={NETLIFY_FORM_NAME}
                        />
                    </HiddenField>
                    <FormField name="name" label="your name" required />
                    <FormField name="twitter" label="github || twitter handle" />
                    <FormField name="email" validate={validate} label="email address" />
                    <Button type="submit" primary label="Submit" />
                </Form>
            </Box>
        }
    </Box>
}