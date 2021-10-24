const Table = props => {
   const data = props.data
   return (
      <div className="container mx-auto mt-4">
         <div className="row">
            {data.map(attraction => <Card place={attraction} key={attraction.name}/>) }
         </div>
      </div>
   )
} 