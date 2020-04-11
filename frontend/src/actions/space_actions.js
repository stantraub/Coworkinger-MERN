import { getSpaces, getOwnerSpaces, getSpace, createNewSpace } from '../util/space_api_util';
import { addNewReview } from '../util/review_api_util'

export const RECEIVE_ALL_SPACES = "RECEIVE_SPACES";
export const RECEIVE_SPACE = "RECEIVE_SPACE"
export const RECEIVE_OWNER_SPACES = "RECEIVE_OWNER_SPACES";
export const RECEIVE_NEW_SPACE = "RECEIVE_NEW_SPACE";


export const receiveSpace = space => ({
    type: RECEIVE_SPACE,
    space: space
})

export const receiveSpaces = spaces => ({
    type: RECEIVE_ALL_SPACES,
    spaces: spaces.data
})

export const receiveOwnerSpaces = spaces => ({
    type: RECEIVE_OWNER_SPACES,
    spaces
})

export const receiveNewSpace = space => ({
    type: RECEIVE_NEW_SPACE,
    space
})


export const fetchSpace = (id) => dispatch => (
    getSpace(id)
        .then(space => dispatch(receiveSpace(space)))
        .catch(err => console.log(err))
)

export const fetchSpaces = () => dispatch => (
    getSpaces()
        .then(spaces => dispatch(receiveSpaces(spaces)))
        .catch(err => console.log(err))
)

export const fetchOwnerSpaces = (id) => dispatch => (
    getOwnerSpaces(id)
        .then(spaces => dispatch(receiveOwnerSpaces(spaces)))
        .catch(err => console.log(err))
)

export const createSpace = (data) => dispatch => {
    console.log(data)
    return createNewSpace(data)
      .then(space => dispatch(receiveNewSpace(space)))
      .catch(err => console.log(err));
}