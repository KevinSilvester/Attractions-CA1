const Table = props => {
   const data = props.data
   return (
      <div className="container mx-auto mt-4">
         <div className="row">
            {data.map(attraction => <Card attraction={attraction} key={attraction.name}/>) }
         </div>
      </div>
   )
} 