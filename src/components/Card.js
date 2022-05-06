import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

const Card = ({bgColor}) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <div className={`${bgColor} w-80 h-80 rounded-3xl p-6 m-3 grid grid-cols content-between cursor-pointer transition ease-in-out hover:scale-105 duration-400`} onClick={(e) => setShowModal(true)}>
                <div>
                    <div className="text-xl mb-2">This is Title</div>
                    <div className="">This is Description...</div>
                </div>
                <div className="text-black text-sm">
                    April 29, 2022
                </div>
            </div>

            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                        I always felt like I could do anything. That’s the main thing people
                        are controlled by! Thoughts- their perception of themselves! They're
                        slowed down by their perception of themselves. If you're taught you
                        can’t do anything, you won’t do anything. I was taught I could do
                        everything.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setShowModal(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    
    );
}

export default Card;