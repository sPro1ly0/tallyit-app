import React, { Component } from 'react';
import './AddPlayerForm.css';

class AddPlayerForm extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Add a New Player</h1>
        </header>
        <section className='add-edit-player'>
          <form>
            <label>Add a New Player</label>
            <input type="text" placeholder="Mila" required/>
            <button>Add Player</button>
          </form>
        </section>
        <button>Go Back</button>
      </>
    );
  }
}

export default AddPlayerForm;