import React from 'react';
import { useForm } from "react-hook-form";
import { MainStyle, Row, Column } from './../styles-default/layout';
import "../styles-default/form.scss";


export default function Contact() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <MainStyle>
            <Row>
                <Column>
                    <div className="Errors">
                        {errors.name && <p>{errors.name.message}</p>}
                        {errors.email && <p>{errors.email.message}</p>}
                        {errors.contactmessage && <p>{errors.contactmessage.message}</p>}
                    </div>
                </Column>
            </Row>

            <Row>
                <Column>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                ref={register({required: "Please, tell us your name"})}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Write your email"
                                name="email"
                                ref={register({required: "Email Required"})}
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="contactmessage">Your message</label>
                            <textarea
                                name="contactmessage"
                                ref={register({required: "Please, write a message", min: 20})} />
                        </fieldset>
                        <input type="submit" />
                    </form>
                </Column>
            </Row>
        </MainStyle>
    );

}



