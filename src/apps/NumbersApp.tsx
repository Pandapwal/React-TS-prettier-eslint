import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import data from '../data/numbers.json'
import './App.css'
import NumberList from '../components/NumberList'
import OccurenceList from '../components/OccurenceList'

function NumbersApp() {
    const [numbers, setNumbers] = useState<string[]>([])
    const [dupes, setDupes] = useState<{ [key: string]: number }>({})

    function checkDuplicates(nums: string[]): { [key: string]: number } {
        const res: { [key: string]: number } = {}

        nums.forEach((num: string) => {
            res[num] ? (res[num] += 1) : (res[num] = 1)
        })

        return res
    }

    function handleClick() {
        setDupes(checkDuplicates(numbers))
    }

    useEffect(() => {
        setNumbers(data)
    }, [])

    return (
        <div className='App flex'>
            <header className='App-header flex center p-1'>
                <h1 className='flex start'>Duplicate finder</h1>
                <img src={logo} className='App-logo' alt='logo' />
                <button onClick={() => handleClick()}>CHECK DUPES</button>
            </header>
            <div className='w-100 flex p-3 vh-100 numbers'>
                <NumberList numbers={numbers} />
                <OccurenceList occurences={dupes} />
            </div>
        </div>
    )
}

export default NumbersApp
