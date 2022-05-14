import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"

const CardModal = props => {
    // if (!props.show) {
    //     return null
    // }
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
    }, []);

    return ReactDOM.createPortal(
        <CSSTransition in={props.show} unmountOnExit timeout={{ enter: 0, exit: 300}}>
            <div onClick={props.onClose} className={`modal ${props.show ? 'show' : ''}`}>
            <div onClick={e => e.stopPropagation()} className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">
                        {props.title}
                    </h4>
                </div>
                <div className="modal-body">
                    This is Modal Content
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>
        </CSSTransition>,
        document.getElementById('root')
    );
};
 
export default CardModal;

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a