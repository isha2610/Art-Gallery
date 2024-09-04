import React from "react";
import "./Navbar";

function UploadFiles() {
  return (
    <div class="container d-flex justify-content-center" >
    <form encType="multipart/form-data">
  <div class="mb-3">
    <label class="form-label">Title</label>
    <input type="text" class="form-control" placeholder="Title..." style={{paddingRight:100}}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Artist</label>
    <input type="text" class="form-control" placeholder="Artist..." style={{paddingRight:100}}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Description</label>
    <input type="text" class="form-control" placeholder="Description..." style={{paddingRight:100}}/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Add File</label>
    <input type="file" class="form-control" style={{paddingRight:100}}/>
  </div> 
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Add to public gallery</label>
  </div>
  <button type="submit" class="btn btn-primary">Upload</button>
</form>
</div>
  );
}
export default UploadFiles;
