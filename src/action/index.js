import git from '../api/git'

export const fetchUser = (userName) => {
    return async (dispatch) => {
        const response = await git.get(`/users/${userName}`);
        dispatch({
            type : 'FETCH_USER',
            payload : response.data
        })
    }
}

