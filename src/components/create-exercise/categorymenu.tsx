import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";

const CategoryMenu = ({ activeMenu, setCategory, setActiveMenu }) => {
    const { response, error } = useFetch(
        `${API_URL}/api/v1/exercise/category`,
        "GET",
        []
    );

    console.log(response);

    return (
        <div className={activeMenu === "main" ? `block` : "hidden"}>
            <h2 className="text-headline font-bold text-xl mb-4">
                Kategorie auswählen
            </h2>
            {response?.data ? (
                <div>
                    {response?.data.map((d) => {
                        return (
                            <div
                                key={d.id}
                                className="flex justify-between items-center p-2 bg-bgHighlight rounded-md mb-2"
                                onClick={() => {
                                    setActiveMenu("exercises");
                                    setCategory(d.name);
                                }}
                            >
                                <p className="text-headline">{d.name}</p>
                                <p className="text-headline font-bold">❯</p>
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
export default CategoryMenu;
