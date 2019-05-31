import {useState, useEffect} from 'react';
import axios from "axios";


const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    //   L327 min 3:30..>  Defining and Invoking a Function on same step.
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
    );

    return resources;
};

export default useResources;