const Card = props => {
   const attraction = props.place
   return (
         <div className="col-md-4">
            <div className="card">
               <img src={attraction.image} alt={attraction.name} className="card-img-top" />
               <div className="card-body">
                  <h5 className="card-title">{attraction.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                     {attraction.address.locality}, {attraction.address.county}
                  </h6>
                  <a href={attraction.website} target="_blank" className="btn">
                     <i className="fas fa-link" />
                     Visit Site
                  </a>
               </div>
            </div>
         </div>
   )
}