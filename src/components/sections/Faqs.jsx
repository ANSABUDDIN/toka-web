import { React, useContext, useState } from "react";

import { BsPlusLg } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineMinus } from "react-icons/ai";
import {
    AccordionContext,
    useAccordionButton,
    Accordion,
    Card,
} from "react-bootstrap";
import { t } from "i18next";


function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button type="button" onClick={decoratedOnClick} className="acc-toggler">
            {isCurrentEventKey ? <AiOutlineArrowLeft /> : <AiOutlineArrowDown />}
        </button>
    );
}

const scrollTopTop = (changeState) => {
    changeState(1);
    window.scrollTo(0, 0);
};

export default function Faqs() {
    return (
        <>


            <div className="container mt-5" id="faqs">
                <div className='gradient my-5 d-flex justify-content-center'>
                    <span className=" fs-0 heading-font fw-bold">
                       {t('question')}
                        </span>
                </div>
                <Accordion defaultActiveKey="0">
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                            <div className="mb-0">
                                {t('wanton')}
                                </div>
                            <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="">
                                {" "}
                                <span className=" ps-0">
                                {t('wanton')}
                                </span>{" "}
                                <div className="mt-2 side-line ">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                            <div className="mb-0">{t('wanton')}</div>
                            <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="">
                                {" "}
                                <span className=" ps-0">
                                {t('wanton')}
                                </span>{" "}
                                <div className="mt-2 side-line ">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                            <div className="mb-0">{t('wanton')}</div>
                            <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="">
                                <span className=" ps-0">
                                {t('wanton')}
                                </span>{" "}
                                <div className="mt-2 side-line ">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                            <div className="mb-0">{t('wanton')}</div>
                            <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="">
                                <span className=" ps-0">
                                {t('wanton')}
                                </span>{" "}
                                <div className="mt-2 side-line ">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                            <div className="mb-0">{t('wanton')}</div>
                            <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="">
                                <span className=" ps-0">
                                {t('wanton')}
                                </span>{" "}
                                <div className="mt-2 side-line ">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                            <div className="mb-0">{t('wanton')}</div>
                            <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className="">
                                <span className=" ps-0">
                                {t('wanton')}
                                </span>{" "}
                                <div className="mt-2 side-line ">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    );
}