import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";
import axios from "axios";

const ExerciseMenu = ({ activeMenu, selectedCategory, setActiveMenu }) => {
    const { response, error } = useFetch(
        `${API_URL}/api/v1/exercise`,
        "GET",
        []
    );

    const createUserExercise = async (id) => {
        try {
            const res = await axios.post(
                `${API_URL}/api/v1/userexercise/${id}`
            );
            if (res.data) {
                alert("Übung erstellt " + id);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(response);

    return (
        <div className={activeMenu === "exercises" ? `block` : "hidden"}>
            <div className="flex items-center mb-4">
                <button
                    className="text-headline mr-2 font-bold"
                    onClick={() => setActiveMenu("main")}
                >
                    ❮
                </button>
                <h2 className="text-headline font-bold text-xl">
                    Übung auswählen - {selectedCategory}
                </h2>
            </div>
            {response?.data ? (
                <div>
                    {response.data
                        .filter(
                            (f) => f.exerciseCategory.name === selectedCategory
                        )
                        .map((d) => {
                            return (
                                <div
                                    className="text-headline p-2 bg-bgHighlight rounded-md mb-2"
                                    key={d.id}
                                    onClick={() => createUserExercise(d.id)}
                                >
                                    <p>{d.name}</p>
                                </div>
                            );
                        })}
                </div>
            ) : (
                <p>loading</p>
            )}
        </div>
    );
};
export default ExerciseMenu;
