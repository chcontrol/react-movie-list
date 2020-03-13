import React, { Component } from 'react'

export class MovieItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

    
    

    render() {
        const {id,title,poster_src,overview} = this.props.movie
        return (
            <div>
                <table key={id}>
                    <thead>
                        <tr>
                            <td>
                                <img src={poster_src} alt={'description'} />
                            </td>
                            <td>
                                <strong >{ title }</strong>
                                <p>
                                    {overview }
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default MovieItem
