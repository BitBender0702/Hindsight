const Message = ({ className, children }) => {
    return (
        <div className={ `message py-2.5 px-5 rounded-2xl border-2 border-msg-warning-color bg-msg-warning-bg ${ className }` }>
            <p className='font-medium text-text-base tracking-tighter text-tertiary-color text-center'>{ children }</p>
        </div>
    )
}

export default Message