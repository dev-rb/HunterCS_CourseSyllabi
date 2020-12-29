import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Class {
    id: string,
    description: string,
    syllabi: string[]
}

export interface Course {
    type: string,
    classes: Class[]
}

export interface CoursesState {
    status: string | null,
    error: string | undefined,
    courses: Course[],
    selected: Course
}

const initState: CoursesState = {
    status: null,
    error: undefined,
    courses: [],
    selected: { type: 'Major Classes', classes: [] }
}

export const getCourses = createAsyncThunk('courses/getCourses', async (endpoint: string) => {
    const res = await fetch(endpoint, { mode: 'cors' });
    if (!res.ok) {
        throw Error(res.statusText);
    }
    const json = await res.json();
    // console.log(json);
    return json;
});


export const coursesSlice = createSlice({
    name: 'courses',
    initialState: initState,
    reducers: {

        selectCourse: (state: CoursesState, { payload }: PayloadAction<string>) => {
            state.selected = state.courses.filter((item) => item.type === payload)[0];
        }
    },
    extraReducers: builder => {
        builder.addCase(getCourses.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getCourses.fulfilled, (state, { payload }: PayloadAction<Course[]>) => {
            state.status = 'fullfilled';
            state.courses = payload;
            state.selected = payload[0];
        });
        builder.addCase(getCourses.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});


export const {
    selectCourse
} = coursesSlice.actions