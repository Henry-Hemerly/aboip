import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './App.css';

function App() {
    const test0Ref = useRef();
    const testRef = useRef();

    useEffect(() => {
        gsap.to(test0Ref.current, { rotation: '+=360' });
    });
    const testChildren = gsap.utils.selector(testRef);
    useEffect(() => {
        gsap.to(testChildren('.test'), { x: 200 });
    });
    return (
        <div className='App'>
            <div className='test0' ref={test0Ref}>
                Single DOM element
            </div>
            <br />
            <div className='test' ref={testRef}>
                Papa DOM
                <div className='test'>
                    Baby 1<div className='test'>Baby 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
