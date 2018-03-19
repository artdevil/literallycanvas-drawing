import React from 'react';
import ReactDOM from 'react-dom';
import 'literallycanvas/lib/css/literallycanvas.css';
import registerServiceWorker from './registerServiceWorker';
import LiterallyCanvas from 'literallycanvas';

ReactDOM.render(<LiterallyCanvas.LiterallyCanvasReactComponent imageURLPrefix="img" />, document.getElementById('root'));
registerServiceWorker();
