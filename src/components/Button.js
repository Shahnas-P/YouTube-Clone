const Button = ({name}) =>{
    return (
        <button  className="bg-slate-100   ml-3 w-auto h-7 px-3 rounded-md font-medium hover:bg-slate-200 text-center">
            {name}
        </button>
    )
}
export default Button;