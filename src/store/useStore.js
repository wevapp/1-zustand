import { create } from "zustand";


// Zustand for Count Component
export const useStore = create((set) => ({
    // State for count
    count: 0,

    // Function to increment count
    increment: () =>
        set((state) => ({
            count: state.count + 1
        }))
}));



// Zustand state management for Todolist Component
export const useUserInput = create((set) => ({
    // State for user input
    inputUser: [],

    // Function to set user input
    setInput: (inputValue) => // this parameter inputValue is from onClick button Add
        set((state) => ({ 
            inputUser: [...state.inputUser, inputValue] 
        })),

    // Function to delete user input
    removed: (index) => // this parameter index is from onClick button del
        set((state) => ({
            inputUser: state.inputUser.filter((v, i) => i !== index)
        }))
}));


// Zustand state management for AddStudent Component
export const useStudentStore = create((set) => ({
    // state variable
    students: [],

    // state functions
    // add srudent
    addStudent : (name, age) => set((state) => ({ 
        students: [...state.students, {name, age}]
    })),
    // removed student
    removedStudent : (index) => set((state) => ({
        students: state.students.filter((student, StudentIndex) => StudentIndex !== index)
    })),
}))

// use for login. compare the name and age of student stored in students then validate
export const useStudentLogin = () => {
    // import students
    const students = useStudentStore((state) => state.students)
  
    // Function to validate login
    const validateLogin = (name, age) => { // This name and age is from StudentList component useState name and age
      return students.some((student) => student.name === name && student.age === age) // check name and age if equals to student name and age
    }
    return { validateLogin } // return the result
  }



