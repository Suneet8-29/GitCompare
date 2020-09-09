import {useLocation} from 'react-router-dom'


export function url() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return new URLSearchParams(useLocation().search);
}

