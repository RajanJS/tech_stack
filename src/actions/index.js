/**
 * Created by rajanmaharjan on 7/18/17.
 */

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};