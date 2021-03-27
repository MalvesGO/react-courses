import React, { useState } from 'react';
import CardItems from '../src/CardItems';
import Courses from '../src/Courses';
import Navbar from '../src/NavBar'

// https://www.youtube.com/watch?v=jo-IV8i5Gdk&list=PLeBknJ2kuv1mDABV2N-H2tcu1vbfffRvg&index=15

const Detalhes = () => {

    const [name, setName] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    return (
      <> 

      <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
      </>
    )
}

export default Detalhes;