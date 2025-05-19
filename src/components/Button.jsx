function Button(props) {
    return (
        <button
            {...props}
            className="bg-teal-300 text-gray-950 font-bold p-2 rounded-md"
        >
            {props.children}
        </button>
    )
}
export default  Button;