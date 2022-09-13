

const DeleteDialog = ({
  handleDeleteTrue,
  handleDeleteFalse
}) => {


  return (
   
    <div id="myModal" className="modal fade">
      <div className="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header">
            <div class="icon-box">
              <i clasNames="material-icons">&#x274C;</i>
            </div>
            <h4 className="modal-title">Are you sure?</h4>
            <button onClick={handleDeleteFalse} type="button" className="close" data-dismiss="modal" aria-hidden="true">&#x2715;</button>
          </div>
          <div className="modal-body">
            <p>Do you really want to delete this game?</p>
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