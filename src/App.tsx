import { Suspense } from 'react';
import './App.css';
import Bottom from './Bottom';
import {Routes,Route} from "react-router-dom"
import Main from './Main';
import Store from './Main/Store';
import Info from './Main/Info';
import My from './Main/My';

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/info' element={<Info />} />
                    <Route path='/my' element={<My />} />
                </Routes>
            </Suspense>
            <Bottom />
        </div>
    );
}

export default App;
