import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title, description,ImageUrl,newsUrl, author, date, source}=this.props;
    return (
      <div className='my-3'>
        <div className='card'>
        <span className='positon-absolute top-0 translate-middle bade rounded-pill bg-danger' style={{left: '90%',zIndex:'1', width: '50%', textAlign: 'center', marginLeft: '75%'}}>{source}</span>
            <img src={!ImageUrl ? "https://images.wsj.net/im-919081/social": ImageUrl} className='card-img-top' alt='...'/>
            <div className='card-body'>
                <h5 className='card-title'>{title}...</h5> 
                <p className='card-text'>{description}...</p> 
                <p className='crad-text'><small className='text-muted'>By {!author? "unknown" : author } on {new Date(date).toGMTString()}</small></p>
                <a rel="noopener noreferrer"  href={newsUrl}  target='_blank' className='btn btn-sm btn-dark'>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
