import GoalItem from './GoalItem';

function GoalList({ goals, onEdit, onDelete }) {

    return (
        <div className="goals-list">
            {goals.map((goal, index) => (
                <GoalItem
                    key={index}
                    text={goal}
                    onEditClick={() => onEdit(index)}
                    onDeleteClick={() => onDelete(index)}
                />
            ))}
        </div>
    );
}

export default GoalList;
