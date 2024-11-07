export function NumButton( { children, onHolder } ) {
    return (
        <button
            onClick={onHolder}
            className="bg-gray-500 rounded-full text-white w-16 h-16 font-semibold hover:bg-gray-400"
        >
            {children}
        </button>
    )
}