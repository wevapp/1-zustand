import React, { useState } from 'react'
import { useStudentStore } from '../../store/useStore'

const AddStudent = () => {

    const [name, setName ] = useState('')
    const [age, setAge ] = useState('')

    // From zustand
    const addStudent = useStudentStore((state) => state.addStudent)

    const handleClick = () => {
        addStudent(name, age)
        setName('');
        setAge('');
    }

    return (
    <div>
        <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border'
        />
        <br />
        <input 
            type="text" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='border'
        />
        <br />
        <button
            onClick={handleClick}
            className='bg-green-400 px-2'
        >Add</button>
    </div>
  )
}

export default AddStudent