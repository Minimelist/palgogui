export default function Indivpawm({ settingscode, settingsname, value }) {
    console.log('Indivsettings received:', { settingscode, settingsname, value });
    return (
        <div className={settingscode}>
            <div className={`${settingscode}-innercontainer`}>
                <h2>{settingsname}</h2>
                <p>Weightage Set: {value}%</p>
            </div>
        </div>
    );
}
