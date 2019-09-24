import React from 'react';
import Loader from '../../Loader/index';

class SingleSerious extends React.Component
{
  state = {
    show: null
  };
  
  componentDidMount() {
    fetch(`http://api.tvmaze.com/episodes/${this.props.match.params.id}?embed=show`)
      .then(response => response.json())
      .then(json => this.setState({
            show: json
          }))
  }
  
  
  render() {
    const { show } = this.state;
    return (
      <div>
        <div>
          {show === null && <Loader/>}
          {
            show !== null &&
              <div className="parent-serious">
                <div className="serious-info">
                  <p> <span>Name:</span> {show._embedded.show.name || 'N/A'}</p>
                  <p> <span>Premiered:</span> {show._embedded.show.premiered || 'N/A'}</p>
                  <p> <span>Ratting:</span>  {show._embedded.show.rating.average || 'N/A'}</p>
                  <p> <span>Episodes:</span>  {show._embedded.show.runtime || 'N/A'}</p>
                  <p> <span>Country:</span>  {show._embedded.show.network.country.name || 'N/A'}</p>
                </div>
                {/*<div className="serious-img">*/}
                    <img src={show._embedded.show.image.medium} alt="show"/>
                {/*</div>*/}
              </div>
          }

          {/*{*/}
          {/*  show !== null &&*/}
          {/*  <div>*/}
          {/*    <p>{show.name}</p>*/}
          {/*    <p>Premiered - {show.premiered}</p>*/}
          {/*    <p>Ratting - {show.rating}</p>*/}
          {/*    <p>Episodes - {show.runtime}</p>*/}
          {/*    <p>*/}
          {/*      <img src={show.image} alt="Show"/>*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*}*/}
        </div>
      </div>
    );
  }
}

export default SingleSerious;