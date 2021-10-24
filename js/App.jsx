const { useState, useEffect } = React;

const App = () => {
   const [fetchInfo, setFetchInfo] = useState({ error: null, loaded: false, data: [] });
   const [filterData, setFilterData] = useState([])
   const [displayData, setDisplayData] = useState([])

   useEffect(() => {
      fetch("https://failteireland.azure-api.net/opendata-api/v1/attractions")
         .then(res => res.json())
         .then(jsonData => {
            let temp = [];
            jsonData.results.map((e) => {
               const attraction = {
                  name: e.name,
                  type: e["@type"],
                  address: {
                     locality: e.address.addressLocality,
                     county: e.address.addressRegion,
                  },
                  coordinates: {
                     latitude: e.geo.latitude,
                     longitude: e.geo.longitude,
                  },
                  image: e.image.url,
                  tags: e.tags,
                  phone: e.telephone,
                  website: e.url,
               };
               temp.push(attraction);
            });
            temp.sort((a, b) => (a.name < b.name ? -1 : 1))
            setFetchInfo({ error: null, loaded: true, data: temp });
            setFilterData(temp)
            setDisplayData(temp)
         })
         .catch(err => setFetchInfo({ error: err, loaded: true, data: [] }));
   }, []);

   const handleFilterSort = (data, sortVal) => {

   }

   const handleSearch = searchTerm => {
      if (searchTerm.length === 0) {
         setDisplayData(filterData)
         return
      }
      setDisplayData([...filterData.filter(attraction => attraction.name.toLowerCase().match(new RegExp(searchTerm.toLowerCase())))])
   }

   if (fetchInfo.error) return <div>Fetch Failed</div>

   if (!fetchInfo.loaded) return <div>Loading....</div>

   return (
      <div>
         <Search searchTerm={handleSearch} />
         <Table data={displayData} />
      </div>
   );
};

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);

