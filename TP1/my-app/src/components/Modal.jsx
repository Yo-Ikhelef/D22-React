import './Modal.css';
import Button from "./ui/Button.jsx";

function Modal({ title, children, onClose, onConfirm, confirmText = "Valider", showCancel = true, modalType = "default" }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{title}</h2>
                <div className="modal-content">{children}</div>
                <div className="modal-actions">
                    {showCancel && (
                        <Button variant="secondary" onClick={onClose}>Annuler</Button>
                    )}
                    <Button variant={modalType === "delete" ? "danger" : "primary"} onClick={onConfirm}>
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
