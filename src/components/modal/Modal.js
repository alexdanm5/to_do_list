
import './modal.scss';

export const Modal = ({onDecision}) => {

    return (
        <div className="modal__overlay">
            <div className="modal__wrapper">
                <div className="modal__title">This task already exists. Do you want to add it again?</div>
                <div className="modal__btns">
                    <button className="modal__btn modal__btn-confirm" onClick={() => onDecision(true)}>Yes</button>
                    <button className="modal__btn modal__btn-cancel" onClick={() => onDecision(false)}>No</button>
                </div>
            </div>
        </div>
    )
}