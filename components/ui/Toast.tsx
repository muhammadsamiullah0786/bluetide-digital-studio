'use client';

import { useState, useCallback, createContext, ReactNode, useContext } from 'react';
import Icon from './Icon';

interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning', duration?: number) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration = 3000
  ) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  const typeConfig = {
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900' },
    error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900' },
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900' },
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-40 space-y-2 sm:max-w-sm">
      {toasts.map((toast) => {
        const config = typeConfig[toast.type || 'info'];
        return (
          <div
            key={toast.id}
            className={`${config.bg} ${config.border} ${config.text} border rounded-lg px-4 py-3 flex items-start justify-between gap-3 animate-slideUp shadow-soft`}
            role="alert"
          >
            <span className="text-sm font-medium leading-snug flex-1">{toast.message}</span>
            <button
              onClick={() => onRemove(toast.id)}
              className="p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors flex-shrink-0"
              aria-label="Close notification"
            >
              <Icon name="x" size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
