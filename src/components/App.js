import React, {Component, useState } from 'react';
import ResourceList from './ResourceList';

//class App extends Component {
  //  state = {resource: 'posts'};
const App = () => {
    const [resource, setResource] = useState('posts');//Array Destructuring
   // render() {
        return (
            <div>
                <div>
                    <button onClick={() => setResource('posts')}>
                        Posts
                    </button>
                    <button onClick={() => setResource('todos')}>
                        ToDos
                    </button>
                </div>
                <ResourceList resource={resource} />
            </div>
        );
   // }
};

export default App;