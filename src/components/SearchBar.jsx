const SearchBar = () => {
    return (
        <div className="p-4 bg-text shadow">
            <input
                type="text"
                className="w-full p-2 border border-secondary rounded"
                placeholder="Search Games..."
            />
        </div>
    );
};

export default SearchBar;
