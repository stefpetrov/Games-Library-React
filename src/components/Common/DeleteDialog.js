
const DeleteDialog = ({
  handleDeleteTrue,
  handleDeleteFalse,
  game
}) => {


  return (
   
    <div id="myModal" className="modal fade">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header">
            <div className="icon-box">
              <i className="material-icons">&#x274C;</i>
            </div>
            <h4 className="modal-title">Do you really want to delete {game.title}?</h4>
            <button onClick={handleDeleteFalse} type="button" className="close" data-dismiss="modal" aria-hidden="true">&#x2715;</button>
          </div>
          <div className="modal-footer">
            <button onClick={handleDeleteFalse} type="button" className="btn btn-info" data-dismiss="modal">Cancel</button>
            <button onClick={handleDeleteTrue} type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialog;