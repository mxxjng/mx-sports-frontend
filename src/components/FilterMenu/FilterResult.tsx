interface FilterResultProps {
    results: number;
    resetFilter: () => void;
}

const FilterResult: React.FC<FilterResultProps> = ({
    results,
    resetFilter,
}) => {
    let resultWord = results === 1 ? "Ergebnis" : "Ergebnisse";

    return (
        <div>
            <p className="text-center font-semibold text-primary">
                {results} {resultWord}
            </p>
            <p
                onClick={resetFilter}
                className="my-2 text-center text-sm cursor-pointer"
            >
                Filter zurücksetzen
            </p>
        </div>
    );
};
export default FilterResult;
