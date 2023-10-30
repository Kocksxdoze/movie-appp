// import { AiOutlineSearch } from "react-icons/ai";
export default function Input({ setSearchValue, searcValue }) {
    return (
        <>
            <section className="inputCard">
                {/* <AiOutlineSearch size={20} className="searchIcon" /> */}
                <input
                    className="inputCard"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search Movie"
                    type="text"
                />
            </section>
        </>
    );
}
