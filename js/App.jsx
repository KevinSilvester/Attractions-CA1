const App = () => {
   const { _edit, _remove, _add } = useContext(DataCtx)
   const [edit, setEdit] = _edit
   const [add, setAdd] = _add
   const [remove, setRemove] = _remove

   const [state, dispatch] = useReducer(dataReducer, initialState)
   const { data, displayData, error, loaded } = state

   useEffect(() => {
      fetch('http://localhost:8000/results')
         .then(res => res.json())
         .then(jsonData => {
            let temp = []
            jsonData.map(e => {
               const place = {
                  id: randomId(),
                  name: e.name,
                  type: e['@type'],
                  address: {
                     locality: e.address.addressLocality,
                     county: e.address.addressRegion
                  },
                  tags: e.tags,
                  phone: e.telephone,
                  website: e.url
               }
               temp.push(place)
            })
            dispatch({ type: 'FETCH_SUCCESS', data: temp })
         })
         .catch(err => dispatch({ type: 'FETCH_FAIL', error: err }))
   }, [])

   // useEffect(() => {
   //    if (loaded && edit !== {})
   //       dispatch({ type: 'EDIT', attraction: edit })
   //    setEdit({})
   // }, [edit])

   const handleFilterSort = (data, sortVal) => {}

   const handleSearch = query => {
      query.length === 0
         ? dispatch({ type: 'SEARCH_CLEAR' })
         : dispatch({ type: 'SEARCH_QUERY', query: querdy })
   }

   const TableComp = useMemo(() => <Table data={displayData} />, [displayData])

   if (error) return <div>Fetch Failed</div>

   if (!loaded) return <div>Loading....</div>

   return (
      <div>
         {console.log(edit, add, remove)}
         <Search query={handleSearch} />
         {TableComp}
      </div>
   )
}

ReactDOM.render(
   <React.StrictMode>
      <DataProvider>
         <App />
      </DataProvider>
   </React.StrictMode>,
   document.getElementById('root')
)