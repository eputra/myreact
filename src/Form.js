import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    // jika menggunakan ini value di form submit tidak akan hilang setelah di klik submit
    // state = {
    //     name: '',
    //     job: ''
    // }

    // ini sama perilakunya seperti di atas
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         name: '',
    //         job: ''
    //     }
    // }

    initialState = {
        name: '',
        nim: ''
    }
    
    state = this.initialState

    // constructor(props) {
    //     super(props)

    //     this.initialState = {
    //         name: '',
    //         job: ''
    //     }

    //     this.state = this.initialState
    // }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)

        const body = {
                name: this.state.name,
                nim: this.state.nim
        }

        const url = 'http://flask-rest-api-maverick.herokuapp.com/api/v1/mahasiswa'

        console.log(body)

        axios.post(url, {body})
            .then(res => {
                console.log(res)
            })
    }

    render() {
        const {name, nim} = this.state

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label>NIM</label>
                <input
                    type="text"
                    name="nim"
                    value={nim}
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form