import ReactDOM from 'react-dom/client';
import { hydrate } from "./shared/store/auth";
import './assets/styles/main.css';
import './shared/data/util/fetch';
import './shared/localization';
import App from './app/App';

hydrate(sessionStorage.getItem('token')).then(() => {
    const container = document.getElementById('root')!;
    const root = ReactDOM.createRoot(container);
    root.render(<App/>);
}).catch(() => {
    console.log("Hydration failed");
});
