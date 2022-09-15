
const Error = ({
    message,
    setErr
}) => {



    const closeErrorHandler = () => {
        setErr({isError: false, message:''})
    }


    return (
        <div id="myModal" className="modal-error">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{message}</h4>
                        <button onClick={closeErrorHandler} type="button" className="close" data-dismiss="modal" aria-hidden="true">&#x2715;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error