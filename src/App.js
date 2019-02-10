import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    // membuat data state this.state.characters
    state = {
        characters: []
    }

    removeCharacter = index => {
        // mengambil data state dari this.state.characters
        const { characters } = this.state

        // menghapus data state dari array this.state.characters
        // dengan cara memanfaatkan fungsi filter
        this.setState(
            {
                characters: characters.filter((character, i) => {
                    // filter akan mengembalikan semua data array this.state.characters
                    // kecuali data array[i] == index
                    // i adalah index dari data array this.state.characters
                    // index adalah nilai inputan fungsi removeCharacter
                    return i !== index
                })
            }
        )
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App