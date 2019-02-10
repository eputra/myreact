import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>NIM</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const { characterData, removeCharacter } = props

    const rows = characterData.map((row) => {
        return (
            <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.nim}</td>
                <td><button onClick={() => removeCharacter(row.id)}>Delete</button></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        )
    }
}

export default Table