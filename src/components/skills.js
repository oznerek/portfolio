import React from 'react';

export default class Skills extends React.Component {
    render() {
        return(
            <section id='skills' className='skills'>
                <div className='page__title'>
            <p className='page__title-number'>02</p>
            <h2 className='page__title-text'>Skills</h2>
          </div>

          <div className='grid'>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-bootstrap"></i>
          <i class="fab fa-node-js"></i>
          </div>
            </section>
        )
    }
}