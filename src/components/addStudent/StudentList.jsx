import React, { useState } from 'react'
import { useStudentStore } from '../../store/useStore'
import { useStudentLogin } from '../../store/useStore'

const StudentList = () => {

  const [name, setName ] = useState('')
  const [age, setAge ] = useState('')
  const [loginResult, setLoginResult] = useState('');

  const {students, removedStudent} = useStudentStore((state) => state)
  const { validateLogin } = useStudentLogin();

  const handleClick = () => {
    // stored the validateLogin(Result if equal) to isValid variable from Zustand
    const isValid = validateLogin(name, age);
    if (isValid) {
      setLoginResult('You are logged in.');
    } else {
      setLoginResult('Invalid login.');
    }
  }

  return(
    <div>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} {" "} {student.age}
            <button 
              onClick={() => {removedStudent(index)}}
              className='bg-orange-400 px-2 ml-4'
            >Remove</button>
          </li>
        ))}
      </ul>

        <div>
          <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border mt-5'
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
          >Login</button>
          <p>{loginResult}</p>
      </div>
    </div>
  )
}

export default StudentList