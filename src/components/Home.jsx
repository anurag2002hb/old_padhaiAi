import React from 'react'

function Home() {
  return (
    <div>
      <header className="p-3 border-bottom" style={{backgroundColor: '#e9e6e3'}}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              {/* <b><h3>PadhaiAi</h3></b> */}
              <img src="./nlogo.png" alt="padhaiAi" className="img-fluid" width={120} height={30}/>
            </a>
            <ul className="nav col-12 col-lg-auto px-5 me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 link-dark">Home</a></li>
              <li><a href="#" className="nav-link px-2 link-dark">Courses</a></li>
              <li><a href="#" className="nav-link px-2 link-dark">About us</a></li>
              <li><a href="#" className="nav-link px-2 link-dark">Projects</a></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
            <div className="dropdown text-end ">
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 
                <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
                {/* <span className='fs-5'> Dashboard</span>  */}
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main style={{backgroundColor: '#e9e6e3'}}>
      <div className="container-fluid p-5" style={{backgroundColor: '#e9e6e3'}}>
        <div className="row flex-lg-row-reverse align-items-center ">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="./home-5-hero-image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={550} height={400} loading="lazy" />
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="display-4 fw-bold lh-2 mb-3" style={{color: '#3f3a64'}}>Experience <br /> 
            A Learning That<br />  Take You Next Level</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-lg px-4 me-md-2" style={{backgroundColor: '#3f3a64', color: 'white'}}>Course</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Practice</button>
            </div>
          </div>
        </div>
      </div>
      </main>
      <section className="py-1 bg-light text-center container-fluid pt-5">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              {/* <p className="lead text-muted">START LEARNING CODING LANGUAGE</p> */}
              <p className="lead text-black-50 mb-0" style={{fontWeight: '500'}}>START LEARNING CODING LANGUAGE</p> 
              <h1 className="fw-light fw-bold" style={{lineHeight: '1.3', fontSize: '3.25rem', color: '#3f3a64'}}>Build Your Dream <span style={{fontWeight: '200'}}>Today</span></h1>          
            </div>
          </div>
        </section>
      <div className="container-fluid pb-5" style={{color: 'white', backgroundColor: '#f6f7f9 '}}>
        <div className="row mb-3 text-center d-flex justify-content-center"> 
          <div className="col-3 themed-grid-col mx-5 px-3 py-4 human ">
             {/* <h3>Javascript</h3> */}
             Javascript
            </div>
          <div className="col-3 themed-grid-col mx-5  px-3 py-4 human">
          <i className="bi bi-filetype-js px-3"></i> 
            skill set
          </div>
          <div className="col-3 themed-grid-col mx-5  px-3 py-4 human">skill set</div>
        </div>
        <div className="row mb-3 text-center d-flex justify-content-center">
          <div className="col-3 themed-grid-col mx-5  px-3 py-4 human">skill set</div>
          <div className="col-3 themed-grid-col mx-5  px-3 py-4 human">skill set</div>
          <div className="col-3 themed-grid-col mx-5  px-3 py-4 human">skill set</div>
        </div>
      </div>
      <div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">this is first fucking headlime
            <h2 className="display-5">No Another headline after this fucking shit</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}} />
        </div>
        <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">This is great for me</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}} />
        </div>
      </div>
      </div>
      <div>
      <div className="container px-4 py-3" id="hanging-icons">
        {/* <h2 className="pb-2 border-bottom">Hanging icons</h2> */}
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2" /></svg>
            </div>
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill" /></svg>
            </div>
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools" /></svg>
            </div>
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
      
      <slider>
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container p-5">
                {/* slider inner body start */}
                <div className="row flex-lg-row-reverse align-items-center">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./c-lab-1.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                  </div>
                  <div className="col-lg-6 p-5 ">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Responsive slider zero</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    
                  </div>
                </div>
              </div>
      {/* slider inner body end */}
            </div>
            <div className="carousel-item">
              {/* start */}
              <div className="container p-5">
                {/* slider inner body start */}
                <div className="row flex-lg-row-reverse align-items-center">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./c-lab-2.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                  </div>
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Responsive sider first</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    
                  </div>
                </div>
              </div>

              {/* end */}
              
            </div>
            <div className="carousel-item">
              {/* start */}
              <div className="container p-5">
                <div className="row flex-lg-row-reverse align-items-center">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./c-lab-3.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                  </div>
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Responsive slider second</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon rounded" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon rounded" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </slider>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width={24} height={19} />
            <small className="d-block mb-3 text-muted">© 2017–2022</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Home