import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import MovieItem from './Movie/MovieItem';



export class App extends Component {
  
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
  //console.log(keyword)
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
        <div className="App NavBar">
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={logo} className="App-logo " alt="logo" />
                </td>
                <td style={{width:'100'}}>
                  <input style={{fontSize:24,display:'block',width:'100%'}} onChange={(event)=>{this.search(event.target.value)}} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {this.state.rows.map(item=>(
          <div>
            
            <MovieItem movie={item} />
            
          </div>
        ))}
        
      </div>
      
    )
  }
}

export default App




