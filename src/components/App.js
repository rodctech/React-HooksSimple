import React, {Component, useState } from 'react';

//class App extends Component {
  //  state = {resource: 'posts'};
const App = () => {
    const [resource, setResource] = useState('posts');
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
                {resource}
            </div>
        );
   // }
}

export default App;