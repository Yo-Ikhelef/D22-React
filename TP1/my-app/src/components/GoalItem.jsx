import Button from "./ui/Button.jsx";

function GoalItem({ text, onEditClick, onDeleteClick }) {

    return (
        <div className="goal-card">
            <span>{text}</span>
            <Button variant="edit-button" onClick={onEditClick}>
                ✎
            </Button>
            <Button variant="remove-button" onClick={onDeleteClick}>
                ✖
            </Button>
        </div>
    );
}

export default GoalItem;
