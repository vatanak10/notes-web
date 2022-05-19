import React, { useEffect } from "react"

const CardModal = props => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div onClick={props.onClose} className={`modal ${props.show ? 'show' : ''}`}>
            <div onClick={e => e.stopPropagation()} className={`modal-content rounded-3xl`}>
                {/* <div className="modal-header">
                    <h4 className="modal-title">
                        {props.title}
                    </h4>
                </div> */}
                <div className={`modal-body w-full h-full rounded-3xl flex justify-center ${props.bgColor}`}>
                    This is Modal Content
                </div>
                {/* <div className="modal-footer">
                    <button onClick={props.onClose} className="button">
                        Close
                    </button>
                </div> */}
            </div>
        </div>
    );
};
 
export default CardModal;

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a