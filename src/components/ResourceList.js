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
const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        );

        //  this.setState({resources: response.data});
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    // render() {
    return (
        <div>
            {resources.length}
        </div>
    );
    // }
};

export default ResourceList;

/* L327 min 3:30..>  Defining and Invoking a Function on same step.
useEffect(
    () => {
        (async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );

            setResources(response.data);
        })(resource);
    },
            [resource]
    );*/
