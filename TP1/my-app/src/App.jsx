import { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import Modal from './components/Modal';
import Input from './components/ui/Input';
import Button from './components/ui/Button';

const sampleGoals = [

    "Faire les courses",

    "Aller à la salle de sport 3 fois par semaine",

    "Monter à plus de 5000m d altitude",

    "Acheter mon premier appartement",

    "Perdre 5 kgs",

    "Gagner en productivité",

    "Apprendre un nouveau langage",

    "Faire une mission en freelance",

    "Organiser un meetup autour de la tech",

    "Faire un triathlon"
];

function App() {
    const [goals, setGoals] = useState(sampleGoals);
    const [newGoal, setNewGoal] = useState("");

    const [modalType, setModalType] = useState(null); // 'edit' | 'delete'
    const [selectedGoalIndex, setSelectedGoalIndex] = useState(null);
    const [editedGoalText, setEditedGoalText] = useState("");

    const handleAddGoal = () => {
        if (newGoal.trim() === "") return;
        setGoals([newGoal, ...goals]);
        setNewGoal("");
    };

    const handleRequestDelete = (index) => {
        setModalType("delete");
        setSelectedGoalIndex(index);
    };

    const handleConfirmDelete = () => {
        const updatedGoals = goals.filter((_, i) => i !== selectedGoalIndex);
        setGoals(updatedGoals);
        closeModal();
    };

    const handleRequestEdit = (index) => {
        setModalType("edit");
        setSelectedGoalIndex(index);
        setEditedGoalText(goals[index]);
    }

    const handleConfirmEdit = () => {
        if (editedGoalText.trim() === "") return;
        const updatedGoals = goals.map((goal, i) =>
            i === selectedGoalIndex ? editedGoalText : goal
        );
        setGoals(updatedGoals);
        closeModal();
    }

    const closeModal = () => {
        setModalType(null);
        setSelectedGoalIndex(null);
        setEditedGoalText("");
    };

    return (
        <div className="container">
            <h1 className="title">Mes objectifs</h1>

            <div className="form-row">
                <Input
                    type="text"
                    className="custom-input"
                    placeholder="Ajouter un objectif"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                />
                <Button onClick={handleAddGoal}>Ajouter</Button>
            </div>

            <GoalList
                goals={goals}
                onEdit={handleRequestEdit}
                onDelete={handleRequestDelete}
            />

            {modalType === "delete" && (
                <Modal
                    title="Confirmer la suppression"
                    onClose={closeModal}
                    onConfirm={handleConfirmDelete}
                    confirmText="Supprimer"
                    modalType="delete"
                >
                    <p>Voulez-vous vraiment supprimer cet objectif ?</p>
                </Modal>
            )}
            {modalType === "edit" && (
                <Modal
                    title="Modifier l'objectif"
                    onClose={closeModal}
                    onConfirm={handleConfirmEdit}
                    confirmText="Modifier"
                    modalType="edit"
                >
                    <Input
                        type="text"
                        className="custom-input"
                        value={editedGoalText}
                        onChange={(e) => setEditedGoalText(e.target.value)}
                        placeholder="Modifier l'objectif"
                    />
                </Modal>
            )}
        </div>

    );
}

export default App;
