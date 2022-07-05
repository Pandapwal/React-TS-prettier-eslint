import React, { ReactNode } from 'react'

type NumberlistProps = {
    numbers: string[]
}

function NumberList(props: NumberlistProps) {
    function displayNumbers(): ReactNode[] {
        const arr: ReactNode[] = []

        props.numbers.forEach((num: string, index: number) => {
            arr.push(<p key={index}>{num}</p>)
        })

        return arr
    }

    return (
        <div className='w-50 h-100 overflow-hidden'>
            <div className='flex h-center'>
                <h3 className='m-0'>Numbers</h3>
            </div>
            <div className='scrollable'>{displayNumbers()}</div>
        </div>
    )
}

export default NumberList
