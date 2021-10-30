const DataCtx = React.createContext()

const DataProvider = (props) => {
   const [edit, setEdit] = React.useState({})
   const [remove, setRemove] = React.useState({})
   const [add, setAdd] = React.useState({})
   const counties = [
		'Antrim',
		'Armagh',
		'Carlow',
		'Cavan',
		'Clare',
		'Cork',
		'Derry',
		'Donegal',
		'Down',
		'Dublin',
		'Fermanagh',
		'Galway',
		'Kerry',
		'Kildare',
		'Kilkenny',
		'Laois',
		'Leitrim',
		'Limerick',
		'Longford',
		'Louth',
		'Mayo',
		'Meath',
		'Monaghan',
		'Offaly',
		'Roscommon',
		'Sligo',
		'Tipperary',
		'Tyrone',
		'Waterford',
		'Westmeath',
		'Wexford',
		'Wicklow'
	]

   return (
      <DataCtx.Provider
         value={{
            e: [edit, setEdit],
            r: [remove, setRemove],
            a: [add, setAdd],
            c: counties
         }}
      >
         {props.children}
      </DataCtx.Provider>
   )
}
