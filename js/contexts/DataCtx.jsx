const { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, createContext } = React;
const { createPortal } = ReactDOM

const DataCtx = createContext()

const DataProvider = (props) => {
   const [edit, setEdit] = useState({})
   const [remove, setRemove] = useState({})
   const [add, setAdd] = useState({})

   return (
      <DataCtx.Provider
         value={{
            _edit: [edit, setEdit],
            _remove: [remove, setRemove],
            _add: [add, setAdd]
         }}
      >
         {props.children}
      </DataCtx.Provider>
   )
}
