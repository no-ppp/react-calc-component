export function OperatorButton({ children, onHolder}) {
    return (
        <button
            onClick={onHolder}
            className='bg-amber-600 rounded-full w-16 h-16 text-white font-semibold hover:bg-amber-500'> {children} </button>
    )
}