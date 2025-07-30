// to import CSS styles
function Indivsettings({ settingscode, settingsname, value }) {
    console.log('Indivsettings received:', { settingscode, settingsname, value });
    return (
        <div className={settingscode}>
            <div className={`${settingscode}-innercontainer`}>
                <h2>{settingsname}</h2>
                <p>Value Set: {value}</p>
            </div>
        </div>
    );
}

export default Indivsettings;