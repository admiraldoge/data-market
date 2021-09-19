import {createAction} from "@reduxjs/toolkit";

//APP
export const setEditor = createAction<object>('setEditor')
export const cleanEditor = createAction<object>('cleanEditor')
export const addElementsToPath = createAction<object>('addElementsToPath')
export const removeElementsInPath = createAction<object>('removeElementsInPath')
export const updatePageData = createAction<object>('updatePageData')
