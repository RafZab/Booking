export default function () {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" style={{
                    width: '3rem',
                    height: '3rem',
                    marginTop: '30px'
                    }}
                    role="status">
            </div>
            </div>
            <div className="d-flex justify-content-center">
                <p>Ładowanie...</p>
            </div>
        </>
    );
}