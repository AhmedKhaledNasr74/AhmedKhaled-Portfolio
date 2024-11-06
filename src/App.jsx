import "./App.css";
import "xp.css/dist/XP.css";
import wallpaper from "./assets/wallpaper.jpg";
import Windows from "./components/windowsXp/Windows";
function App() {
    return (
        <main
            className={`h-screen w-screen bg-cover bg-center relative`}
            style={{ backgroundImage: `url(${wallpaper})` }}
        >
            <Windows />
        </main>
    );
}

export default App;
