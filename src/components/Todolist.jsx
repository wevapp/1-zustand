import React, { useState } from 'react';

// import Zustand
import { useUserInput } from '../store/useStore';

const Todolist = () => {
    
    const { inputUser, setInput, removed } = useUserInput();
    const [value, setValue] = useState('');

    return (
        <div>
            <p>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='border-2'
                    placeholder='Enter your input'
                />
            </p>
            <button onClick={() => setInput(value)} className='bg-green-400 p-1'>
                Add
            </button>
            <ul>
                {inputUser.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button
                            onClick={() => removed(index)}
                            className='bg-red-400 px-2 ml-6'
                        >del</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
