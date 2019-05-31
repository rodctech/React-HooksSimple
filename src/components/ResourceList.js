import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

/*  REFACTOR INTO FUNCTIONAL Comp
class ResourceList extends Component {
    state = {resources: [ ]};

    async componentDidUpdate(prevProps) {
       if(prevProps.resource !== this.props.resource) {
           const response = await axios.get(
               `https://jsonplaceholder.typicode.com/${this.props.resource}`
           );
           this.setState({resources: response.data });
       }
    }

    async componentDidMount() {*/
const ResourceList = () => {
    const [resources, setResources] = useState([]);

    const fetchResource = async () => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${this.props.resource}`
        );

        this.setState({resources: response.data});
    };

   // render() {
        return (
            <div>
                {resources.length}
            </div>
        );
   // }
};


export default ResourceList;