const FilterSidebar = () => {
    return (
        <div className="w-64 p-4 bg-text text-primary">
            <h2 className="text-xl  font-bold mb-4">Filter Search</h2>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Sort</label>
                <select className="w-full p-2 border border-text rounded">
                    <option>Descending</option>
                    <option>Ascending</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Release Date</label>
                <select className="w-full p-2 border border-text rounded">
                    <option>Recent</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Platform</label>
                <select className="w-full p-2 border border-text rounded">
                    <option>Windows</option>
                    <option>MacOS</option>
                    <option>Switch</option>
                    <option>Playstation</option>
                    <option>Xbox</option>
                    <option>Web</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Genre</label>
                <select className="w-full p-2 border border-text rounded">
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Casual</option>
                    <option>Platformer</option>
                    <option>Sim</option>
                    <option>Puzzle</option>
                    <option>CO-OP</option>
                    <option>Ardcade</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSidebar;
