import React from 'react';
import SeriousList from "../../seriousList";

class Serious extends React.Component
{
  state = {
    serious: [],
    seriousName: '',
    isFetching: false
  };
  
  onSeriousInputChange = e => {
    this.setState({seriousName: e.target.value, isFetching: true});
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({
        serious: json,
        isFetching: false
      }))
  };
  
  render() {
    const {serious, seriousName, isFetching} = this.state;
    return (
      <div>
        <div>
          <input type="text" value={seriousName} onChange={this.onSeriousInputChange}/>
        </div>
        {
          !isFetching && serious.length === 0 && seriousName.trim() === ''
          && <p className="gold-title">Please Enter Serious Name In Input</p>
        }
        {
          !isFetching && serious.length === 0 && seriousName.trim() !== ''
          && <p className="gold-title">No Tv serious have been found</p>
        }
        {
          isFetching && <p className="gold-title">Loading...</p>
        }
        {
          !isFetching && <SeriousList list={this.state.serious}/>
        }
      </div>
    )
  }
}

export default Serious;