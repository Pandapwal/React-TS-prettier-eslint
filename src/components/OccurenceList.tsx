import React, { CSSProperties, ReactNode, useEffect, useState } from 'react'

type OccurenceListProps = {
    occurences: { [key: string]: number }
}

function OccurenceList(props: OccurenceListProps) {
    const [dupes, setDupes] = useState<[string, number][]>(Object.entries(props.occurences))

    function handleClick(filter: string) {
        if (filter == 'asc') {
            setDupes(Object.entries(props.occurences).sort((a, b) => a[1] - b[1]))
        } else if (filter == 'desc') {
            setDupes(Object.entries(props.occurences).sort((a, b) => b[1] - a[1]))
        }
    }

    function displayDupes(): ReactNode[] {
        const arr: ReactNode[] = []

        dupes.forEach((dupe, index: number) => {
            const yellow = 255 - 255 * ((dupe[1] > 10 ? 10 : dupe[1]) / 10)

            const dupeStyle = {
                color: `rgb(255, ${yellow}, 0)`,
            } as CSSProperties

            arr.push(
                <p key={index}>
                    {dupe[0]} : <span style={dupeStyle}>{dupe[1]}</span>
                </p>,
            )
        })

        return arr
    }

    useEffect(() => {
        setDupes(Object.entries(props.occurences))
    }, [props.occurences])

    return (
        <div className='w-50 h-100 overflow-hidden'>
            <div className='flex h-center'>
                <h3 className='m-0'>Occurences</h3>
                <button className='ms-1' onClick={() => handleClick('asc')}>
                    &uarr; ASC
                </button>
                <button onClick={() => handleClick('desc')}>&darr; DESC</button>
            </div>
            <div className='scrollable'>{displayDupes()}</div>
        </div>
    )
}

export default OccurenceList
