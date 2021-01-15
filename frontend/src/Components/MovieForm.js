/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

import 'regenerator-runtime/runtime';

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      Description: '',
      Date: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

   submitHandler= async (e) => {
     e.PreventDefault();
     try {
       await axios.post('http://localhost:3001/posts', this.state)
         .then((res) => {
           console.log(res);
         });
     } catch (err) {
       console.log(err);
     }
   };

   render() {
     const { title, Description, Date } = this.state;
     return (
       <div>
         <form onSubmit={this.submitHandler}>
           <div>
             <p>Title</p>
             <input
               type="text"
               name="title"
               value={title}
               onChange={this.changeHandler}
             />
           </div>
           <div>
             <p>Description</p>
             <input
               type="text"
               name="Description"
               value={Description}
               onChange={this.changeHandler}
             />
           </div>
           <div>
             <p>Date</p>
             <input
               type="date"
               name="Date"
               value={Date}
               onChange={this.changeHandler}
             />
           </div>
           <button type="submit">Submit</button>
         </form>
       </div>
     );
   }
}
