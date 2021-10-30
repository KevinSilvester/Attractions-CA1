const { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, createContext } = React;
const { createPortal } = ReactDOM

const DataCtx = createContext()

const DataProvider = (props) => {
   const [edit, setEdit] = useState({})
   const [remove, setRemove] = useState({})
   const [add, setAdd] = useState({})
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
