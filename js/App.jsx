const { useState, useEffect } = React;

const App = () => {
	const [fetchInfo, setFetchInfo] = useState({
		error: null,
		loaded: false,
		data: [],
	});

	useEffect(() => {
		fetch("https://failteireland.azure-api.net/opendata-api/v1/attractions")
			.then((res) => res.json())
			.then((jsonData) => {
				let temp = [];
				jsonData.results.map((e) => {
					const place = {
						name: e.name,
						type: e["@type"],
						address: {
							addressLocality: e.address.addressLocality,
							addressRegion: e.address.addressRegion,
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
					temp.push(place);
				});
				setFetchInfo({ error: null, loaded: true, data: temp });
			})
			.catch((err) => setFetchInfo({ error: err, loaded: true, data: [] }));
	}, []);

   if (fetchInfo.error) return <div>Fetch Failed</div>

   if (!fetchInfo.loaded) return <div>Loading....</div>

	return (
		<div>
         <Search />
			<Table data={fetchInfo.data} />
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
      <App />
	</React.StrictMode>,
	document.getElementById("root")
);

