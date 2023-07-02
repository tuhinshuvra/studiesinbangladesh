import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - studiesinBangladesh`;
    }, [title])
};

export default useTitle;