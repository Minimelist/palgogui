// to import CSS styles
function Indivdash({ ticker, assetname, initials, sector, industry } ) {
    console.log('Indivdash received:', { ticker, assetname, initials, sector, industry }); //note the initials vs initial
    return (
        <div className={ticker}>
            <div className={`${ticker}-innercontainer`}>
                <h2>{assetname}</h2>
                <p>This is the initials: {initials}</p>
                <p>This is the ticker: {ticker}</p>
                <p>This is the sector: {sector}</p>
                <p>This is the industry: {industry}</p>
            </div>
        </div>
    );
}

export default Indivdash;