import React/*, {Component, useState, useEffect}*/ from 'react';
// import axios from 'axios';  MOVED TO NEW useRes.js file for REUSE
import useResources from './useResources';


/*  REFACTORED INTO FUNCTIONAL Comp
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



const ResourceList = ({resource}) => {
    const resources = useResources(resource);

    // render() {
    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
    // }
};

export default ResourceList;


/*  REFACTORED useEffect^^ to define and invoke function on same step ^^^
const fetchResource = async (resource) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
    );

    //  this.setState({resources: response.data});
    setResources(response.data);
};

useEffect(() => {
    fetchResource(resource);
}, [resource]);*/
