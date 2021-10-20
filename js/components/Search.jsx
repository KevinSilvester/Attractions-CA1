const Search = props => {
   const [val, setVal] = useState("");

   const searchTerm = props.searchTerm;

   useEffect(() => searchTerm(val), [val]);

   return (
      <div className="search__container">
         <input
            className="search__input"
            type="text"
            onChange={e => setVal(e.target.value)}
            value={val}
         />
         <button className="search__clear" onClick={() => setVal("")}>
            <i className="fas fa-times"></i>
         </button>
      </div>
   );
};
