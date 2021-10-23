const Card = props => {
   const place = props.place
   return (
         <div className="col-md-4">
            <div className="card">
               <img src={place.image} alt={place.name} className="card-img-top" />
               <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                     {place.address.addressLocality}, {place.address.addressRegion}
                  </h6>
                  <a href={place.website} target="_blank" className="btn">
                     <i className="fas fa-link" />
                     Visit Site
                  </a>
               </div>
            </div>
         </div>
   )
}