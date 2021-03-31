import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Countries() {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        let source = axios.CancelToken.source();

        const loadData = async () => {
            try {
                const respone = await axios.get('https://api.chucknorris.io/jokes/random', { cancelToken: source.token });

                setJoke(respone.data.value);
            }
            catch (error) {
                if (axios.isCancel(error)) {
                    console.log('caught cancel');
                } else {
                    throw error;
                }
            }
        };

        loadData();
        return () => {
            source.cancel()
        };
    }, []);


    return (
        <div>
            {joke}
        </div>
    )
}

export default Countries
