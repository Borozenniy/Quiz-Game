import {createContext} from 'react';

type ToastContextType = {};
const ToastContext = createContext<ToastContextType | null>(null);

const ToastProvider = ({children}) => {

  return (
    <ToastContext.Provider value={{}}>
      {children}
        </ToastContext.Provider>
  )
}

export {ToastProvider, ToastContext};


//import React from 'react';


//let ToastContext;
//const { Provider} = (ToastContext = React.createContext({}));

//const ToastProvider = ({}) => {
//  const {toast, remoteToast, addToast} = useToast
//}



