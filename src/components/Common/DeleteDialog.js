

const  DeleteDialog = ({
    handleDeleteTrue,
    handleDeleteFalse
}) =>{


    return (
      <div className="modal">
        <div className="modal_box">
          <p>Are you sure you want to delete this game?</p>
          <button onClick={handleDeleteFalse} className="modal_buttonCancel">Cancel</button>
          <button onClick={handleDeleteTrue} className="modal_buttoDelete">
            Confirm
          </button>
        </div>
      </div>
    );
    }
  
  export default DeleteDialog;