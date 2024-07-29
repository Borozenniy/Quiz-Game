import { useContext } from 'react';
import { ToastContext } from '../../components/toast/toast-provider';

const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { useToast };