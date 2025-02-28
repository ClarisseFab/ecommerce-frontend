function Banner() {
    return (
        <div className="d-flex banner justify-content-center mx-auto gap-5 p-3 mt-5 rounded">
            <div className="d-flex flex-column align-items-center" >
                <h5><strong>+2000</strong></h5>
                <p className="mb-0">randonneurs déjà partis</p>
            </div>
            <div className="d-flex flex-column align-items-center" >
                <h5><strong>4,7/5</strong></h5>
                <p className="mb-0">satisfaction randonneurs</p>
            </div>
            <div className="d-flex flex-column align-items-center" >
                <h5><strong>100</strong></h5>
                <p className="mb-0">randonnées éco-responsables</p>
            </div>
            <div className="d-flex flex-column align-items-center" >
                <h5><strong>100%</strong></h5>
                <p className="mb-0">accessibles en train</p>
            </div>
        </div>
    )
}

export default Banner;