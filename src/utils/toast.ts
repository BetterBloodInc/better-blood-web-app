import toast from 'react-hot-toast'

/**
 * Show a toast with an optional "Undo" action.
 * Use for reversible actions (e.g. remove item). When the user clicks Undo,
 * onUndo is called and the toast is dismissed.
 */
export function toastWithUndo(
  message: string,
  options?: {
    onUndo?: () => void
    duration?: number
  },
): void {
  const { onUndo, duration = 5000 } = options ?? {}
  if (!onUndo) {
    toast.success(message, { duration })
    return
  }
  toast.custom(
    (t) => (
      <div className="toast-with-undo" data-visible={t.visible}>
        <span>{message}</span>
        <button
          type="button"
          className="toast-with-undo__button"
          onClick={() => {
            onUndo()
            toast.dismiss(t.id)
          }}
        >
          Undo
        </button>
      </div>
    ),
    { duration },
  )
}
