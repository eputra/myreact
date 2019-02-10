import React, {Component} from 'react'
import axios from 'axios'

class Api extends Component {
    state = {
        data: []
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = 'http://flask-rest-api-maverick.herokuapp.com/api/v1/mahasiswa'
        axios.get(url)
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.data.mahasiswa
                })
            })
    }

    render() {
        const {data} = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default Api