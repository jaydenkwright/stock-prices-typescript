import React from 'react'

interface Props {
    searchQuery: string;
}

export const Stock: React.FC<Props> = ({ searchQuery }) => {
    console.log(searchQuery)
    return (
        <div>
            
        </div>
    )
}

export default Stock