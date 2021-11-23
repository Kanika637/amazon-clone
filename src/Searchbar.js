import React from 'react'
import "./search_bar.css"
function Searchbar() {
    return (
        <div className="search_bar">
            <div class="container">
  {/* <div className="row">    
   <div className="col-xs-8 col-xs-offset-2">
    <div className="input-group"> */}
     <div className="input-group-btn search-panel">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <span id="search_concept">All</span> <span class="caret"></span>
      </button>
      </div>
     <input type="hidden" name="search_param" value="all" id="search_param"/>
     <input type="text" class="form-control" name="x" id="search" placeholder="Search"/>
     <span className="input-group-btn">
	     <button className="btn btn-default" type="button">
	       <span className="glyphicon glyphicon-search"></span>
	     </button>
	 </span>
    </div>

            
        </div>
    )
}

export default Searchbar
