import { configureStore, createReducer } from '@reduxjs/toolkit'
import {
	setEditor,
	cleanEditor,
	addElementsToPath,
	removeElementsInPath,
	updateObject,
	addToArray,
	addField
} from "./actions";
import {string} from "prop-types";


const editorReducer = createReducer(
  {
	  titles: ["Inicio"],
	  path: [],
	  pathType: [],
	  object: {}
  },
  (builder) => {
    builder
	    .addCase(setEditor, (state, action) => {
	    	console.log('SET EDITOR:',action.payload);
	    	let res = {...state, ...action.payload};
	    	return res;
	    })
	    .addCase(updateObject, (state, action) => {
		    console.log('UPDATE PAGE DATA EDITOR:',action.payload);
		    let copy = JSON.parse(JSON.stringify(state.object));
		    // @ts-ignore
		    let obj = copy
		    // @ts-ignore
		    const path = action.payload.path;
		    let lastKeyIndex = path.length - 1;
		    for (let i = 0; i < lastKeyIndex; i++) {
			    obj = obj[path[i]];
		    }
		    // @ts-ignore
		    obj[path[lastKeyIndex]] = {...obj[path[lastKeyIndex]], ...action.payload.obj}
		    let res = {...state, object: copy};
		    return res;
	    })
	    .addCase(addElementsToPath, (state, action:any) => {
		    console.log('ADD TO PATH EDITOR',action.payload);
		    let newPath = [...state.path, ...action.payload.items] as any;
		    let newPathType = [...state.pathType] as any;
		    let newTitles = [...state.titles];
		    newTitles.push(action.payload.title);
		    newPathType.push(action.payload.items.length > 1 ? "array" : "object");
		    return {
			    ...state,
			    titles: newTitles,
			    path: newPath,
			    pathType: newPathType
		    };
	    })
	    .addCase(addField, (state, action:any) => {
		    console.log('ADD NEW ELEMENT TO LIST',action.payload);
		    let copy = JSON.parse(JSON.stringify(state.object));
		    // @ts-ignore
		    let obj = copy
		    // @ts-ignore
		    const path = ["fields", "items"];
		    let lastKeyIndex = path.length - 1;
		    for (let i = 0; i < lastKeyIndex; i++) {
			    obj = obj[path[i]];
		    }
		    // @ts-ignore
		    obj[path[lastKeyIndex]] = [...obj[path[lastKeyIndex]], action.payload.newItem]
		    return {
			    ...state,
			    object: copy
		    };
	    })
	    .addCase(addToArray, (state, action:any) => {
		    console.log('ADD NEW ELEMENT TO LIST',action.payload);
		    let copy = JSON.parse(JSON.stringify(state.object));
		    // @ts-ignore
		    let obj = copy
		    // @ts-ignore
		    const path = action.payload.path;
		    let lastKeyIndex = path.length - 1;
		    for (let i = 0; i < lastKeyIndex; i++) {
			    obj = obj[path[i]];
		    }
		    // @ts-ignore
		    obj[path[lastKeyIndex]] = [...obj[path[lastKeyIndex]], action.payload.newItem]
		    return {
			    ...state,
			    object: copy
		    };
	    })
	    .addCase(removeElementsInPath, (state, action:any) => {
		    console.log('REMOVE PATH ELEMENTS EDITOR',action.payload);
		    let newPath = [...state.path] as any;
		    let newPathType = [...state.pathType] as any;
		    let newTitles = [...state.titles] as any;
		    if(newTitles.length > 1)newTitles.pop();
		    newPath.pop();
		    newPathType.pop();
		    if(state.pathType[state.pathType.length - 1] === "array") newPath.pop();
		    console.log('New path: ',newPath);
		    return {
			    ...state,
			    titles: newTitles,
			    pathType: newPathType,
			    path: newPath
		    };
	    })
	    .addCase(cleanEditor, (state, action:any) => {
	        console.log('CLEAN EDITOR',action.payload);
	        return {
		        titles: ["Inicio"],
		        path: [],
		        pathType: [],
		        object: {}
	        };
	    })
      .addDefaultCase((state, action) => {
      })
  }
)

const store = configureStore({
	reducer: {
		editor: editorReducer
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
