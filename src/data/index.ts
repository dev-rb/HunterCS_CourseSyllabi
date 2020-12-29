export interface Course {
    type: string,
    classes: Class[]
}

export interface Class {
    title: string,
    description: string,
    // syllabi: Syllabus[]
}

export interface Syllabus {
    name: string,
    path: string
}
// const courses1: Course[] = main(1, '%PUBLIC_URL%/courses', map)

// console.log(courses1)

export const courses: Course[] = [
    {
        type: "Major Classes",
        classes: [{ title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }]
    },
    {
        type: "Math Classes",
        classes: [{ title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }]
    },
    {
        type: "Major Electives",
        classes: [{ title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }]
    },
    {
        type: "Non-Major Electives",
        classes: [{ title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }, { title: 'CS 127: ', description: 'Introduction to Computer Science' }]
    }
]