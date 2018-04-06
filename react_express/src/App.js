import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',usia:'',team:[]}
  }
  click(){
    this.setState({nama: this.refs.nama.value,
                   usia: this.refs.usia.value});
  }
searching(){
    axios.get('http://localhost:3210/data').then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        team:ambilData.data,
      })
    })
    }

  muat=()=>{
    axios.post('http://localhost:3210/input',
    {
      nama:this.state.nama,
      usia:this.state.usia
    }
  )
  }
  render() {
    const data = this.state.team.map((item,index)=>{
      var nm = [item.nama];
      var age = [item.usia];
      
      return <tr key={index}><td>{nm}</td><td>{age}</td></tr>
    })
    return (
      <div className="container">
        <center>
          <h1>REACT EXPRESS MYSQL</h1>
          <div className="row">
            <div className="col-lg-12">
            <form>
              <input className="form-control" ref="nama" type="text" placeholder="isi nama anda" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
              <input className="form-control" ref="usia" type="number" placeholder="isi umur anda" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
              <button type="submit" className="btn btn-danger btn-block" style={{width:'100px'}} onClick={()=>{this.muat();}}>post</button>
            </form>
            <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.searching();}}>get</button>
            </div>
          </div>
        </center>
        <center>
        <table>
          <tr>
            <td>Nama</td>&nbsp;&nbsp;
            <td>Usia</td>
          </tr>
        </table>
        </center>
        <br/>
        <center>
        {data}
        </center>
      </div>
    );
  }
}

export default App;
