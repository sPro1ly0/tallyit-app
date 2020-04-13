import React, { Component } from 'react';
import '../AddPlayerForm/AddPlayerForm.css';

class EditPlayerForm extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Edit Mom&apos;s Name</h1>
        </header>
        <section className='add-edit-player'>
          <form>
            <label>Edit Player&apos;s Name</label>
            <input type="text" placeholder="Mom" required/>
            <button>Save New Name</button>
          </form>
        </section>
        <button>Go Back</button>
      </>
    );
  }
}

export default EditPlayerForm;