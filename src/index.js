import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SomethingNotDefineElsewhere1 from './App';
import SomethingNotDefineElsewhere2 from './TestComponent';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<SomethingNotDefineElsewhere1 />, document.getElementById('root'));
// ReactDOM.render(<SomethingNotDefineElsewhere2 />, document.getElementById('TestComponent'));


registerServiceWorker();
