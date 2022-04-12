const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
         return (
             <div className="border">
                 <h2 className="rant">{c.rant ? 'Rant!' : 'Rave'} </h2>
                 <h4>{c.content} </h4>
                 <h3>
                     <strong>- {c.author} </strong>
                 </h3>
                 <h4>Rating: {c.stars} </h4>
             </div>
         )   
        })
    }
    return (
        <Def>
          <main>
              <div className="row">
                  <div className="col-sm-6">
                      <img src={data.place.pic} alt={data.place.name} />
                      <h3>
                          Located in {data.place.city}, {data.place.state}
                      </h3>
                  </div>
                  <div className="col-sm-6">
                      <h2>
                          Description
                      </h2>
                      <h3>
                          {data.place.showEstablished()}
                      </h3>
                      <h4>
                          Serving {data.place.cuisines}
                      </h4>
                      <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>  
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    </form>  
                  </div>
                       
              </div>
              <h2>Comments</h2>
              {comments}
              <form method="POST" action={`/places/${data.id}/rant`}>
                  <div className="row">
                  <div className="form-group col-sm-6">
                      <label htmlFor="author">Author</label>
                      <input type="text" className="form-control" id="author" name="author"></input>
                  </div>
                  <div className="form-group col-sm-6">
                      <label htmlFor="content">Content</label>
                      <input type="textarea" className="form-control" id="content" name="content"></input>
                  </div>
                  <div className="form-group col-sm-6">
                      <label htmlFor="stars">Stars</label>
                      <input type="number" step="0.5" className="form-control" id="stars" name="stars"></input>
                  </div>
                  <div className="form-group col-sm-6">
                      <label htmlFor="rant">Rant</label>
                      <input type="checkbox" className="form-control" id="rant" name="rant"></input>
                  </div>
                  <input className="btn btn-primary" type="submit" value="Add Comment" />
                  </div>
                  
              </form>
          </main>
        </Def>
    )
}

module.exports = show