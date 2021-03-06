import React, { Component } from 'react';
import Axios from 'axios'
import MovieItem from './MovieItem';



export class MovieMain extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       rows:[]
    }
  }
  componentDidMount(){
    this.search('her');
}
  
search = (keyword)=>{
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=c65e410ca918a233b860e99728916f71&query='+keyword;
  var dataArray = []
  Axios.get(url).then(result=>{
    result.data.results.forEach(item=>{
      item.poster_src = "http://image.tmdb.org/t/p/w185/"+item.poster_path
      dataArray.push(item);
    });
    
    this.setState({rows: dataArray})
  })
}

  render() {
    return (
      <div>
        <input style={{fontSize:24,display:'block',width:'100%'}} onChange={(event)=>{this.search(event.target.value)}} />
        {this.state.rows.map(item=>(
          <MovieItem  movie={item} />
      ))}
      </div>
    )
  }
}

export default MovieMain




