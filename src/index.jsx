import { App } from "./App";
import{createRoot} from "react-dom/client";
import'./index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SWRConfig } from "swr";
import { fetcher } from './useGithubUser';

const swrConfig = {
    fetcher, 
  };
  
  function Root(){
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  }

createRoot(document.getElementById('root')).render(<App/>)