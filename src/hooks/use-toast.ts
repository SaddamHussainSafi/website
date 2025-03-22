import { useCallback, useEffect, useState } from "react";

// Define the Toast and ToasterToast types since they're missing
interface Toast {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ToasterToast extends Toast {
  id: string;
  open: boolean;
}

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const useToast = () => {
  const [toasts, setToasts] = useState<ToasterToast[]>([]);

  const dismiss = useCallback((toastId?: string) => {
    setToasts((toasts) => {
      if (toastId) {
        return toasts.map((toast) => {
          if (toast.id === toastId) {
            return {
              ...toast,
              open: false,
            };
          }
          return toast;
        });
      }
      return toasts.map((toast) => ({
        ...toast,
        open: false,
      }));
    });
  }, []);

  const toast = useCallback(
    ({ ...props }: Omit<Toast, "id">) => {
      const id = crypto.randomUUID();

      const update = (props: Toast) =>
        setToasts((toasts) => toasts.map((t) => (t.id === id ? { ...t, ...props } : t)));
      const dismiss = () => setToasts((toasts) => toasts.filter((t) => t.id !== id));

      setToasts((toasts) => [
        ...toasts,
        { ...props, id, open: true, onOpenChange: (open: boolean) => {
          if (!open) dismiss();
        }},
      ].slice(-TOAST_LIMIT));

      return {
        id,
        dismiss,
        update,
      };
    },
    [setToasts]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss]);

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.open && toast.id && !toastTimeouts.has(toast.id)) {
        const timeout = setTimeout(() => {
          if (toast.id) {
            dismiss(toast.id);
            toastTimeouts.delete(toast.id);
          }
        }, toast.duration || TOAST_REMOVE_DELAY);

        toastTimeouts.set(toast.id, timeout);
      }
    });

    return () => {
      toastTimeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
      toastTimeouts.clear();
    };
  }, [toasts, dismiss]);

  return {
    toast,
    dismiss,
    toasts,
  };
};

export { useToast };
