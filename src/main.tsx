import React from 'react';
import ReactDOM from 'react-dom';
import './globalLog';
// import App from './demo/SuspenseDemo/demo2'
// import './demo/SchedulerDemo';
// import App from './demo/BaseScheduleDemo';
// import App from './demo/LongTaskDemo';
// import App from './demo/testDemo';
// import App from './demo/bailoutDemo';
// import App from './demo/ContextDemo';
// import App from './demo/BailoutDemo/step1';
// import App from './demo/DiffDemo/v2';
// import App from './demo/Performance/demo2';
// import App from './demo/ErrorCatchDemo';
// import App from './demo/TransitionDemo/demo3';
// import App from './demo/batchDemo'
// import App from './demo/eagerStatedemo'
import App from './demo/UseRefDemo'

const rootEle = document.getElementById('root');

// import './demo/MiniUpdate2State';
// import './demo/MiniDiff';
// import './demo/MiniUseState';
// import './demo/MiniSchedulePhase';

rootEle && ReactDOM.createRoot(rootEle).render(<App/>);
// ReactDOM.render(<App/> , rootEle)

  