import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './home';
import Phone from './About';
// import Join from './joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/A.
                0.
                bout" element={<Phone/>} />
                {/* <Route path="/joinus" element={<Join/>} /> */}
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
